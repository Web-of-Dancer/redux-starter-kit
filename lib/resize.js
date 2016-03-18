(function () {
	function setSize () {
		var ww = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
		var wh = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

		var appw, apph, remSize, emSize, ratio;
		// // 屏幕尺寸小于一定程度之后
		// if (wh < 800) {
		// 	wh = 800;
		// 	ww = 192*8;
		// }
		ratio = ww / wh;
		if (ratio > 1.92) {
			apph = wh;
			appw = apph * 1.92;
		} else if (ratio < 1.92) {
			appw = ww;
			apph = appw / 1.92;
		} else {
			appw = ww;
			apph = wh; 
		}
		$("#reactapp").css({"width": appw, "height": apph});
		remSize = apph / 10;
		// emSize = remSize * 0.12;
		// if (emSize < 12) {
		// 	emSize = 12;
		// }
		//尺寸参考html，字体参考body
		$("html").css("font-size", remSize+"px");

		$("#fixBg").css({"width": appw, "height": wh - apph});
		window.APP_W = appw;
		window.APP_H = apph;
	}
	setSize();
	window.addEventListener('resize', setSize);
	window.setSize = setSize;
})();