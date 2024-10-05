$(function(){
  // 눈표시 클릭 시 패스워드 보이기
  $('.eyes').on('click',function(){
    $('.input.password').toggleClass('active');

    if( $('.input.password').hasClass('active') == true ){
    	$(this).find('.fa-eye').attr('class',"fa fa-eye-slash fa-lg").parents('.input').find('#password').attr('type',"text");
    				// i 클래스                // 텍스트 보이기 i 클래스
    }
    else{
    	$(this).find('.fa-eye-slash').attr('class',"fa fa-eye fa-lg").parents('.input').find('#password').attr('type','password');
    }
  });
});