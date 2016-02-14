jQuery(document).ready(function($) {

	//Настройка бекграундов
	
	var footerBkgTop = $('footer:last').position().top + 26; //26

	
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
	
});
