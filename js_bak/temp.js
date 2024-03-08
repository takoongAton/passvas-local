'use strict';

/*  */
/*
atoncorp.com
이하 전체 테스트 스크립트입니다.
개발에 맞게 새로 작성해서 적용 부탁드립니다.
*/

var $window,
	$body;

var pos;
window.addEventListener('scroll', function(){
	pos = window.scrollY;
	goTop.check(pos);
	header.header_set(pos);
	layout.active(pos)
});



var header;
header = {
	item : document.querySelector('.header'),
	header_set : function(pos){
		if(pos > header.item.offsetHeight) {
			header.item.classList.add('active')
		} else {
			header.item.classList.remove('active')
		}
	}
}

var layout;
layout = {
	load : function(){
		var wrap = $(".wrap");
		if(wrap.outerHeight() < 600) {
			$("html").addClass("flexCol");
		} else {
			$("html").removeClass("flexCol");
		}
	},
	active : function(pos){
		var wrap = $(".wrap");
		if(wrap.outerHeight() < 600) {
			console.log("작다")
			$("html").addClass("flexCol");
		} else {
			$("html").removeClass("flexCol");
		}
	}
}
//layout.load();





// css 새로고침
/*
function cssRefresh(){
	let d = new Date();
	const cssLinks = document.querySelectorAll("link");
	for(var i = 0; i < cssLinks.length; i++) {
		if((cssLinks[i]).getAttribute('rel') == 'stylesheet') {
			let href = cssLinks[i].getAttribute('href');
			let newHref = href + "?v" + d.getMilliseconds();
			cssLinks[i].setAttribute('href', newHref);
		}
	}
}
cssRefresh();
*/
// css 새로고침 end



var $window = $(window);
$window.on('scroll', function(){
	var pos = $(this).scrollTop();
	if(pos >= $(".header").height()){
		$(".header").addClass("on");
	} else {
		$(".header").removeClass("on");
	}
});


