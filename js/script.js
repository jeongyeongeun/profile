let isScroll = false;


$(function(){
    Splitting();

        const mHtml = $("html");
        var page = 1;
        mHtml.animate({scrollTop : 0},100);
        $(window).on({
            scroll:function(){
                if ($(this).scrollTop() > 250) {
                    $("#topBtn").fadeIn();
                    $(".notion").addClass('on')
                } else {
                    $("#topBtn").fadeOut();
                    $(".notion").removeClass('on')
                }
                var elem = $('.anim');
    
                elem.each(function () {
            
                var isAnimate = $(this).data('animate');
                var elemOffset = $(this).offset().top;
                var scrollPos = $(window).scrollTop();
                var wh = $(window).height();
            
                if(scrollPos > elemOffset - wh + (wh / 2)-400){
                    $(this).addClass(isAnimate);
                }else{
                    $(this).removeClass(isAnimate);
                }
                });
            },
            load: function(){
                $("#load").fadeOut();
            }
        })

        $("#topBtn").on("click",function() {
            page = 1;
            isScroll = false;
            $('html').animate({
                scrollTop : 0
            }, 600);
        });

    const cursor = document.createElement('div');
    cursor.className = 'cursor';

    let pageX = 0;
    let pageY = 0;
    let size = 8;

    document.body.appendChild(cursor);

    cursor.style.setProperty('--size', size+'px');

    if ('ontouchstart' in window) {
        cursor.style.display = 'none';
    }


    window.addEventListener('mousemove', function(e) {
        pageX = e.clientX;
        pageY = e.clientY;
        cursor.style.left = e.clientX-size/2+'px';
        cursor.style.top = e.clientY-size/2+'px';
    });

    let startY;
    let endY;
    let clicked = false;

    function mousedown(e) {
        gsap.to(cursor, {scale: 4.5});

        clicked = true;
        startY = e.clientY || e.touches[0].clientY || e.targetTouches[0].clientY;
    }

    function mouseup(e) {
        gsap.to(cursor, {scale: 1});

    endY = e.clientY || endY;
        if (clicked && startY && Math.abs(startY - endY) >= 40) {
            go(!Math.min(0, startY - endY)?1:-1);
            clicked = false;
            startY = null;
            endY = null;
        }
    }
    window.addEventListener('mousedown', mousedown, false);
    window.addEventListener('touchstart', mousedown, false);
    window.addEventListener('touchend', mouseup, false);
    window.addEventListener('mouseup', mouseup, false);

})




