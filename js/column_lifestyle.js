$(function() {
$('a[href^="#"]').click(function(){
    var speed = 500;
	var w = $(window).width();
	if(w>769){
		offsetY = 70; 
	 }else{
		offsetY = 50; 
	 }
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - offsetY;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});


$(function() {
$('area[href^=#]').click(function(){
    var speed = 500;
	var w = $(window).width();
	if(w>769){
		offsetY = 70; 
	 }else{
		offsetY = 50; 
	 }
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - offsetY;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});


$(function() {
	$('img[usemap]').rwdImageMaps();
});

$(function() {
	//01
	$(".btn01, .map01").hover(function() {
	$(".btn01").addClass("active");
	$(".mapIllust").attr("src","../images/member/column_lifestyle/map_img01.png");
	},
	function() {
	$(".btn01").removeClass("active");
	$(".mapIllust").attr("src","../images/member/column_lifestyle/map_img00.png");
	});
	//02
	$(".btn02, .map02").hover(function() {
	$(".btn02").addClass("active");
	$(".mapIllust").attr("src","../images/member/column_lifestyle/map_img02.png");
	},
	function() {
	$(".btn02").removeClass("active");
	$(".mapIllust").attr("src","../images/member/column_lifestyle/map_img00.png");
	});
	//03
	$(".btn03, .map03").hover(function() {
	$(".btn03").addClass("active");
	$(".mapIllust").attr("src","../images/member/column_lifestyle/map_img03.png");
	},
	function() {
	$(".btn03").removeClass("active");
	$(".mapIllust").attr("src","../images/member/column_lifestyle/map_img00.png");
	});
	//04
	$(".btn04, .map04").hover(function() {
	$(".btn04").addClass("active");
	$(".mapIllust").attr("src","../images/member/column_lifestyle/map_img04.png");
	},
	function() {
	$(".btn04").removeClass("active");
	$(".mapIllust").attr("src","../images/member/column_lifestyle/map_img00.png");
	});
	//05
	$(".btn05, .map05").hover(function() {
	$(".btn05").addClass("active");
	$(".mapIllust").attr("src","../images/member/column_lifestyle/map_img05.png");
	},
	function() {
	$(".btn05").removeClass("active");
	$(".mapIllust").attr("src","../images/member/column_lifestyle/map_img00.png");
	});
	//06
	$(".btn06, .map06").hover(function() {
	$(".btn06").addClass("active");
	$(".mapIllust").attr("src","../images/member/column_lifestyle/map_img06.png");
	},
	function() {
	$(".btn06").removeClass("active");
	$(".mapIllust").attr("src","../images/member/column_lifestyle/map_img00.png");
	});
	//07
	$(".btn07, .map07").hover(function() {
	$(".btn07").addClass("active");
	$(".mapIllust").attr("src","../images/member/column_lifestyle/map_img07.png");
	},
	function() {
	$(".btn07").removeClass("active");
	$(".mapIllust").attr("src","../images/member/column_lifestyle/map_img00.png");
	});
	//08
	$(".btn08, .map08").hover(function() {
	$(".btn08").addClass("active");
	$(".mapIllust").attr("src","../images/member/column_lifestyle/map_img08.png");
	},
	function() {
	$(".btn08").removeClass("active");
	$(".mapIllust").attr("src","../images/member/column_lifestyle/map_img00.png");
	});
	//09
	$(".btn09, .map09").hover(function() {
	$(".btn09").addClass("active");
	$(".mapIllust").attr("src","../images/member/column_lifestyle/map_img09.png");
	},
	function() {
	$(".btn09").removeClass("active");
	$(".mapIllust").attr("src","../images/member/column_lifestyle/map_img00.png");
	});
	
	
	
});