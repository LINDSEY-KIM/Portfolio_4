$(document).ready(function(){

    $(window).scroll(function(){

        var sct = $(window).scrollTop();
        // console.log(sct);

        var sct_con_1 = $(".section_1").offset().top;
        var sct_con_2 = $(".section_2").offset().top; 
        var sct_con_3 = $(".section_3").offset().top; 
        var sct_con_4 = $(".section_4").offset().top;
        var sct_con_7 = $(".section_7").offset().top; 
        var sct_con_8 = $(".section_8").offset().top;  
        
        if(sct >= sct_con_2, sct <= sct_con_8 ){
            $('header').css({
                backgroundColor: 'rgba(255 255 255/40%)',
            });
        }

        if(sct >= sct_con_2){
            $('.section_2 .txt_wrap_1').addClass('active_0');
        }

        if(sct >= sct_con_2){
            $('.section_2 .btn_2').addClass('active_0');
        }

        if(sct >= sct_con_3 * 0.8){
            $('.section_3 .img_wrap_3').addClass('active_1');
        }

        if(sct >= sct_con_3 * 0.8){
            $('.section_3 .txt_wrap_3').addClass('active_2');
        }

        if(sct >= sct_con_4 * 0.8){
            $('.section_4 .txt_wrap_4').addClass('active_3');
        }

        if(sct >= sct_con_4 * 0.85){
            $('.section_4 .oud_1').addClass('active_4');
        }

        if(sct >= sct_con_4 * 0.85){
            $('.section_4 .oud_2').addClass('active_5');
        }

        if(sct >= sct_con_7 * 0.95){
            $('.section_7 .left').addClass('active_6');
        }

        if(sct >= sct_con_7 * 0.95){
            $('.section_7 .right').addClass('active_7');
        }

        if(sct >= sct_con_8){
            $('.section_8 .left').addClass('active_8');
        }

        if(sct >= sct_con_8){
            $('.section_8 .up').addClass('active_9');
        }

        if(sct >= sct_con_8){
            $('.section_8 .down_box').addClass('active_10');
        }
    });


});