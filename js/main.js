;(function () {

	'use strict';

	// iPad and iPod detection
	var isiPad = function(){
		return (navigator.platform.indexOf("iPad") != -1);
	};
	var isAndroid = function(){
		return (navigator.platform.indexOf("isAndroid") != -1);
	};
	var isiPhone = function(){
		return (
		(navigator.platform.indexOf("iPhone") != -1) ||
		(navigator.platform.indexOf("iPod") != -1)
		);
	};

	//android终端
	var isAndroid = function(){
		return (
			(navigator.platform.indexOf("Android") != -1)||
			(navigator.platform.indexOf("Adr") != -1)
		)
	}
	// Carousel Feature Slide
	var owlCrouselFeatureSlide = function() {

		var owl = $('.owl-carousel');
		owl.on('initialized.owl.carousel change.owl.carousel',function(elem){
			var current = elem.item.index;
			$(elem.target).find(".owl-item").eq(current).find(".to-animate").removeClass('fadeInUp animated');
			$(elem.target).find(".owl-item").eq(current).find(".to-animate-2").removeClass('fadeInUp animated');

		});
		owl.on('initialized.owl.carousel changed.owl.carousel',function(elem){
			setTimeout(function(){
				var current = elem.item.index;
				$(elem.target).find(".owl-item").eq(current).find(".to-animate").addClass('fadeInUp animated');
			}, 700);
			setTimeout(function(){
				var current = elem.item.index;
				$(elem.target).find(".owl-item").eq(current).find(".to-animate-2").addClass('fadeInUp animated');
			}, 900);
		});
		owl.owlCarousel({
			items: 1,
			loop: true,
			margin: 0,
			responsiveClass: true,
			nav: true,
			dots: true,
			autoHeight: true,
			smartSpeed: 500,
			autoplay: true,
			autoplayTimeout: 5000,
			autoplayHoverPause: true,
			navText: [
				"<i class='icon-arrow-left2 owl-direction'></i>",
				"<i class='icon-arrow-right2 owl-direction'></i>"
			]
		});

	};

	// animate-box
	var contentWayPoint = function() {

		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this).hasClass('animated') ) {

				$(this.element).addClass('fadeInUp animated');

			}

		} , { offset: '75%' } );

	};
	//banner图的文字内容
	var bannertext=function(){
		$('.bannerPng').addClass('animated fadeInUp');
		setTimeout(function(){
			$('.bannerPng').removeClass('fadeInUp');
		},3000);
		$('.dowebok').addClass('animated fadeInUp');
		setTimeout(function(){
			$('.dowebok').removeClass('fadeInUp');
		},5000);

		$('.dowebtn').addClass('animated fadeInUp');
		setTimeout(function(){
			$('.dowebtn').removeClass('fadeInUp');
		},8000);

	}
	// 顶部点击事件
	var clicknum=0;
	$('.open_icon').click(function(){
		if(clicknum%2==0){
			$('.meun_right').hide()
		}else{
			$('.meun_right').show()
		}
		clicknum++;
	})
	// Burger Menu
	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){

			if ( $('#navbar').is(':visible') ) {
				$(this).removeClass('active');
			} else {
				$(this).addClass('active');
			}

			event.preventDefault();

		});

	};

	// Page Nav
	var clickMenu = function() {
		$('a:not([class="external"])').click(function(event){
			var section = $(this).data('nav-section'),
				navbar = $('#navbar');

			if(section != undefined) {
				$('html, body').animate({
					// 元素相对于document的上位移
					scrollTop: $('[data-section="' + section + '"]').offset().top
				}, 500);
				if ( navbar.is(':visible')) {
					navbar.removeClass('in');
					navbar.attr('aria-expanded', 'false');
					$('.js-fh5co-nav-toggle').removeClass('active');
				}
				event.preventDefault();
				return false;
			}

		});

	};

	// Reflect scrolling in navigation
	var navActive = function(section) {
		var $el = $('#navbar > ul');
		$el.find('li').removeClass('active');
		$el.each(function(){
			$(this).find('a[data-nav-section="'+section+'"]').closest('li').addClass('active');
		});

	};
	var navigationSection = function() {

		var $section = $('div[data-section]');

		$section.waypoint(function(direction) {
			if (direction === 'down') {
				navActive($(this.element).data('section'));
			}
		}, {
			offset: '150px'
		});

		$section.waypoint(function(direction) {

			if (direction === 'up') {
				navActive($(this.element).data('section'));
			}
		}, {
			offset: function() { return -$(this.element).height() + 150; }
		});

	};
	//页面刷新时顶部导航出现
	var t = document.documentElement.scrollTop || document.body.scrollTop;//兼容ie

	if(t > 500){
		var header = $('#fh5co-header');
		header.addClass('navbar-fixed-top fh5co-animated slideInDown');
		$('.navbar-brand').attr('id',"nav_log")
	}




	// Window Scroll
	//页面滚动时导航出现
	var windowScroll = function() {
		var lastScrollTop = 0;
		$(window).scroll(function(event){
			var header = $('#fh5co-header'),
				scrlTop = $(this).scrollTop();
			if ( scrlTop > 500 ) {
				header.addClass('navbar-fixed-top fh5co-animated slideInDown');
				$('.navbar-brand').attr('id',"nav_log")
			} else if ( scrlTop <= 500) {
				if ( header.hasClass('navbar-fixed-top') ){
					header.addClass('navbar-fixed-top fh5co-animated slideOutUp');
					$('.navbar-brand').addClass('navbar-brand')
					setTimeout(function(){
						header.removeClass('navbar-fixed-top fh5co-animated slideInDown slideOutUp');
						$('.navbar-brand').removeAttr("id");
					}, 100 );
				}
			}

		});
	};

	var animatedScroll=document.body.scrollTop;
	// Services项目介绍
	var servicesAnimate = function() {
		if ( $('#fh5co-our-services').length > 0 ) {

			$('#fh5co-our-services .to-animate').each(function( k ) {
				var el = $(this);
				setTimeout ( function () {
					el.addClass('fadeInUp animated');
				},  k * 200, 'easeInOutExpo' );
			});
		}
	};
	var servicesWayPoint = function() {
		if ( $('#fh5co-our-services').length > 0 ) {
			$('#fh5co-our-services').waypoint( function( direction ) {
				if( direction === 'down' && !$(this).hasClass('animated')&&animatedScroll<=$('#fh5co-our-services').offset().top+$('#fh5co-our-services').height()) {

					setTimeout(servicesAnimate, 200);

					$(this.element).addClass('animated');
				}
			} , { offset: '95%' } );

			$('#fh5co-our-services').waypoint( function( direction ) {
				if( direction === 'up' && !$(this).hasClass('animated') ) {

					setTimeout(servicesAnimate, 200);

					$(this.element).addClass('animated');
				}
			} , { offset: '-95%' } );
		}
	};

	// About Us公司团队
	var aboutAnimate = function() {

		if ( $('#about-us').length > 0 ) {
			$('#about-us .to-animate').each(function( k ) {
				var el = $(this);
				setTimeout ( function () {
					el.addClass('fadeInUp animated');
				},  k * 300, 'easeInOutExpo' );

			});
		}
	};
	var aboutWayPoint = function() {

		if ( $('#about-us').length > 0 ) {

			$('#about-us').waypoint( function( direction ) {
				if( direction === 'down' && !$(this).hasClass('animated')&& animatedScroll<=$('#about-us').offset().top+$('#about-us').height()) {
					setTimeout(aboutAnimate, 300);

					$(this.element).addClass('animated');
				}
			} , { offset: '95%' } );

			$('#about-us').waypoint( function( direction ) {

				if( direction === 'up' && !$(this).hasClass('animated') ) {
					setTimeout(aboutAnimate, 300);
					$(this.element).addClass('animated');
				}
			} , { offset: '-95%' } );
		}

	};

	// team区块链
	var teamAnimate = function() {

		if ( $('#team').length > 0 ) {
			$('#team .to-animate').each(function( k ) {

				var el = $(this);

				setTimeout ( function () {
					el.addClass('fadeInUp animated');
			},  k * 200, 'easeInOutExpo' );

			});
		}

	};
	var teamWayPoint = function() {

		if ( $('#team').length > 0 ) {
			$('#team').waypoint( function( direction ) {

				if( direction === 'down' && !$(this).hasClass('animated') && animatedScroll<=$('#team').offset().top+$('#team').height() ) {

					setTimeout(teamAnimate, 300);

					$(this.element).addClass('animated');
				}
			} , { offset: '95%' } );

			$('#team').waypoint( function( direction ) {

				if( direction === 'up' && !$(this).hasClass('animated') ) {

					setTimeout(teamAnimate, 300);

					$(this.element).addClass('animated');
				}
			} , { offset: '-95%' } );
		}

	};

	// testimonials
	var testimonialsAnimate = function() {

		if ( $('#fh5co-testimonials').length > 0 ) {
			$('#fh5co-testimonials .to-animate').each(function( k ){
				var el = $(this);
				if(el[0].className=='font-right to-animate'){
					setTimeout ( function () {
						el.addClass('animated zoomIn').removeClass('to-animate');
					},  k * 200, 'easeInOutExpo' );
				}else{
					setTimeout ( function () {
						el.addClass('animated fadeInUp').removeClass('to-animate');
					},  k * 200, 'easeInOutExpo' );
				}
			});
		}

	};
	var testimonialsWayPoint = function() {

		if ( $('#fh5co-testimonials').length > 0 ) {
			$('#fh5co-testimonials').waypoint( function( direction ) {
				if(direction=='down'&&!$(this).hasClass('animated') && animatedScroll<=$('#fh5co-testimonials').offset().top+$('#fh5co-testimonials').height()){
					setTimeout(testimonialsAnimate, 400);
					$(this.element).addClass('animated');
				}
			} , { offset: '95%' } );

			$('#fh5co-testimonials').waypoint( function( direction ) {
				if(direction=='up'&&!$(this).hasClass('animated')){
					setTimeout(testimonialsAnimate, 400);

					$(this.element).addClass('animated');
				}
			} , { offset: '-95%' } );
		}

	};

	// Features合作伙伴
	var featuresAnimate = function() {
		if ( $('#fh5co-features').length > 0 ) {

			$('#fh5co-features .to-animate').each(function( k ) {
				var el = $(this);
				setTimeout ( function () {
					el.addClass('fadeInUp animated');
				},  k * 200, 'easeInOutExpo' );
			});
		}

	};
	var featuresWayPoint = function() {
		if ( $('#fh5co-features').length > 0 ) {
			$('#fh5co-features').waypoint( function( direction ) {
				if( direction === 'down' && !$(this).hasClass('animated')&& animatedScroll<=$('#fh5co-features').offset().top+$('#fh5co-features').height() ) {
					setTimeout(function(){
						$('.animate-features-1').addClass('animated fadeIn');
					}, 100);
					setTimeout(function(){
						$('.animate-features-2').addClass('animated fadeIn');
					}, 200);
					setTimeout(featuresAnimate, 500);
					setTimeout(function(){
						$('.animate-features-3').addClass('animated fadeInUp');
					}, 1400);

					$(this.element).addClass('animated');
				}
			} , { offset: '95%' } );

			$('#fh5co-features').waypoint( function( direction ) {
				if( direction === 'up' && !$(this).hasClass('animated') ) {
					setTimeout(function(){
						$('.animate-features-1').addClass('animated fadeIn');
					}, 100);
					setTimeout(function(){
						$('.animate-features-2').addClass('animated fadeIn');
					}, 200);
					setTimeout(featuresAnimate, 500);
					setTimeout(function(){
						$('.animate-features-3').addClass('animated fadeInUp');
					}, 1400);

					$(this.element).addClass('animated');
				}
			} , { offset: '-95%' } );
		}

	};

	// Pricing顾问团队
	var pricingAnimate = function() {

		if ( $('#fh5co-pricing').length > 0 ) {
			$('#fh5co-pricing .to-animate').each(function( k ) {

				var el = $(this);
				setTimeout ( function () {
					el.addClass('fadeInUp animated');
				},  k * 200, 'easeInOutExpo' );
			});
		}

	};
	var pricingWayPoint = function() {
		if ( $('#fh5co-pricing').length > 0 ) {
			$('#fh5co-pricing').waypoint( function( direction ) {
				if(direction=='down' && !$(this).hasClass('animated') && animatedScroll<=$('#fh5co-pricing').offset().top+$('#fh5co-pricing').height()){
					setTimeout(function(){
						$('.animate-pricing-1').addClass('animated fadeIn');
					}, 200);
					setTimeout(function(){
						$('.animate-pricing-2').addClass('animated fadeIn');
					}, 300);
					setTimeout(pricingAnimate, 700);

					$(this.element).addClass('animated');
				}

			} , { offset: '95%' } );

			$('#fh5co-pricing').waypoint( function( direction ) {
				if(direction=='up' && !$(this).hasClass('animated')){
					setTimeout(function(){
						$('.animate-pricing-1').addClass('animated fadeIn');
					}, 200);
					setTimeout(function(){
						$('.animate-pricing-2').addClass('animated fadeIn');
					}, 300);
					setTimeout(pricingAnimate, 700);

					$(this.element).addClass('animated');
				}

			} , { offset: '-95%' } );

		}

	};

	// 合作媒体
	var pressAnimate = function() {
		if ( $('#fh5co-press').length > 0 ) {
			$('#fh5co-press .to-animate').each(function( k ) {

				var el = $(this);

				setTimeout ( function () {
					el.addClass('fadeInUp animated');
				},  k * 500, 'easeInOutExpo' );
			});
		}

	};
	var pressWayPoint = function() {
		if ( $('#fh5co-press').length > 0 ) {
			$('#fh5co-press').waypoint( function( direction ) {
				if(direction == 'down' && !$(this).hasClass('animated') && $('#fh5co-press').offset().top+$('#fh5co-press').height()){
					setTimeout(function(){
						$('.animate-press-1').addClass('animated fadeIn');
					}, 200);
					setTimeout(function(){
						$('.animate-press-2').addClass('animated fadeIn');
					}, 300);
					setTimeout(pressAnimate, 700);

					$(this.element).addClass('animated');
				}
			} , { offset: '95%' } );

			$('#fh5co-press').waypoint( function( direction ) {
				if(direction == 'up' && !$(this).hasClass('animated')){
					setTimeout(function(){
						$('.animate-press-1').addClass('animated fadeIn');
					}, 200);
					setTimeout(function(){
						$('.animate-press-2').addClass('animated fadeIn');
					}, 300);
					setTimeout(pressAnimate, 700);

					$(this.element).addClass('animated');
				}
			} , { offset: '-95%' } );
		}
	};






	// Document on load.
	$(function(){
		bannertext();
		burgerMenu();
		owlCrouselFeatureSlide();
		clickMenu();
		windowScroll();
		navigationSection();
		servicesWayPoint();
		aboutWayPoint();
		teamWayPoint();
		testimonialsWayPoint();
		featuresWayPoint();
		pricingWayPoint();
		pressWayPoint();

	});


}());
