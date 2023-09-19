

// animation
$(function() {
	if($(window).height()<780){
		$('#Mv').addClass('s-mode');	
	}else{
		$('#Mv').removeClass('s-mode');
	}
	
	var $item01 = $('#MvTxt'),$item01_img =$('#MvTxt img'), $item02 = $('#MvBg'),$item03 = $('#MvLogo'),$item03_img =$('#MvLogo img'),$item04 = $('#MvCircle');
	var $skip = $('#SkipBtn');
	if($(window).width()>768){
		var bgscroll =  $(window).width()*1.5 - $(window).height();
	}else{
		var bgscroll =  $(window).width()*3.672 - $(window).height();
	}
	
	function playAnimation(){
		animation01()
		.then(animation02)
		.then(animation03)
		.then(animation04);
    }
	
	// スキップボタンを設定
    $skip.on('click', function(){
        onSkip();
        return false;
    });
	
	 // スキップ処理
    function onSkip(){ 
        $item01.stop(true, true).hide();
        $item02.stop(true, true).css({'bottom': -bgscroll+'px'});
		$item03.stop(true, true).css({'left': 0});
        $item03_img.stop(true, true).css({'opacity': 1});
        $item04.stop(true, true).css({'opacity': 1});
        $skip.stop(true, true).hide();
    }
	
	// アニメーション
    function animation01() {
        var d = new $.Deferred;
        $item01.delay(1000).animate({top: 80+'px'},1300);
		$item01_img.delay(1000).animate({opacity:1},1200, function(){d.resolve();});
        return d.promise();
    }
	function animation02() {	
		var d = new $.Deferred;	
		$item01_img.delay(1000).animate({opacity:0},1200);
		$item02.delay(1000).animate({bottom: -bgscroll+'px'},2000, function(){d.resolve();});
		return d.promise();
    }
	function animation03() {
		var d = new $.Deferred;	
		$item03_img.delay(500).animate({opacity:1},800);
		$item03.delay(500).animate({left: 0},900, function(){d.resolve();});
		return d.promise();
    }
	function animation04() {
		var d = new $.Deferred;
		$item04.delay(100).animate({opacity:1},800, function(){d.resolve();});
		$skip.delay(800).hide();
		return d.promise();	
    }
	
	$(window).on('load', function() {
    	$('.loading').delay(500).fadeOut(700);
		// アニメーション実行
		playAnimation();
	});

	 /*setTimeout(function(){
       $('.loading').delay(500).fadeOut(700);
	   playAnimation();
    },10000);*/
	
});








