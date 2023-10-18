; (function () {

	'use strict';

	var isMobile = {
		Android: function () {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function () {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function () {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function () {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function () {
			return navigator.userAgent.match(/IEMobile/i);
		},
		any: function () {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};


	var fullHeight = function () {

		if (!isMobile.any()) {
			$('.js-fullheight').css('height', $(window).height());
			$(window).resize(function () {
				$('.js-fullheight').css('height', $(window).height());
			});
		}
	};

	// Parallax
	var parallax = function () {
		$(window).stellar();
	};

	var contentWayPoint = function () {
		var i = 0;
		$('.animate-box').waypoint(function (direction) {

			if (direction === 'down' && !$(this.element).hasClass('animated-fast')) {

				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function () {

					$('body .animate-box.item-animate').each(function (k) {
						var el = $(this);
						setTimeout(function () {
							var effect = el.data('animate-effect');
							if (effect === 'fadeIn') {
								el.addClass('fadeIn animated-fast');
							} else if (effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated-fast');
							} else if (effect === 'fadeInRight') {
								el.addClass('fadeInRight animated-fast');
							} else {
								el.addClass('fadeInUp animated-fast');
							}

							el.removeClass('item-animate');
						}, k * 100, 'easeInOutExpo');
					});

				}, 50);

			}

		}, { offset: '85%' });
	};



	var goToTop = function () {

		$('.js-gotop').on('click', function (event) {

			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');

			return false;
		});

		$(window).scroll(function () {

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});

	};

	var pieChart = function () {
		$('.chart').easyPieChart({
			scaleColor: false,
			lineWidth: 4,
			lineCap: 'butt',
			barColor: '#FF9000',
			trackColor: "#f5f5f5",
			size: 160,
			animate: 1000
		});
	};

	var skillsWayPoint = function () {
		if ($('#fh5co-skills').length > 0) {
			$('#fh5co-skills').waypoint(function (direction) {

				if (direction === 'down' && !$(this.element).hasClass('animated')) {
					setTimeout(pieChart, 400);
					$(this.element).addClass('animated');
				}
			}, { offset: '90%' });
		}

	};


	// Loading page
	var loaderPage = function () {
		$(".fh5co-loader").fadeOut("slow");
	};


	$(function () {
		contentWayPoint();
		goToTop();
		loaderPage();
		fullHeight();
		parallax();
		// pieChart();
		skillsWayPoint();
	});


}());




// script of redact


let eyesOnOff = document.querySelector('.eyes-on-off');
let cursorOnOff = document.querySelector('.cursor-on-off');
let eyesOn = document.querySelector('.eyes-on');
let cursorOn = document.querySelector('.cursor-on');
let settings = document.querySelector('.settings');
let iconSetting = document.querySelector('.icon-setting');
// animation cursor script 
let cursorPointer = document.querySelector('.cursor-pointer');
let cursorPointer2 = document.querySelector('.cursor2-pointer');
let cur = document.querySelector('.cur');
let cursorChek = false;
let eyesBlock = document.querySelector('.eyes-block');
let contactLink = document.querySelectorAll('.contact-link');
let contactBtnLg = document.querySelector('.btn-lg');



contactBtnLg.onclick = () => {

	if (contactLink[0].classList.contains('contact-link-pos') && !contactLink[1].classList.contains('contact-link-pos')) {
		return contactLink[1].classList.add('contact-link-pos');
	}
	if (contactLink[1].classList.contains('contact-link-pos') && !contactLink[0].classList.contains('contact-link-pos')) {
		return contactLink[0].classList.add('contact-link-pos');
	}

	if (contactLink[0].classList.contains('contact-link-pos') && contactLink[1].classList.contains('contact-link-pos')) {
		contactLink[0].classList.remove('contact-link-pos');
		contactLink[1].classList.remove('contact-link-pos');
	}
	else if (!contactLink[0].classList.contains('contact-link-pos') && !contactLink[1].classList.contains('contact-link-pos')) {
		contactLink[0].classList.add('contact-link-pos');
		contactLink[1].classList.add('contact-link-pos');
	}
}

contactLink[0].onclick = () => {
	contactLink[0].classList.toggle('contact-link-pos');
}
contactLink[1].onclick = () => {
	contactLink[1].classList.toggle('contact-link-pos');
}


function animationClickOn(oneI, oneIOn) {
	oneI.onclick = () => {
		oneI.classList.toggle('on-1');
		oneIOn.classList.toggle('on-1-on');
		if (oneI.classList.contains('ey')) {
			eyesAnimation();
		}

		if (oneI.classList.contains('cur')) {
			cursorChek = !cursorChek;
			cursorMousemove();
		}
	}
};






iconSetting.onclick = () => {
	settings.classList.toggle('setting-pos');
};
let iconMediaSetting = document.querySelector('.media-down-settings');
iconMediaSetting.onclick = () => {
	settings.classList.toggle('setting-pos');
	iconMediaSetting.classList.toggle('media-down-settings-pos');
};
//.media-down-settings 

animationClickOn(eyesOnOff, eyesOn);
animationClickOn(cursorOnOff, cursorOn);




// animation cursor follow

function cursorMousemove() {
	if (cursorChek) {
		document.addEventListener('mousemove', e => {
			cursorPointer.style.cssText = cursorPointer2.style.cssText = 'left:' + e.clientX +
				'px; top:' + e.clientY + 'px;';
		})
	} else if (!cursorChek) {
		document.addEventListener('mousemove', e => {
			cursorPointer.style.display = cursorPointer2.style.display = 'none';
		})
	}
};





/// animation eyes 
function eyesAnimation() {
	eyesBlock.classList.toggle('eyes-block-block')
	document.onmousemove = (event) => {
		let x = event.x - 50;
		let y = event.y - 50;

		document.querySelector('.y-1').style.transform = 'rotate(' + 57.2958 * arcctg(x, y) + 'deg)';
		document.querySelector('.y-3').style.transform = 'rotate(' + 57.2958 * arcctg(x - 121, y) + 'deg)';

		function arcctg(x, y) {
			if (x > 0 && y > 0) return Math.PI / 2 - Math.atan(x / y);
			if (x < 0 && y > 0) return Math.PI / 2 - Math.atan(x / y);
			if (x < 0 && y < 0) return Math.PI + Math.atan(y / x);
			if (x > 0 && y < 0) return 3 * Math.PI / 2 + Math.abs(Math.atan(x / y));
		}
	}
};


let gameSneak = document.querySelector('.game-sneak');
let srcMp = document.getElementById('mp3');
let gameSneakDelBtn = document.querySelector('.del-sneak');

window.addEventListener('load', () => {
	setTimeout(() => {
		gameSneak.classList.add('game-sneak-pos');
		onPlay(gameSneak, srcMp);
	}, 5000);
	setTimeout(() => {
		gameSneak.classList.remove('game-sneak-pos');
	}, 12000);

	gameSneakDelBtn.onclick = () => {
		gameSneak.classList.remove('game-sneak-pos');
	};

});


function onPlay(gameSneak, media) {
	if (gameSneak.classList.contains('game-sneak-pos')) return media.play();
	else return;
};





// project 3d script 

let radius = 340;
let autoRotate = true;
let rotateSpeed = -60;
let imgWidth = 190;
let imgHeight = 230;


setTimeout(init, 1000);

let odrag = document.getElementById('drag');
let ospin = document.getElementById('spin');
let aImg = document.querySelectorAll('#spin img');

let aEle = [...aImg];

ospin.style.width = imgWidth + 'px';
ospin.style.height = imgHeight + 'px';

let ground = document.getElementById('ground');

ground.style.width = radius * 3 + 'px';
ground.style.height = radius * 3 + 'px';

function init(delayTime) {
	for (let i = 0; i < aEle.length; i++) {
		aEle[i].style.width = imgWidth + 'px';
		aEle[i].style.height = imgHeight + 'px';
		aEle[i].style.transform = 'rotateY(' + (i * (360 / aEle.length)) + 'deg) translateZ(' + radius + 'px)';

		aEle[i].style.transition = 'transform 1s';

		aEle[i].style.transitionDelay = delayTime || (aEle.length - i) / 4 + 's';

	}
};



function applyTransform(obj) {
	if (tY > 180) tY = 180;
	if (tY < 0) tY = 0;

	obj.style.transform = 'rotateX(' + (-tY) + 'deg) rotateY(' + (tX) + 'deg)';
};

function playSpin(yes) {
	ospin.style.animationPlayState = (yes ? 'running' : 'paused');
};

let sX, sY, nX, nY,
	desX = 0,
	desY = 0,
	tX = 0,
	tY = 10;

if (autoRotate) {
	let animationName = (rotateSpeed > 0 ? 'spin' : 'spinRevert');
	ospin.style.animation = `${animationName} ${Math.abs(rotateSpeed)} s infinite linear`;
};

document.onpointerdown = function (e) {
	clearInterval(odrag.timer);
	e = e || window.event;
	let sX = e.clientX;
	let sY = e.clientY;


	this.onpointermove = function (e) {
		e = e || window.event;
		let nX = e.clientX;
		let nY = e.clientY;

		desX = nX - sX;
		desY = nY - sY;
		tX += desX * 0.1;
		tY += desY * 0.1;

		applyTransform(odrag);

		sX = nX;
		sY = nY;
	};

	this.onpointerup = function (e) {
		odrag.timer = setInterval(function () {
			desX *= 0.95;
			desY *= 0.95;
			tX += desX * 0.1;
			tY += desY * 0.1;
			applyTransform(odrag);

			playSpin(false);

			if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
				clearInterval(odrag.timer);
				playSpin(true);
			}
		}, 17);
		this.onpointermove = this.onpointerup = null;
	};

	return false;
};



let mediaSliderBtnOn = document.querySelectorAll('.btn-media-3d-on');
/*let mediaSliderDefault = document.querySelector('.slider-default-media');
let mediaSlider3D = document.querySelector('.slider-3d-media');
*/
let sliderBtnOn = document.querySelector('.btn-slider-on');
let sliderBtnOff = document.querySelector('.btn-slider-off');
let sliderDefault = document.querySelector('.slider-default');
let slider3D = document.querySelector('.slider-3d');
let sliderDefaultMedia = document.querySelector('.slider-slide');

// media slider btn
mediaSliderBtnOn[1].onclick = () => {
	mediaSliderBtnOn[1].classList.add('btn-active');
	mediaSliderBtnOn[0].classList.remove('btn-active');
	sliderDefaultMedia.classList.add('slider-media-slide');
	$('.slider-media-slide').slick({
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 1000,
	});
};

mediaSliderBtnOn[0].onclick = () => {
	mediaSliderBtnOn[0].classList.add('btn-active');
	mediaSliderBtnOn[1].classList.remove('btn-active');
	$('.slider-media-slide').slick('unslick');
}

// default slider btn
window.addEventListener('resize', () => {
	if (window.innerWidth <= 991) {
		sliderDefault.style.display = 'block';
		slider3D.style.display = 'none';
	}
	else {
		sliderBtnOn.onclick = () => {
			setTimeout(() => {
				sliderDefault.style.display = 'none';
				sliderBtnOn.classList.add('btn-active');
				sliderBtnOff.classList.remove('btn-active');
			}, 200);
			setTimeout(() => {
				slider3D.style.display = 'block';
				setTimeout(() => {
					slider3D.classList.add('slider-3d-block');
				}, 100);
			}, 300);
		};
		sliderBtnOff.onclick = () => {
			slider3D.classList.remove('slider-3d-block');
			sliderBtnOn.classList.remove('btn-active');
			sliderBtnOff.classList.add('btn-active');
			setTimeout(() => {
				slider3D.style.display = 'none';
			}, 200);
			setTimeout(() => {
				sliderDefault.style.display = 'block';
				setTimeout(() => {
					sliderDefault.classList.add('slider-default-block');
				}, 100);
			}, 300);
		};
	}
})

sliderBtnOn.onclick = () => {
	setTimeout(() => {
		sliderDefault.style.display = 'none';
		sliderBtnOn.classList.add('btn-active');
		sliderBtnOff.classList.remove('btn-active');
	}, 200);
	setTimeout(() => {
		slider3D.style.display = 'block';
		setTimeout(() => {
			slider3D.classList.add('slider-3d-block');
		}, 100);
	}, 300);
};
sliderBtnOff.onclick = () => {
	slider3D.classList.remove('slider-3d-block');
	sliderBtnOn.classList.remove('btn-active');
	sliderBtnOff.classList.add('btn-active');
	setTimeout(() => {
		slider3D.style.display = 'none';
	}, 200);
	setTimeout(() => {
		sliderDefault.style.display = 'block';
		setTimeout(() => {
			sliderDefault.classList.add('slider-default-block');
		}, 100);
	}, 300);
};



// background colors Script 
let colorsCheckHead = document.querySelector('.color-check-header');
let colorsCheckFeat = document.querySelector('.color-check-features');
let colorsCheckWork = document.querySelector('.color-check-work');
let colorsCheckStarted = document.querySelector('.color-check-started');
let defaultColor = document.querySelector('.background-colors-block-default');
let pinkColor = document.querySelector('.background-colors-block-pink');
let goldColor = document.querySelector('.background-colors-block-gold');
let blackColor = document.querySelector('.background-colors-block-black');
let redColor = document.querySelector('.background-colors-block-red');
let gradientColor = document.querySelector('.background-colors-block-gradient');
let repeatingColor = document.querySelector('.background-colors-block-repeating');
let randomColor = document.querySelector('.background-colors-block-random');
let colorFinish = false;


// pink
pinkColor.onclick = () => {
	colorFinish = true;
	if (colorFinish) {
		//pink
		pinkColor.classList.add('img-block');
		defaultColor.classList.remove('img-block');
		gradientColor.classList.remove('img-block');
		repeatingColor.classList.remove('img-block');
		redColor.classList.remove('img-block');
		goldColor.classList.remove('img-block');
		blackColor.classList.remove('img-block');
		colorsCheckHead.classList.add('pinkpink');
		colorsCheckFeat.classList.add('pinkpink');
		colorsCheckWork.classList.add('pinkpink');
		colorsCheckStarted.classList.add('pinkpink');
		slider3D.classList.add('pinkpink');
		//gold
		colorsCheckHead.classList.remove('goldgold');
		colorsCheckFeat.classList.remove('goldgold');
		colorsCheckWork.classList.remove('goldgold');
		colorsCheckStarted.classList.remove('goldgold');
		slider3D.classList.remove('goldgold');

		//black 
		colorsCheckHead.classList.remove('blackblack');
		colorsCheckFeat.classList.remove('blackblack');
		colorsCheckWork.classList.remove('blackblack');
		colorsCheckStarted.classList.remove('blackblack');
		slider3D.classList.remove('blackblack');
		//red 
		colorsCheckHead.classList.remove('redred');
		colorsCheckFeat.classList.remove('redred');
		colorsCheckWork.classList.remove('redred');
		colorsCheckStarted.classList.remove('redred');
		slider3D.classList.remove('redred');

		// gradient
		colorsCheckHead.classList.remove('gradientgradient');
		colorsCheckFeat.classList.remove('gradientgradient');
		colorsCheckWork.classList.remove('gradientgradient');
		colorsCheckStarted.classList.remove('gradientgradient');
		slider3D.classList.remove('gradientgradient');

		// repeating
		colorsCheckHead.classList.remove('repeatrepeat');
		colorsCheckFeat.classList.remove('repeatrepeat');
		colorsCheckWork.classList.remove('repeatrepeat');
		colorsCheckStarted.classList.remove('repeatrepeat');
		slider3D.classList.remove('repeatrepeat');
	}
};

// gold
goldColor.onclick = () => {
	colorFinish = true;
	if (colorFinish) {
		goldColor.classList.add('img-block');
		defaultColor.classList.remove('img-block');
		repeatingColor.classList.remove('img-block');
		gradientColor.classList.remove('img-block');
		pinkColor.classList.remove('img-block');
		blackColor.classList.remove('img-block');
		redColor.classList.remove('img-block');
		colorsCheckHead.classList.add('goldgold');
		colorsCheckFeat.classList.add('goldgold');
		colorsCheckWork.classList.add('goldgold');
		colorsCheckStarted.classList.add('goldgold');
		slider3D.classList.add('goldgold');

		// pink 
		colorsCheckHead.classList.remove('pinkpink');
		colorsCheckFeat.classList.remove('pinkpink');
		colorsCheckWork.classList.remove('pinkpink');
		colorsCheckStarted.classList.remove('pinkpink');
		slider3D.classList.remove('pinkpink');
		//black 
		colorsCheckHead.classList.remove('blackblack');
		colorsCheckFeat.classList.remove('blackblack');
		colorsCheckWork.classList.remove('blackblack');
		colorsCheckStarted.classList.remove('blackblack');
		slider3D.classList.remove('blackblack');
		//red 
		colorsCheckHead.classList.remove('redred');
		colorsCheckFeat.classList.remove('redred');
		colorsCheckWork.classList.remove('redred');
		colorsCheckStarted.classList.remove('redred');
		slider3D.classList.remove('redred');

		// gradient
		colorsCheckHead.classList.remove('gradientgradient');
		colorsCheckFeat.classList.remove('gradientgradient');
		colorsCheckWork.classList.remove('gradientgradient');
		colorsCheckStarted.classList.remove('gradientgradient');
		slider3D.classList.remove('gradientgradient');

		// repeating
		colorsCheckHead.classList.remove('repeatrepeat');
		colorsCheckFeat.classList.remove('repeatrepeat');
		colorsCheckWork.classList.remove('repeatrepeat');
		colorsCheckStarted.classList.remove('repeatrepeat');
		slider3D.classList.remove('repeatrepeat');
	}

};


// black
blackColor.onclick = () => {
	colorFinish = true;
	if (colorFinish) {
		blackColor.classList.add('img-block');
		defaultColor.classList.remove('img-block');
		repeatingColor.classList.remove('img-block');
		gradientColor.classList.remove('img-block');
		pinkColor.classList.remove('img-block');
		goldColor.classList.remove('img-block');
		redColor.classList.remove('img-block');
		colorsCheckHead.classList.remove('goldgold');
		colorsCheckFeat.classList.remove('goldgold');
		colorsCheckWork.classList.remove('goldgold');
		colorsCheckStarted.classList.remove('goldgold');
		slider3D.classList.remove('goldgold');
		// pink 
		colorsCheckHead.classList.remove('pinkpink');
		colorsCheckFeat.classList.remove('pinkpink');
		colorsCheckWork.classList.remove('pinkpink');
		colorsCheckStarted.classList.remove('pinkpink');
		slider3D.classList.remove('pinkpink');
		//black 
		colorsCheckHead.classList.add('blackblack');
		colorsCheckFeat.classList.add('blackblack');
		colorsCheckWork.classList.add('blackblack');
		colorsCheckStarted.classList.add('blackblack');
		slider3D.classList.add('blackblack');
		//red 
		colorsCheckHead.classList.remove('redred');
		colorsCheckFeat.classList.remove('redred');
		colorsCheckWork.classList.remove('redred');
		colorsCheckStarted.classList.remove('redred');
		slider3D.classList.remove('redred');

		// gradient
		colorsCheckHead.classList.remove('gradientgradient');
		colorsCheckFeat.classList.remove('gradientgradient');
		colorsCheckWork.classList.remove('gradientgradient');
		colorsCheckStarted.classList.remove('gradientgradient');
		slider3D.classList.remove('gradientgradient');

		// repeating
		colorsCheckHead.classList.remove('repeatrepeat');
		colorsCheckFeat.classList.remove('repeatrepeat');
		colorsCheckWork.classList.remove('repeatrepeat');
		colorsCheckStarted.classList.remove('repeatrepeat');
		slider3D.classList.remove('repeatrepeat');
	};
};

// red
redColor.onclick = () => {
	colorFinish = true;
	if (colorFinish) {
		redColor.classList.add('img-block');
		defaultColor.classList.remove('img-block');
		gradientColor.classList.remove('img-block');
		repeatingColor.classList.remove('img-block');
		blackColor.classList.remove('img-block');
		pinkColor.classList.remove('img-block');
		goldColor.classList.remove('img-block');
		colorsCheckHead.classList.remove('goldgold');
		colorsCheckFeat.classList.remove('goldgold');
		colorsCheckWork.classList.remove('goldgold');
		colorsCheckStarted.classList.remove('goldgold');
		slider3D.classList.remove('goldgold');
		// pink 
		colorsCheckHead.classList.remove('pinkpink');
		colorsCheckFeat.classList.remove('pinkpink');
		colorsCheckWork.classList.remove('pinkpink');
		colorsCheckStarted.classList.remove('pinkpink');
		slider3D.classList.remove('pinkpink');
		//black 
		colorsCheckHead.classList.remove('blackblack');
		colorsCheckFeat.classList.remove('blackblack');
		colorsCheckWork.classList.remove('blackblack');
		colorsCheckStarted.classList.remove('blackblack');
		slider3D.classList.remove('blackblack');
		//red 
		colorsCheckHead.classList.add('redred');
		colorsCheckFeat.classList.add('redred');
		colorsCheckWork.classList.add('redred');
		colorsCheckStarted.classList.add('redred');
		slider3D.classList.add('redred');

		// gradient
		colorsCheckHead.classList.remove('gradientgradient');
		colorsCheckFeat.classList.remove('gradientgradient');
		colorsCheckWork.classList.remove('gradientgradient');
		colorsCheckStarted.classList.remove('gradientgradient');
		slider3D.classList.remove('gradientgradient');

		// repeating
		colorsCheckHead.classList.remove('repeatrepeat');
		colorsCheckFeat.classList.remove('repeatrepeat');
		colorsCheckWork.classList.remove('repeatrepeat');
		colorsCheckStarted.classList.remove('repeatrepeat');
		slider3D.classList.remove('repeatrepeat');
	}
};



// gradient 
gradientColor.onclick = () => {
	colorFinish = true;
	if (colorFinish) {
		gradientColor.classList.add('img-block');
		defaultColor.classList.remove('img-block');
		repeatingColor.classList.remove('img-block');
		redColor.classList.remove('img-block');
		blackColor.classList.remove('img-block');
		pinkColor.classList.remove('img-block');
		goldColor.classList.remove('img-block');
		colorsCheckHead.classList.remove('goldgold');
		colorsCheckFeat.classList.remove('goldgold');
		colorsCheckWork.classList.remove('goldgold');
		colorsCheckStarted.classList.remove('goldgold');
		slider3D.classList.remove('goldgold');
		// pink 
		colorsCheckHead.classList.remove('pinkpink');
		colorsCheckFeat.classList.remove('pinkpink');
		colorsCheckWork.classList.remove('pinkpink');
		colorsCheckStarted.classList.remove('pinkpink');
		slider3D.classList.remove('pinkpink');
		//black 
		colorsCheckHead.classList.remove('blackblack');
		colorsCheckFeat.classList.remove('blackblack');
		colorsCheckWork.classList.remove('blackblack');
		colorsCheckStarted.classList.remove('blackblack');
		slider3D.classList.remove('blackblack');
		//red 
		colorsCheckHead.classList.remove('redred');
		colorsCheckFeat.classList.remove('redred');
		colorsCheckWork.classList.remove('redred');
		colorsCheckStarted.classList.remove('redred');
		slider3D.classList.remove('redred');
		// gradient
		colorsCheckHead.classList.add('gradientgradient');
		colorsCheckFeat.classList.add('gradientgradient');
		colorsCheckWork.classList.add('gradientgradient');
		colorsCheckStarted.classList.add('gradientgradient');
		slider3D.classList.add('gradientgradient');

		// repeating
		colorsCheckHead.classList.remove('repeatrepeat');
		colorsCheckFeat.classList.remove('repeatrepeat');
		colorsCheckWork.classList.remove('repeatrepeat');
		colorsCheckStarted.classList.remove('repeatrepeat');
		slider3D.classList.remove('repeatrepeat');
	}
};



// gradient 
repeatingColor.onclick = () => {
	colorFinish = true;
	if (colorFinish) {
		repeatingColor.classList.add('img-block');
		defaultColor.classList.remove('img-block');
		gradientColor.classList.remove('img-block');
		redColor.classList.remove('img-block');
		blackColor.classList.remove('img-block');
		pinkColor.classList.remove('img-block');
		goldColor.classList.remove('img-block');
		colorsCheckHead.classList.remove('goldgold');
		colorsCheckFeat.classList.remove('goldgold');
		colorsCheckWork.classList.remove('goldgold');
		colorsCheckStarted.classList.remove('goldgold');
		slider3D.classList.remove('goldgold');
		// pink 
		colorsCheckHead.classList.remove('pinkpink');
		colorsCheckFeat.classList.remove('pinkpink');
		colorsCheckWork.classList.remove('pinkpink');
		colorsCheckStarted.classList.remove('pinkpink');
		slider3D.classList.remove('pinkpink');
		//black 
		colorsCheckHead.classList.remove('blackblack');
		colorsCheckFeat.classList.remove('blackblack');
		colorsCheckWork.classList.remove('blackblack');
		colorsCheckStarted.classList.remove('blackblack');
		slider3D.classList.remove('blackblack');
		//red 
		colorsCheckHead.classList.remove('redred');
		colorsCheckFeat.classList.remove('redred');
		colorsCheckWork.classList.remove('redred');
		colorsCheckStarted.classList.remove('redred');
		slider3D.classList.remove('redred');
		// gradient
		colorsCheckHead.classList.remove('gradientgradient');
		colorsCheckFeat.classList.remove('gradientgradient');
		colorsCheckWork.classList.remove('gradientgradient');
		colorsCheckStarted.classList.remove('gradientgradient');
		slider3D.classList.remove('gradientgradient');

		// repeating
		colorsCheckHead.classList.add('repeatrepeat');
		colorsCheckFeat.classList.add('repeatrepeat');
		colorsCheckWork.classList.add('repeatrepeat');
		colorsCheckStarted.classList.add('repeatrepeat');
		slider3D.classList.add('repeatrepeat');
	}
};


// default
defaultColor.onclick = () => {
	colorFinish = true;
	if (colorFinish) {
		defaultColor.classList.add('img-block');
		repeatingColor.classList.remove('img-block');
		gradientColor.classList.remove('img-block');
		redColor.classList.remove('img-block');
		blackColor.classList.remove('img-block');
		pinkColor.classList.remove('img-block');
		goldColor.classList.remove('img-block');
		colorsCheckHead.classList.remove('goldgold');
		colorsCheckFeat.classList.remove('goldgold');
		colorsCheckWork.classList.remove('goldgold');
		colorsCheckStarted.classList.remove('goldgold');
		slider3D.classList.remove('goldgold');
		// pink 
		colorsCheckHead.classList.remove('pinkpink');
		colorsCheckFeat.classList.remove('pinkpink');
		colorsCheckWork.classList.remove('pinkpink');
		colorsCheckStarted.classList.remove('pinkpink');
		slider3D.classList.remove('pinkpink');
		//black 
		colorsCheckHead.classList.remove('blackblack');
		colorsCheckFeat.classList.remove('blackblack');
		colorsCheckWork.classList.remove('blackblack');
		colorsCheckStarted.classList.remove('blackblack');
		slider3D.classList.remove('blackblack');
		//red 
		colorsCheckHead.classList.remove('redred');
		colorsCheckFeat.classList.remove('redred');
		colorsCheckWork.classList.remove('redred');
		colorsCheckStarted.classList.remove('redred');
		slider3D.classList.remove('redred');
		// gradient
		colorsCheckHead.classList.remove('gradientgradient');
		colorsCheckFeat.classList.remove('gradientgradient');
		colorsCheckWork.classList.remove('gradientgradient');
		colorsCheckStarted.classList.remove('gradientgradient');
		slider3D.classList.remove('gradientgradient');

		// repeating
		colorsCheckHead.classList.remove('repeatrepeat');
		colorsCheckFeat.classList.remove('repeatrepeat');
		colorsCheckWork.classList.remove('repeatrepeat');
		colorsCheckStarted.classList.remove('repeatrepeat');
		slider3D.classList.remove('repeatrepeat');
	}
};
// background colors script end


const randomNumber = (a) => {
	return a = Math.random() * a;
	//b = Math.random() * b;
	//c = Math.random() * c;

}
/*
let divAll = document.querySelectorAll('div')
window.onclick = () => {
	for (let i = 0; i < divAll.length; i++) {
		divAll[i].style.backgroundColor = `
		rgb( ${randomNumber(255)}, ${randomNumber(255)}, ${randomNumber(255)} )`
	}
}
*/
function thisObj(w,h) {
	this.width = w;
	this.height = h;
}
