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
	})
	$('#offer').on('click',function(e){
		e.preventDefault();
		if ($('.offers-articles').is(':hidden')) {
			calc($('.next-news'))
			$('.offers-articles').siblings('.articles-slide')
								 .removeClass('active').end()
								 .addClass('active');

			$(this).addClass('active').siblings('a').removeClass('active');
		}
	})


	//Cлайдер с новостями

	var animating = false,
		offset = 333;

	function reInitArrow(link){
		var elementsCount = $('.articles-slide.active article').length;

		if (parseInt($('.articles-slide.active').css('marginLeft')) == -(elementsCount-3) * offset) {
				link.addClass('disabled');
		 	}
		 	if ($('.prev-news').hasClass('disabled')){
		 		$('.prev-news').removeClass('disabled')
		 	}
	}   

	$('.next-news').on('click',function(){
		if ( animating || $(this).hasClass('disabled') ) return;
		animating = true;

		var self = this;			

		$('.articles-slide.active').animate({'marginLeft':'-=' + offset + 'px'},300,function(){
			
			calculate(self);

			animating = false;
		});
	})

	$('.prev-news').on('click',function(){

		if ( animating || $(this).hasClass('disabled') ) return;
		animating = true;

		var self = this;

		$('.articles-slide.active').animate({'marginLeft':'+=' + offset + 'px'},300,function(){

			if (parseInt($(this).css('marginLeft')) == 0) {
				$(self).addClass('disabled');
		 	}
			if ($('.next-news').hasClass('disabled')){
		 		$('.next-news').removeClass('disabled')
		 	}

			animating = false;
		});
	})

	
});
