let isScroll = false;

// window.addEventListener("wheel", function(e){
//     e.preventDefault();
// },{passive : false});

$(function(){
    // As A jQuery Plugin
    $('#demo').gradient({
        colors: ['#a960ee', '#ff333d', '#90e0ff', '#ffcb57'],
        height: '1000'
    });

    // f_scroll();

    setTimeout(function(){
        console.log(isScroll)
        if(isScroll == 0){
            console.log("1")
            page = 2
            var posTop =(page-1) * $(window).height();
            mHtml.animate({scrollTop : posTop}, 500);
        }
    }, 5000)

    // $(window).on("scroll", f_scroll)

        //#topBtn 마우스오버시 글씨바뀜
        $("#topBtn").on({
            mousedown: function(){
                $("span",this).text("슝")
            },
            mouseover: function(){
                $("span",this).text("슝")
            },
            mouseout: function(){
                $("span",this).text("Top")
            }
        })
        const mHtml = $("html");
        var page = 1;
        mHtml.animate({scrollTop : 0},100);
        $(window).on({
            scroll:function(){
                if ($(this).scrollTop() > 250) {
                    $("#topBtn").fadeIn();
                } else {
                    $("#topBtn").fadeOut();
                    $("#topBtn span").text("Top")
                }
                var elem = $('.chart__bar');
    
                elem.each(function () {
            
                var isAnimate = $(this).data('animate');
                var elemOffset = $(this).offset().top;
                var scrollPos = $(window).scrollTop();
                var wh = $(window).height();
            
                if(scrollPos > elemOffset - wh + (wh / 2)-140){
                    $(this).addClass(isAnimate);
                }else{
                    $(this).removeClass(isAnimate);
                }
                });
            },
            wheel: function(e){
                if(mHtml.is(":animated")) return;
                if(e.originalEvent.deltaY > 0) {
                    isScroll = true;
                    if(page == 12) return;
                    page++;
                } else if(e.originalEvent.deltaY < 0) {
                    if(page == 1) return;
                    page--;
                } 
                if(page == 1) isScroll = false;

                // if(page == 2) {
                //     console.log("1")
                    
                //     var isAnimate = $(this).data('animate');
                //     $(this).addClass(isAnimate);
                // }
                var posTop =(page-1) * $(window).height();
                mHtml.animate({scrollTop : posTop}, 500);
            }
        })
        $("#topBtn").on("click",function() {
            page = 1;
            isScroll = false;
            $('html').animate({
                scrollTop : 0
            }, 600);
            $("#topBtn span").text("슈웅");
        });
        // $(".chart__bar").each(function () {
        //     var isAnimate = $(this).data('animate');
        
        //     if(page =2 ){
        //         $(this).addClass(isAnimate);
        //     }
        //     })

        // 텍스트 쪼개서 서로 다른 색 나오게 하기
        $('.text').html(function(i, html) {
            let chars = $.trim(html).split("");
        
            return '<span>' + chars.join('</span><span>') + '</span>';
        });
        

        
        




})
