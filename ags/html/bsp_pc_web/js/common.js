$(document).ready(function () {
	$(".seatWrap ul li").click(function(){
		$(this).toggleClass("selected");
	});
	$(".seat .passengerWrap ul li").click(function(){
		$(this).siblings().removeClass("selected");
		$(this).addClass("selected");
	});
	$("a.qa").hover(function(){
		$(this).next().show();
	}, function(){
		$(this).next().hide();
	});
	$(".baggage .passengerWrap > ul > li").click(function(){
		$(this).siblings().removeClass("selected");
		$(this).addClass("selected");
	});
	$(".meal .passengerWrap ul li").click(function(){
		$(this).toggleClass("selected");
	});

	$(document).on('click', '.popupBtn', function() {
		var popupIndex = $(this).attr('id');
		$(".popupContainer."+popupIndex).show();
		var popupwidth = $('.popupContainer .popupWrap').not( ":hidden" ).width();
		var popupHeight = $('.popupContainer .popupWrap').not( ":hidden" ).height();
		$('.popupContainer .popupWrap').not( ":hidden" ).css("left","calc(50% - "+(popupwidth+2)/2+"px");
		$('.popupContainer .popupWrap').not( ":hidden" ).css("top","calc(50% - "+(popupHeight+2)/2+"px");
	});

	$(document).on('click', '.popupDimmed', function() {
		$(this).parent().hide();
	});
	$(document).on('click', '.popupContainer .close', function() {
		$('.popupContainer').hide();
	});

	$(".popupContainer.buyHistory .popupContent > ul > li > p").click(function(){
		$(this).parents().toggleClass("on");
	});

	$(".selectForm > p").click(function(){
		$(this).toggleClass("on");
	});
	$(".selectForm > ul > li").click(function(){
		$(".selectForm > p").removeClass("on");
	});

	$(window).scroll(function() {
		if ($(document).scrollTop() > 302 ) {
			$(".priceContainer").addClass("menuFixed");
		}	else	{
			$(".priceContainer").removeClass("menuFixed");
		}
	});	

	$(window).scroll(function() {
		var scrollHeight = $(document).height();
		var scrollPosition = $(window).height() + $(window).scrollTop();		
		if (scrollPosition > scrollHeight - 284 + 948 - $(".priceContainer").innerHeight()) {		
				$(".priceContainer").addClass("bottom");
				$(".priceContainer").css("bottom",scrollPosition - scrollHeight + 284);
			}	else	{
				$(".priceContainer").removeClass("bottom");
				$(".priceContainer").css("bottom","auto");
			}
		});	
});


