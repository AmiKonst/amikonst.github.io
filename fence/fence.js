// PLUSO
    (function() {
        if (window.pluso)
            if (typeof window.pluso.start == "function") return;
        
        if (window.ifpluso == undefined) {
            window.ifpluso = 1;
            var d = document, 
                s = d.createElement('script'), 
                g = 'getElementsByTagName';
            s.type = 'text/javascript'; 
            s.charset='UTF-8'; 
            s.async = true;
            s.src = ('https:' == window.location.protocol ? 'https' : 'http')  + '://share.pluso.ru/pluso-like.js';
            var h = d[g]('body')[0];
            h.appendChild(s);
        }
    })();
//

// PROTOTYPE
    String.prototype.repeat = function( num ) {
        return new Array( num + 1 ).join( this );
    }
//

$( document ).ready(function() {
    var w = 35;
    // Формируем забор
    var w1 = Math.floor(w / 2); // 15
    var w2 = Math.ceil(w / 2);  // 16

    var line = "<div class='line'>" + "<span class='item'></span>".repeat(w) + '</div>';
    $(".box-items .line-container")[0].innerHTML = line.repeat(w)

    for (k = 0; k < w; k++) {
        for (kk = 0; kk < w; kk++) {
            if (
                (
                    (kk + k == w1)
                ) || ( 
                    (k - 1 == kk % w2) && (kk > w1)
                ) || ( 
                    (kk - 1 == k % w2) && (k > w1)
                ) || (
                    (kk % w2 + k % w2 == (w1 - 2)) && (k > w1) && (kk > w1)
                )
            ) {
                $(".box-items").find('.line:nth-child(' + (k + 1) + ') .item:nth-child(' + (kk + 1) + ')').addClass('active').addClass('cloture')
            }
        };
    };
    $(".box-items").find('.line:nth-child(18) .item:nth-child(18)').addClass('center')
    $( ".box-items .item" ).click(function() {
        // var id = $(this).index();
        // var parent_id = $(this).parent().index();

        // if (id > 0)
        //     $(this).parent().find('.item:nth-child(' + (id) + ')').toggleClass('active');
        // if (id < w - 1)
        //     $(this).parent().find('.item:nth-child(' + (id + 2) + ')').toggleClass('active');
        // if (parent_id > 0)
        //     $(this).closest('.line-container').find('.line:nth-child(' + (parent_id) + ') .item:nth-child(' + (id + 1) + ')').toggleClass('active');
        // if (parent_id < w - 1)
        //     $(this).closest('.line-container').find('.line:nth-child(' + (parent_id + 2) + ') .item:nth-child(' + (id + 1) + ')').toggleClass('active');
        $('.cloture-hover').toggleClass('active');
        $(this).toggleClass('active');


        if (
            ($(".box-items .cloture").length == $(".box-items .active.cloture").length) &&
            ($(".box-items .active").length == $(".box-items .active.cloture").length)
        ) {
            $('.you-win').fadeIn();
        }
    });


    $('.box-items .item').hover(function() {
        $('.box-items .item').removeClass('cloture-hover');
        var id = $(this).index();
        var parent_id = $(this).parent().index();

        if ((id > 0) && (($('.item.center.active').length == 0) || (Math.random() > 0.5)))
            $(this).parent().find('.item:nth-child(' + (id) + ')').toggleClass('cloture-hover');
        if ((id < w - 1) && (($('.item.center.active').length == 0) || (Math.random() > 0.5)))
            $(this).parent().find('.item:nth-child(' + (id + 2) + ')').toggleClass('cloture-hover');
        if ((parent_id > 0) && (($('.item.center.active').length == 0) || (Math.random() > 0.5)))
            $(this).closest('.line-container').find('.line:nth-child(' + (parent_id) + ') .item:nth-child(' + (id + 1) + ')').toggleClass('cloture-hover');
        if ((parent_id < w - 1) && (($('.item.center.active').length == 0) || (Math.random() > 0.5)))
            $(this).closest('.line-container').find('.line:nth-child(' + (parent_id + 2) + ') .item:nth-child(' + (id + 1) + ')').toggleClass('cloture-hover');
    })

    $('.start-button').bind('click', function() {
        $('.box-items .item').removeClass('active');
        $('.hello-div').fadeOut();
    });

});
