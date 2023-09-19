// member
$(function() {
	$('#loginbtn').click(function() {
		
		var pw = $('#loginpwd').val();
		var url = "";
		switch (pw) {
			case "":
				alert('パスワードを入力してください。');
				break;
				
			case "wss115":
				url = "member/index.html";
				location.href = url;
				break;
	
			default:
				alert('申し訳ございません。\nご入力されたパスワードが正しくありません。');
				break;
			}
	});
});


/* scrollArea
--------------------------------------------------*/
// $(function(){
// 	var scrollArea = function(){
// 		var
// 			sc = $(window).scrollTop(),
// 			wh = window.innerHeight;
// 		$('.scrollCnt').each(function(index, el) {
// 			var
// 				pos = $(this).offset().top,
// 				num = $('.scrollCnt').index($(this));
// 			if(pos<sc+wh*0.8){
// 				$('#scrollArea > *').eq(num).addClass('on');
// 			} else {
// 				$('#scrollArea > *').eq(num).removeClass('on');
// 			}
// 		});
// 	}

// 	$(window).on('load scroll',function(){
// 		scrollArea();
// 	});

// });





/* scrollArea
--------------------------------------------------*/
$(function() {
    // if (window.matchMedia( '(min-width: 769px)' ).matches) {
        $('.photoBox').iziModal({
            group: "group",
            loop: true,
            navigateCaption: false,
            overlayColor: 'rgba(0,0,0,.75)',
            transitionIn: 'fadeInUp'
        });
    // }
});
$(function(){
    $('.photoBox').prepend('<div class="closeBtnBox"><a class="closeBtn" data-izimodal-close=""><img src="images/index/btn_close.png"></a></div>');
    // $('.close').on('click',function(){
    //  $('.iziModal .closeBtn').click();
    // });
});



/* scrollArea
--------------------------------------------------*/
$(function() {
    if(sessionStorage.getItem('campaign_modal') == 1){
        $('#campaign_modal').hide();
    } else {
        $('#campaign_modal').show();
        sessionStorage.setItem('campaign_modal', 1);
    }


    $('#campaign_modal_close_button, #campaign_modal').click(function(){
        $('#campaign_modal').hide();
    });
});




/* bnrSlider
--------------------------------------------------*/
$(function() {
    $('.bnrSlider').slick({
        infinite: true, 
        slidesToShow: 1,
        autoplaySpeed: 4000,
        slidesToScroll: 1,
        cssEase: 'ease-out',
        speed: 700,
        arrows: true, 
        dots: true, 
        autoplay: true, 
        swipe: true, 
        swipeToSlide: true, 
        pauseOnFocus: true, 
        pauseOnHover: true,
        appendArrows: '.bnrSlideWrap .navigation',
        appendDots: '.bnrSlideWrap .navigation'
    });
});



/* galleryList
--------------------------------------------------*/
$(function() {
    $('.galleryList').slick({
        infinite: true, 
        slidesToShow: 1,
        autoplaySpeed: 4000,
        slidesToScroll: 1,
        cssEase: 'ease-out',
        speed: 700,
        arrows: true, 
        dots: true, 
        autoplay: true, 
        swipe: true, 
        swipeToSlide: true, 
        pauseOnFocus: true, 
        pauseOnHover: true,
        appendArrows: '.galleryListWrap .navigation',
        appendDots: '.galleryListWrap .navigation'
    });
});