$(function(){
	$(document).on('keydown','[name=goal]',function(e){
		if(e.keyCode === 13){
			$('#submit').click();
		}
	});
	$(document).on('click','#submit',function(){
		if($('[name=goal]').val()){
			var goal_url = encodeURI($('[name=goal]').val());
			window.open('https://maps.google.co.jp/maps?saddr='+'34.834808, 134.699466'+'&daddr='+goal_url+'&dirflg=d','_blank');
		}
		else{
			swal("", '目的地を入力してください', "error");
		}
		return false;
	});
});

