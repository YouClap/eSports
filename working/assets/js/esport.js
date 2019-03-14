(function($){
	'use strict';

	/*---------- LOADING EFFECT START ----------*/ 
	setTimeout(function(){
		$('body').addClass('loaded');
	}, 2000);
	/*---------- LOADING EFFECT END ----------*/

	/*---------- SEARCH START ----------*/
	$(function () {
		$(document).on('click', '.header-search-content-wrapper>i', function(){
			$('.header-search-content').addClass('header-search-form-active');
			$('.header-search-content-wrapper').addClass('header-search-open');
			$('.header-search-content-wrapper>i').attr('class', 'fa fa-search-minus');
		});
	
		$(document).on('click', '.header-search-open i.fa-search-minus', function(){
			$('.header-search-content-wrapper').removeClass('header-search-open');
			$('.header-search-content-wrapper>i').attr('class', 'fa fa-search');
			$('.header-search-content').removeClass('header-search-form-active');
		});
	});
	/*---------- SEARCH END ----------*/

	/*---------- SELECTS START ----------*/
	$(document).ready(function() {
		(function() {
			[].slice.call( document.querySelectorAll( 'select.cs-select' ) ).forEach( function(el) {	
				new SelectFx(el);
			} );
		})();
	});
	/*---------- SELECTS END ----------*/

	/*---------- TOOLTIP START ----------*/ 
	$(function () {
		$('[data-toggle="tooltip"]').tooltip()
	});
	/*---------- TOOLTIP END ----------*/

	/*---------- MOBILE HEADER START ----------*/
	$(function () {
		$(document).on('click', '.mobile-header .mobile-menu-icon', function(){
			$('.mobile-header').addClass('mobile-menu-bars-actived');
			$('.mobile-header .mobile-menu-icon').addClass('mobile-menu-bars-opened');
			$('.mobile-header .mobile-menu-icon i').attr('class', 'fa fa-times-thin');
			$('.mobile-menu').addClass('mobile-menu-opened');
			$('.mobile-menu-wrapper').addClass('mobile-menu-wrapper-opened');
		});

		$(document).on('click', '.mobile-header .mobile-menu-bars-opened', function(){
			$('.mobile-header .mobile-menu-icon').removeClass('mobile-menu-bars-opened');
			$('.mobile-header .mobile-menu-icon i').attr('class', 'fa fa-bars');
		});

		$(document).on('click', '.mobile-menu .mobile-menu-icon', function(){
			$('.mobile-menu').removeClass('mobile-menu-opened');
			$('.mobile-menu').removeClass('mobile-menu-wrapper-opened');
			$('.mobile-header').removeClass('mobile-menu-bars-actived');
			$('.mobile-menu-wrapper').removeClass('mobile-menu-wrapper-opened');
			$('.mobile-header .mobile-menu-icon').removeClass('mobile-menu-bars-opened');
			$('.mobile-header .mobile-menu-icon i').attr('class', 'fa fa-bars');
		});

		$(document).on('click', '.mobile-menu-wrapper-opened', function(){
			$('.mobile-menu').removeClass('mobile-menu-opened');
			$('.mobile-menu-wrapper').removeClass('mobile-menu-wrapper-opened');
			$('.mobile-header').removeClass('mobile-menu-bars-actived');
			$('.mobile-header .mobile-menu-icon').removeClass('mobile-menu-bars-opened');
			$('.mobile-header .mobile-menu-icon i').attr('class', 'fa fa-bars');
		});

		if($('.mobile-navbar li.dropdown .dropdown-menu').length){
			$('.mobile-navbar li.dropdown').append('<i class="fa fa-angle-down"></i>');
			$('.mobile-navbar li.dropdown .fa-angle-down').on('click', function() {
				$(this).prev('.dropdown-menu').slideToggle(500);
			});
		}

		$('.mobile-menu').scrollbar();

		$(document).on('click', '.user-box .user-box-login>ul>li.user-box-login-form .user-box-login-form-top-links li a', function(){
			$('.esport-class').addClass('modal-open').delay(900);
		});

		$(document).on('click', '.user-box .user-box-login .close', function(){
			$('body').removeClass('modal-open');
		});
	});
	/*---------- MOBILE HEADER END ----------*/

	/*---------- POST FEATURED START ----------*/
	var swiper = new Swiper('.post-featured-header-image-gallery', {
		slidesPerView: 1,
		slidesPerGroup: 1,
		slidesPerColumn: 1,
		spaceBetween: 0,
		pagination: '.swiper-pagination',
		paginationClickable: true,
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		speed: 1000,
		effect: 'fade'
	});
	/*---------- POST FEATURED END ----------*/

	/*---------- ESPORT SLIDER AUTO HEIGHT START ----------*/
	$(function(){
		$(window).resize(function(){
			var windowy = $(window).height();
			var mobileHeaderHeight = $(".mobile-header").height();
			var mobileHeaderHeight = windowy - mobileHeaderHeight;
			$('.esport-slider-carousel .slider-wrapper').css('height',mobileHeaderHeight + 'px');
		}).resize();    
	});
	/*---------- ESPORT SLIDER AUTO HEIGHT END ----------*/

	/*---------- LOGO CAROUSEL START ----------*/
	function gloriaSliders() {
		$('.gloria-sliders').each( function() {
			var cswiper = $(this),
				autoplay = $(this).data('aplay'),
				item = $(this).data('item'),
				sloop = $(this).data('sloop'),
				columnSpace = $(this).data('column-space'),
				effect = $(this).data('effect'),
				effectTime = $(this).data('effectTime'),
				pagination = $(this).data('pagination');


			var swiper = new Swiper(cswiper, {
				slidesPerView: item,
				autoplay: autoplay,
				loop: sloop,
				effect: effect,
				spaceBetween: columnSpace,
				nextButton: '.slider-next',
				prevButton: '.slider-prev',
				pagination: pagination,
				paginationClickable: true,
				preventClicks: false,
				preventClicksPropagation: false,
				breakpoints: {
					991: {
						slidesPerView: item < 6 ? item: 5, 
					},
					767: {
						slidesPerView: item < 6 ? item: 4, 
					},
					550: {
						slidesPerView: item < 6 ? item: 3, 
					},
					350: {
						slidesPerView: item < 6 ? item: 2, 
					},
				}
			});

		});

	}
	gloriaSliders();
	/*---------- LOGO CAROUSEL END ----------*/

	/*---------- TEAM & PLAYER START ----------*/ 
	$(function () {
		$( document ).ready(function() {
			$('.player-team-list-wrapper .tab-content .tab-pane:first-child').addClass('active');
			$('.player-team-list-wrapper .nav-tabs li:first-child').addClass('active');
		});
	});
	/*---------- TEAM & PLAYER END ----------*/

	/*---------- FIXTURES START ----------*/ 
	$(function () {
		$( document ).ready(function() {
			$('.fixtures-wrapper .tab-content .tab-pane:first-child').addClass('active');
			$('.fixtures-wrapper .nav-tabs li:first-child').addClass('active');
		});
	});
	/*---------- FIXTURES END ----------*/

	/*---------- COUNTER START ----------*/
	$('.esport-counter .number').counterUp({
		delay: 10,
		time: 2000
	});
	/*---------- COUNTER END ----------*/

} )( jQuery );