$(function(){

//模拟下拉框
    $('.select input').on('click',function(){
        if($('.select .city').is('.hide')){
            $('.select .city').removeClass('hide');
        }else{
            $('.select .city').addClass('hide');
        }
    })
    $('.select ul li').on('click',function(){
        $('.select input').val($(this).html());
        $('.select .city').addClass('hide');
        $('.select input').css('border-bottom','1px solid $d6d6d6');
    })
    $('.select ul li').hover(
        function(){
            $(this).css({'backgroundColor':'#fd9','font-size':'18px'});
        },function(){
            $(this).css({'backgroundColor':'#fff','font-size':'14px'});
        }
    )





})