function marker_init() {
	var home = $('#menu li.first');
	var home_width = home.width();
	$('#maker').css('width', home_width);
}

$(document).ready(function(){

	$('.big-img').hover(
		function(){
			$('.decription-big-img').css('height','125px');
		}, function() {
			$('.decription-big-img').css('height','95px');
		}
	);


	$('.hover-img').hover(
		function(){
			//console.log($(this));
			var hover_img = $(this).find('.decription-img');
			hover_img.css('height','72px');
		}, function() {
			//console.log($(this));
			var hover_img = $(this).find('.decription-img');
			hover_img.css('height','52px');
		}
	);


	$('.btn-search').click(function(){
		if ($(this).hasClass('btn-search-click') === true) {
			$(this).removeClass('btn-search-click');
			$('.search-box').slideUp();	
		}
		else {
			$(this).addClass('btn-search-click');
			$('.search-box').slideDown();
		}
	});

	//TAB
	var tabs = $('.content-right-titile-new');
	tabs.click(function(e){
		e.preventDefault();
		tabs.removeClass('actived');
		$('.tabs-block').hide();
		$(this).addClass('actived');
		var id = $(this).find('a').attr('href');
		$(id).fadeIn();
	});

	$('#menu > li').hover(function(){
		var pos = $(this).position();
		var width = $(this).width();
		var left = pos.left;

	//GET TYPE
	var attr_type = $(this).attr('type');
	var classHover = ' ';
	classHover += 'background-hover-' + attr_type;

		$('#maker').css('left', left).css('width',width).removeClass().addClass(classHover);
	})

	//BACK TO TOP
    var offset = 220;
	var duration = 500;
	$(window).scroll(function() {
		if ($(this).scrollTop() > offset) {
			$('.scroll').fadeIn(duration);
		} else {
			$('.scroll').fadeOut(duration);
		}
	});

	$('.scroll').click(function(event) {
		event.preventDefault();
		$('html, body').animate({scrollTop: 0}, duration);
		return false;
	});


	$('.mb').hover(
		function(){
			$('.mb a').css('color','#ff9801');
			$('.mb').css('color','#ff9801');
		},
		function(){
			$('.mb a').css('color','#fff');
			$('.mb').css('color','#fff');
		}

	);

	$('.computer').hover(
		function(){
			$('.computer a').css('color','#1bbc9b');
			$('.computer').css('color','#1bbc9b');
		},
		function(){
			$('.computer a').css('color','#fff');
			$('.computer').css('color','#fff');
		}

	);

	$('.technical').hover(
		function(){
			$('.technical a').css('color','#3598db');
			$('.technical').css('color','#3598db');
		},
		function(){
			$('.technical a').css('color','#fff');
			$('.technical').css('color','#fff');
		}

	);

	$('.tips').hover(
		function(){
			$('.tips a').css('color','#607d8b');
			$('.tips').css('color','#607d8b');
		},
		function(){
			$('.tips a').css('color','#fff');
			$('.tips').css('color','#fff');
		}

	);

	$('.box').hover(
		function(){
			$(this).animate({boxShadow: '0 0 30px #ccc'});
		},
		function(){
			$(this).animate({boxShadow: "0 0 10px #fff"});
		}
		);
})


$(window).load(function() {
	marker_init();
})



