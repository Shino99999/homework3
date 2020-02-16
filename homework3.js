$(function(){
    /*書いてみましたが結局は失敗に終わったコードです。
    
    $('#touch-left').click(function() {
        if ($('#1').hasClass('on')) {
            $('#2').addClass('on');
            $('#1').removeClass('on');

        } else if ($('#2').hasClass('on')) {
            $('#3').addClass('on');
            $('#2').removeClass('on');

        } else if ($('#3').hasClass('on')) {
            $('#1').addClass('on');
            $('#3').removeClass('on');
        }
    });

    $('#touch-right').click(function() {
        if ($('#1').hasClass('on')) {
            $('#3').addClass('on');
            $('#1').removeClass('on');

        } else if ($('#2').hasClass('on')) {
            $('#1').addClass('on');
            $('#2').removeClass('on');

        } else if ($('#3').hasClass('on')) {
            $('#2').addClass('on');
            $('#3').removeClass('on');
        }
    });
    */

    $('#for_click1').click(function() {
        if ($('.click1').hasClass('closed')) {
            $('.click1').removeClass('closed');
        } else {
            $('.click1').addClass('closed');
        }
    });

    $('#for_click2').click(function() {
        if ($('.click2').hasClass('closed')) {
            $('.click2').removeClass('closed');
        } else {
            $('.click2').addClass('closed');
        }
    });

    $('#for_click3').click(function() {
        if ($('.click3').hasClass('closed')) {
            $('.click3').removeClass('closed');
        } else {
            $('.click3').addClass('closed');
        }
    });



    /*https://www.matometehp.jp/1508.html*/
    $("#touch-left").click(function(){
        $("#div_img").animate({
            marginLeft : parseInt($("#div_img").css("margin-left"))+1060+"px"
            },"slow","swing",
            function(){
                $("#div_img").css("margin-left","-1060px")
                $("#div_img #ul_img li:last").prependTo("#ul_img");
            });
    });

    $("#touch_right").click(function(){
        $("#div_img").animate({
            marginLeft : parseInt($("#div_img").css("margin-left"))-1060+"px"
            },"slow","swing" , 
        function(){
            $("#div_img").css("margin-left","-1060px")
            $("#div_img #ul_img li:first").appendTo("#ul_img");
        });
    });

    $("#div_img").css("width",1060*$("#ul_img li").size()+"px");
    $("#div_img #ul_img li:last").prependTo("#ul_img");
    $("#div_img").css("margin-left","-1060px");
});


