$(document).ready(function() {
	$('#fullpage').fullpage({
		'verticalCentered': false,
		'css3': true,
		//'sectionsColor': ['#F0F2F4', '#fff', '#fff', '#fff'],
		'navigation': true,
		'navigationPosition': 'right',
		//'navigationTooltips': ['', '', '', ''],


		'onLeave': function(index, nextIndex, direction){
            if (index == 1){$('#section7').addClass('active');}
			if (index == 1 || index == 3) {
				$('.sct1back').removeClass('sct1backani');
				$('.sct1ilogo').removeClass('sct1ilogoani');
				$('.imageback').addClass('backimg');
				$('.bg').addClass('bgani');
				$('.ten').addClass('tenani');
				$('.twenty').addClass('twentyani');
				$('.b').addClass('bani');
				$('.line').addClass('lineani');
                $('.linemobile').addClass('lineani');
			}
			if (index == 2) {
				$('.sct1back').addClass('sct1backani');
				$('.sct1ilogo').addClass('sct1ilogoani');
				$('.imageback').removeClass('backimg');
				$('.bg').removeClass('bgani');
				$('.ten').removeClass('tenani');
				$('.twenty').removeClass('twentyani');
				$('.b').removeClass('bani');
				$('.line').removeClass('lineani');
                $('.linemobile').removeClass('lineani');
                $('#section7').removeClass('active');
			}
			if (index == 3 && direction == 'down'){
				$('.ani').addClass('ani_on');
				$('.page_animate').addClass('animate');
				$('.section').eq(index -1).removeClass('moveDown').addClass('moveUp');
			}
			else if(index == 3 && direction == 'up'){
				$('.section').eq(index -1).removeClass('moveUp').addClass('moveDown');
			}
		}
	});
});
		

//menu
$(function () {
  $("#btn_menu").click(function () {
    $(".menu_panel").fadeIn();
  })
})

$(function () {
  $("#btn_close").click(function () {
    $(".menu_panel").fadeOut();
  })
})

//ani
var getAnimate = $(".page_animate");
        if(getAnimate.length > 0) {
            var animateInterval = null;
            var mainNumberObj = $("#main_number");
            function animateScroll() {
                clearTimeout(animateInterval);
                animateInterval = setTimeout(function() {
                    var getScroll = $(window).scrollTop();
                    var getScrollTop = getScroll + $(window).height();
                    var animateIdx = 0;
                    $(".page_animate").each(function() {
                        var getObj = $(this);
                        var getTop = getObj.offset().top;
                        //var getHeight = getObj.height();
                        if(getScrollTop > getTop) {
                            if(!getObj.hasClass("animate")) {
                                animateIdx += 1;
                                var getAnimateIdx = animateIdx;
                                setTimeout(function() {
                                    getObj.addClass("animate");
                                    if(getObj.hasClass("number_box")) {
                                        var getNumber = parseInt(mainNumberObj.data("value"), 10);
                                        mainNumberObj.html("").prop("count",0).stop(true,true).delay(animateIdx * 100).animate({
                                            count:getNumber
                                        }, {
                                            duration: 4000,
                                            easing:"easeOutExpo",
                                            step: function (now) {
                                                var getStep = Math.ceil(now);
                                                getStep = getStep.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                                                $(this).text(getStep);
                                            }
                                        });
                                    }
                                }, getAnimateIdx * 100);
                            }
                        }
                        else {
                            getObj.removeClass("animate");
                        }
                    });
                    
                }, 10);
            }
            $(window).on("scroll resize", function() {
                animateScroll();
            });
            animateScroll();
        }