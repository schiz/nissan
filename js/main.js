jQuery(document).ready(function($) {

	//Настройка бекграундов
	
	var newsBkgTop = $('.news').position().top,
		footerBkgTop = $('footer:last').position().top + 26,
		newsLineTop = $('.news header').position().top + 21;

	$('.newsBkg').css('top',newsBkgTop);
	$('.news-line').css('top',newsLineTop);
	$('.footerBkg').css('top',footerBkgTop);

   //Настройка viewport

   if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
		var viewport = document.querySelector("meta[name=viewport]");
			if (navigator.userAgent.match(/iPad/i)) {
				viewport.setAttribute('content', 'width=device-width; initial-scale=0.7;');
			}
			if (navigator.userAgent.match(/iPhone/i)) {
				viewport.setAttribute('content', 'width=device-width; initial-scale=0.3;');
			}
	}

	//Переключение Новости / Cпецпредложение

	$('#news').on('click',function(e){
		e.preventDefault();
		if (!$('articles-slide.news-artilces').is(':hidden')){
			
			$('.news-articles').siblings('.articles-slide')
							   .removeClass('active').end()
							   .addClass('active');
			$(this).addClass('active').siblings('a').removeClass('active');
		}	

		reInitArrows();
	})
	$('#offer').on('click',function(e){
		e.preventDefault();
		if ($('.offers-articles').is(':hidden')) {
			
			$('.offers-articles').siblings('.articles-slide')
								 .removeClass('active').end()
								 .addClass('active');

			$(this).addClass('active').siblings('a').removeClass('active');
		}

		reInitArrows();
	})


	//Cлайдер с новостями

	var animating = false,
		offset = 333;

	function reInitArrows(){
		var elementsCount = $('.articles-slide.active article').length;
		
		if (parseInt($('.articles-slide.active').css('marginLeft')) ==  0 ) {			
				$('.prev-news').addClass('disabled')
							   .siblings('.arrow').removeClass('disabled');
		} else if (parseInt($('.articles-slide.active').css('marginLeft')) ==  (-(elementsCount-3) * offset)) {			
				$('.next-news').addClass('disabled')
				               .siblings('.arrow').removeClass('disabled');
		}
		else {
			$('.arrow').removeClass('disabled');
		}	
	}		

	$('.next-news').on('click',function(){
		if ( animating || $(this).hasClass('disabled') ) return;
		animating = true;

		var self = this;			

		$('.articles-slide.active').animate({'marginLeft':'-=' + offset + 'px'},300,function(){
			
			reInitArrows();

			animating = false;
		});
	})

	$('.prev-news').on('click',function(){

		if ( animating || $(this).hasClass('disabled') ) return;
		animating = true;

		var self = this;

		$('.articles-slide.active').animate({'marginLeft':'+=' + offset + 'px'},300,function(){

			reInitArrows();

			animating = false;
		});
	})

	// Баннеры

	var count = $('.banner-slide').length,
		switcher = $('.banner-controls');

		while (count--) {
			$('<div class="switcher"></div>').appendTo(switcher);
		}

		switcher.find('div.switcher:first').addClass('active');

		//обработка click по переключателю

		$('div.switcher').on('click',function(){
			if ($(this).hasClass('active')) return;

			var currentIndex = $(this).index();

			$('div.switcher').removeClass('active')
							 .eq(currentIndex).addClass('active');

			$('.banner-slide.active').fadeOut(300,function(){
				$(this).removeClass('active');	
				
				$('.banner-slide').eq(currentIndex).fadeIn(300,function(){
					$(this).addClass('active');
				});
			})





		})

	
});
