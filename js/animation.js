$(function() {
  
  var loaded = false;
  var time = 2500;
  $(function() {
    $(window).on('load', function() {
      $('body').addClass('loaded'); //
      $('.loading').delay(500).fadeOut(700);
      MVareaSet();
    });
    setTimeout(function() { //タイムアウト時の処理
      if(!loaded) {
        $('.loading').delay(500).fadeOut(700);
        MVareaSet();
      }  
    },time);
  });
  
  function MVareaSet(){
    var wH = $(window).height();
    var wW = $(window).width();
    var hH = $('header').innerHeight();
    var nH = $('#footFixNav').innerHeight();
    var tH = wH - hH - nH;// 表示画面とナビエリアの差分を算出
    if(wW > 768) {
      $('.sectionMainVisual').css('height', wW*1634/3840 + 'px');
    }else {
      $('.sectionMainVisual').css('height', wW*2448/1500 + 'px');
    }
  }
  
});



