// 共通パーツ読み込み
function parts(rootDir,File){
    $.ajax({
        url: rootDir + "library/" + File,
        cache: false,
        async: false,
        dataType: 'html',
        success: function(html){
            html = html.replace(/\{\$root\}/g, rootDir);
            document.write(html);
        }
    });
}



//* ページスクロール *//
$(function() {
	
$('a[href^="#Page"]').click(function(){
    var speed = 500;
	var w = $(window).width();
	if(w>769){
		offsetY = 70; 
	 }else{
		offsetY = 50; 
	 }
    var href= $(this).attr("href");
    var target = $(href == "#Page" || href == "" ? 'html' : href);
    var position = target.offset().top - offsetY;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});


//* スクロールすると固定ヘッダ、ページトップボタン表示 *//
$(function() {
	$('.pagetop').hide();
	 $(window).on('load scroll', function(){
		 var w = $(window).width();
		 
		 if(w>769){
		 	var scrollpos = $(document).height()-$(window).height()-$('#Footer').height()+20;
		 }else{
			var scrollpos = $(document).height()-$(window).height()-$('.copyright').height();
		 }
		 
		 if ($(this).scrollTop() > 100) {
			 $('.pagetop').addClass('onscroll');
		 }else{
			 $('.pagetop').removeClass('onscroll');
		 }
		 if ($(this).scrollTop() > 500) {
			 	$('.pagetop').fadeIn('fast');	
			 
			 if ($(this).scrollTop() > scrollpos){
					$('.pagetop').addClass('bottom');
				}else{
					$('.pagetop').removeClass('bottom');
				}
							
		 }else{
			  $('.pagetop').fadeOut('fast');	 
		 }
		});	 
});


//* SPメニュー *//
	$(function(){		
		var menuflag = 0;
		$('#SpMenuBtn').click(function () {
			if(menuflag==0){
				$(this).addClass('open');
				menuflag = 1;
				$('#Gnav').fadeIn();	
			}else{
				$(this).removeClass('open');
				menuflag = 0;
				$('#Gnav').fadeOut();
			}
			return false();
		});
		$(window).resize(function() {
				$('#SpMenuBtn').removeClass('open');
				menuflag = 0;
            var w = $(window).width();
			if(w>769){
				$('#Gnav').css('display','block');
				$('#Header').removeClass('bg-back');
			}else{
				$('#Gnav').css('display','none');
			}
        });

	});


//* スクロールすると画像を表示 *//

$(function() {
	$('.fade,.fade01,.fade02,.fade03,.fade04,.delay01,.delay02,.delay03,.delay04,.delay05').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if(isInView){
			$(this).stop().addClass('mv');
		}
	});
});



//* ヘッダ背景 *//
$(function() {
  var showFlag = false;
  var header = $('.home #PcNav');    
  $(window).scroll(function () {
	if($(window).width()>768){
    if ($(this).scrollTop() > 50) {
      if (showFlag == false) {
        showFlag = true;
        header.addClass('bg');
        header.removeClass('bg-back');
      }
    } else {
      if (showFlag) {
        showFlag = false;
        header.addClass('bg-back');
        header.removeClass('bg');
      }
    }
	}
  });
});

//* ヘッダ背景_下層 *//
$(function() {
  var showFlag = false;
  var header = $('.pages #PcNav');    
  $(window).scroll(function () {
	if($(window).width()>768){
    if ($(this).scrollTop() > 50) {
      if (showFlag == false) {
        showFlag = true;
        header.addClass('bg_Pages');
        header.removeClass('bg-back_Pages');
      }
    } else {
      if (showFlag) {
        showFlag = false;
        header.addClass('bg-back_Pages');
        header.removeClass('bg_Pages');
      }
    }
	}
  });
});

//* SP MV *//
/*$(function() {
	if($(window).width()>768){
		var mvh = $(window).height() - 100px;
	}else{
		var mvh = $(window).height();
	}
	$('#Mv .inner').css('height',mvh+'px');
	$('.sectionMainVisual').css('height',mvh+'px');
});*/
	

/* スクロールでアニメーション */
$(function() {
  var showFlag = false;
  var topInfo = $('#information');    
  $(window).scroll(function () {
	if($(window).width()>768){
    if ($(this).scrollTop() > 350) {
      if (showFlag == false) {
        showFlag = true;
        topInfo.stop().animate({'opacity' : '0'}, 300); 
      }
    } else {
      if (showFlag) {
        showFlag = false;
        topInfo.stop().animate({'opacity' : '1'}, 300); 
      }
    }
	}
  });
});

$(document).ready(function() {
	setTimeout(function(){
		if($(window).width()>768){
		$("#information").animate({bottom:"0"},{duration:1200});
		}
	},1000);
});


//* スクロールで固定バナー表示 *//
$(function() {
    var fixBnr = $('.fix_bnr');
    // fixBnr.hide();
	
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
        //バナーの表示方法
            fixBnr.addClass('hide');
        } else {
        //バナーの非表示方法
            fixBnr.removeClass('hide');
        }
    });
});
