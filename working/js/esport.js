(function($){
	'use strict';

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

	});
	/*---------- MOBILE HEADER END ----------*/
	

	/*---------- TEAM & PLAYER START ----------*/ 
	$(function () {
		$( document ).ready(function() {
			$('.player-team-list-wrapper .tab-content .tab-pane:first-child').addClass('active');
			$('.player-team-list-wrapper .nav-tabs li:first-child').addClass('active');
		});
	});
	/*---------- TEAM & PLAYER END ----------*/

} )( jQuery );