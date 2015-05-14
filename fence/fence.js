$( document ).ready(function() {
    for (k=0; k<31; k++) {
        for (kk=0; kk<31; kk++) {
            if ((kk+k == 15)|| ( (k-1== kk%16)&&(kk>15))|| ( (kk-1== k%16)&&(k>15) )|| ( (kk%16 + k%16 ==13)&&(k>15) &&(kk>15))) {
                $(".box-items").append("<span class='item cloture active' id=" + k +"_" + kk + "><span>");
            } else {
                $(".box-items").append("<span class='item' id=" + k +"_" + kk + "><span>");
            }
        };
        $(".box-items").append("<div class='clear'><div>");
    };
    $( ".box-items .item" ).click(function() {
        $(this).toggleClass('active');

        var arr = $(this).attr('id').split("_");
        if (arr[0] > 0) {$('.box-items #' + (parseInt(arr[0])-1)  + '_' + arr[1]).toggleClass('active');}
        if (arr[0] < 31) {$('.box-items #' + (parseInt(arr[0]) +1)  + '_' + arr[1]).toggleClass('active');}
        if (arr[1] > 0) {$('.box-items #' + arr[0] + '_' + (parseInt(arr[1])-1) ).toggleClass('active');}
        if (arr[1] < 31) {$('.box-items #' + arr[0] + '_' + (parseInt(arr[1])+1)) .toggleClass('active');}


        var flag = true;

        for (k=0; k<31; k++) {
            for (kk=0; kk<31; kk++) {
            if ((kk+k == 15)|| ( (k-1== kk%16)&&(kk>15))|| ( (kk-1== k%16)&&(k>15) )|| ( (kk%16 + k%16 ==13)&&(k>15) &&(kk>15))) {
                if (!$(".box-items #" + k +"_" + kk).hasClass('active')){
                    flag=false;
                };
            }
        };
        $(".box-items").append("<div class='clear'><div>");
    };

    if ((flag)&&($('.box-items .item.active').length == 60)){
        $('.you-win').fadeIn();
    }


    });
    $('.box-items .item').hover(function() {
        var arr = $(this).attr('id').split("_");
        $('.box-items .item').removeClass('cloture-hover');
        if (arr[0] > 0) {$('.box-items #' + (parseInt(arr[0])-1)  + '_' + arr[1]).addClass('cloture-hover');}
        if (arr[0] < 31) {$('.box-items #' + (parseInt(arr[0]) +1)  + '_' + arr[1]).addClass('cloture-hover');}
        if (arr[1] > 0) {$('.box-items #' + arr[0] + '_' + (parseInt(arr[1])-1) ).addClass('cloture-hover');}
        if (arr[1] < 31) {$('.box-items #' + arr[0] + '_' + (parseInt(arr[1])+1)) .addClass('cloture-hover');}
        // console.log($(this))
    })

    $('.start-button').bind('click', function() {
        $('.box-items .item').removeClass('active');$('.hello-div').fadeOut();
    });

});
