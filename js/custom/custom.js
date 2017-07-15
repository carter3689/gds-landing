// [MASTER JAVASCRIPT]
//	Project     :	EVENT Page
//	Version     :	1.0
//	Last Change : 	27/02/2017
//	Primary Use :   EVENT HTML Page

function isNumber(evt){ //alert(evt);
			evt = (evt) ? evt : window.event;
			var charCode = (evt.which) ? evt.which : evt.keyCode;
			if (charCode > 31 && (charCode < 48 || charCode > 57)) {
				return false;
			}
			return true;
		}

$(document).on('ready', function() {	
	"use strict"; //Start of Use Strict
	var menu_bar= $('.navbar-default');
	var menu_li= $('.navbar-default li a');
	var menu_li_1=$(".navbar-nav li a");
	var menu_hover= $('.navbar-default li a:hover');
	var collapse= $('.navbar-collapse');
	var top_nav=$('#top-nav');
	
	if(top_nav.length) {
	//After Scroll Menu Created, Menu Bgcolor and Text Color
    var x = $("#top-nav").offset().top
	if (x > 50) {
        menu_bar.fadeIn().css({"background-color": "#ffffff", "color": "#666666", "box-shadow": "0px 0px 5px rgba(0,0,0,0.3)"});
		menu_li.css({"color": "#666666"});			
    }
	else {
		menu_bar.css({"background-color": "transparent", "color": "#ffffff", "box-shadow": "none", "display": "none" });
				
	}	
	
	$(document).on('scroll',function() {	
		var y = $(this).scrollTop();   
		if (y > 50) {
			menu_bar.fadeIn().css({"background-color": "#ffffff", "color": "#666666", "box-shadow": "0px 0px 5px rgba(0,0,0,0.3)"});
			menu_li.css({"color": "#666666"});		
			
		}
		else {
			menu_bar.css({"background-color": "transparent", "color": "#ffffff", "box-shadow": "none", "display": "none"});
			menu_li.css({"color": "#666666"});
		}
	});
	}
	
	// Header Menu click Function
	$('ul.nav a[href^="#"]').on('click' ,function(event){	
		if (!$(this).hasClass('dropdown-toggle')) {	
		
		var toggle = $(".navbar-toggle").is(":visible");
		if (toggle) {
		  $(".navbar-collapse").collapse('hide');
		}
		if($($.attr(this, 'href')).length){
			$('html, body').animate({			
				scrollTop: $( $.attr(this, 'href') ).offset().top -60
			}, 2000);
			return false;
			}		
		}
		event.preventDefault();				
	});	
	
	
	
	//MENU BAR SMOOTH SCROLLING FUNCTION		
		var menu_list=$('#menu-list');
		if(menu_list.length) {			
			$( "#menu-list" ).on( "click", ".pagescroll", function( event ) {					
					event.preventDefault();	
					var hash_tag= $(this).attr('href');
					$('html, body').animate({
					scrollTop: $(hash_tag).offset().top - 50
				}, 2000);	
				return false;
			});			
		}	
		
		// YOUTUBE BACKGROUND VIDEO FUNCTION	
		var player=$('.player');
		if(player.length) {
			player.mb_YTPlayer();					
		}
		
	
	//PRICING BORDER ANIMATION FUNCTION
	$(".pricig-br").on("mouseover", function() {
		
		$(this).find(".pricig-uline").addClass( "pricig-full" );
		
	});	
	$(".pricig-br").on("mouseleave", function() {	
		$(this).find(".pricig-uline").removeClass( "pricig-full" );
	});
	
	//IMAGE ZOOM ANIMATION FUNCTION
	$(".zoom-area").on("mouseover", function() {
		
		$(this).find(".find-image").addClass( "image-zoom" );
		
	});	
	$(".zoom-area").on("mouseleave", function() {	
		$(this).find(".find-image").removeClass( "image-zoom" );
	});
	
	//CONTACT FORM VALIDATION	
		if ($('#contact-form').length) {
			$('#contact-form').each(function(){
				$(this).validate({			
					errorClass: 'error',
					submitHandler: function(form){
						$.ajax({
							type: "POST",
							url:"mail/mail.php",
							data: $(form).serialize(),
							success: function(data) {							
							   if(data){
								   $('#sucessMessage').html('Mail Sent Successfully !!!');
								   $('#sucessMessage').show();
								   $('#sucessMessage').delay(3000).fadeOut();
							   }
							   else {
									$('#failMessage').html(data);
									$('#failMessage').show();
									$('#failMessage').delay(3000).fadeOut();
									}
							},
							error: function(XMLHttpRequest, textStatus, errorThrown) {
							   $('#failMessage').html('Error occurred');
							   $('#failMessage').show();
							   $('#failMessage').delay(3000).fadeOut();
							 }
						});
					}				
				});
			});
		}
		
		//POPUP FORM
		 $(document).ready(function () {

			$('#fadeandscale').popup({
				pagecontainer: '.container',
				transition: 'all 0.3s'
			});

		});

		//Get URL parameter
		var getUrlParameter = function getUrlParameter(sParam) {
			var sPageURL = decodeURIComponent(window.location.search.substring(1)),
				sURLVariables = sPageURL.split('&'),
				sParameterName,
				i;
			for (i = 0; i < sURLVariables.length; i++) {
				sParameterName = sURLVariables[i].split('=');

				if (sParameterName[0] === sParam) {
					return sParameterName[1] === undefined ? true : sParameterName[1];
				}
			}
		};
		
		//POPUP MSG BOX
		var cancel = getUrlParameter('cancel');
		var success = getUrlParameter('success');	
		if (cancel=='true') {
			$('#fade').fadeIn();
			$('#cancel_btn').fadeIn();	
		}
		else if (success=='true') {
			$('#fade').fadeIn();
			$('#success_btn').fadeIn();	
		}
		$('.close').on('click', function() {		
			$('#fade').fadeOut();
			$('#cancel_btn').fadeOut();
			$('#success_btn').fadeOut();
		});
		
		$('#donate-btn').on('click', function() {	
			
			var amt = $('#amounts').val();
			if(amt == ""){
				$('#amounts').prop('required',true);
			}else{
				return true;
			}			
		});
		
	
		//SELECT BOX VALUE POPULATE IN TEXT BOX
		var selected_val = $("select[name=amount] option:selected").val();	
		if(selected_val != 0){
			$("#amounts").val(selected_val);
		}
		else{				
			$("#amounts").val('').attr('placeholder', 'Amount'); 
		}		
		$('#price_1').on('change', function() {
			var select_optn = $(this).val();	
			  if(select_optn != 0){
					$("#amounts").val(select_optn);				
			  }else{
				$("#amounts").val('').attr('placeholder', 'Amount');
				$("#amounts").attr('placeholder', 'Amount');
			  }
		})
		
	//SELECT BOX DISABLED AND ENABLED
		$('#amounts').on('input', function() { 
			var key_input = $(this).val();
			if(key_input=='') {
				$('#price_1').prop('disabled',false);			
			}			
			else {
				$('#price_1').prop('disabled',true );			
			}
		});	
		
		
		
		//SELECT BOX VALUE POPULATE IN TEXT BOX-TWO
		var selected_val_two = $("select[name=amount] option:selected").val();	
		if(selected_val_two != 0){
			$("#amounts_two").val(selected_val_two);
			
		}
		else{				
			$("#amounts_two").val('').attr('placeholder', 'Amount'); 
		}		
		$('#price_2').on('change', function() {
			var select_optn = $(this).val();	
			  if(select_optn != 0){
					$("#amounts_two").val(select_optn);				
			  }else{
				$("#amounts_two").val('').attr('placeholder', 'Amount');
				$("#amounts_two").attr('placeholder', 'Amount');
			  }
		})
		
	//SELECT BOX DISABLED AND ENABLED-TWO
		$('#amounts_two').on('input', function() { 
			var key_input = $(this).val();
			if(key_input=='') {
				$('#price_2').prop('disabled',false);			
			}			
			else {
				$('#price_2').prop('disabled',true );			
			}
		});	
		
		$('#donate-btn-2').on('click', function() {	
			
			var amt = $('#amounts_two').val();
			if(amt == ""){
				$('#amounts_two').prop('required',true);
			}else{
				return true;
			}			
		});
		
		
		
		//AMOUNT VALIDATION
		$("#amounts").on('keydown',function (e) {
			// Allow: backspace, delete, tab, escape, enter and .
			if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
				 // Allow: Ctrl+A, Command+A
				(e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) || 
				 // Allow: home, end, left, right, down, up
				(e.keyCode >= 35 && e.keyCode <= 40)) {
					 // let it happen, don't do anything
					 return;
			}
			// Ensure that it is a number and stop the keypress
			if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
				e.preventDefault();
			}
		});
		
		
			jQuery.validator.setDefaults({
			  debug: true,
			  success: "valid"
			});
		
			// validate signup form on keyup and submit
		$("#popup-form").validate({
			
			rules: {
				price_1: {
				  required: true
				}
			  }
		});
		
		$("#popup-form-2").validate({
			  rules: {
				price_2: {
				  required: true
				}
			  }
		});
		
		
	
	
		return false;

		// End of use strict
});

