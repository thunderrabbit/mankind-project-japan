/**
	* cbpAnimatedHeader.js v1.0.0
	* http://www.codrops.com
	*
	* Licensed under the MIT license.
	* http://www.opensource.org/licenses/mit-license.php
	*
	* Copyright 2013, Codrops
	* http://www.codrops.com
	*/
var cbpAnimatedHeader = (function() {

	var docElem = document.documentElement,
		header = document.querySelector('.navbar-fixed-top.navbar-shrinkable'),
		didScroll = false,
		changeHeaderOn = 100;

	function onScroll(event) {
		if (!didScroll) {
			didScroll = true;
			setTimeout(scrollPage, 250);
		}
		return true
	}

	function init() {
		window.addEventListener('scroll', onScroll, false);
		setInterval(onScroll, 1000); // in case the page already loads from a #link
	}

	function scrollPage() {
		var sy = scrollY();
		if (sy >= changeHeaderOn) {
			classie.add(header, 'navbar-shrink');
		} else {
			classie.remove(header, 'navbar-shrink');
		}
		didScroll = false;
		return true
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	init();

})();
