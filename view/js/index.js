//userAgentによるCSS切り替え

$(function(){
    var _UA = navigator.userAgent;
    if (_UA.indexOf('iPhone') > 0 || _UA.indexOf('iPad') > 0 || _UA.indexOf('iPod') > 0 ||
        _UA.indexOf('android') > 0 || _UA.indexOf('Android') > 0 ||
        _UA.indexOf('BlackBerry') > 0 || _UA.indexOf('windows Phone') > 0 ||
        _UA.indexOf('NOKIA') > 0 || /Mobile.*Firefox/.test(_UA))
    {
        $('head').append('<link>');
        $('head').children(':last').attr({rel:'stylesheet',href:'css/tab.css'}); 
    }
});



//マウスオーバー処理
$(function(){
     $('a img').hover(function(){
        $(this).attr('src', $(this).attr('src').replace('_off', '_on'));
          }, function(){
             if (!$(this).hasClass('currentPage')) {
             $(this).attr('src', $(this).attr('src').replace('_on', '_off'));
        }
   });
});

$(function(){
	$( 'img.fade-rollout' ).on({
		'mouseenter': function() {
			$( this ).stop().animate({
				'opacity': '1',
			}, 600 );
		},
		'mouseleave': function() {
			$( this ).stop().animate({
				'opacity': '.8'
			}, 750 );
		}
	});
});
