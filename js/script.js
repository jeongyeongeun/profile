let isScroll = false;
const nav = ".navbar";
$(function(){
    // As A jQuery Plugin
    $('#demo').gradient({
        colors: ['#a960ee', '#ff333d', '#90e0ff', '#ffcb57'],
        height: '1000'
    });

    f_scroll();

    setTimeout(function(){
        console.log(isScroll)
        if(isScroll == 0){
            location.replace('#about');
            // $('html, body').animate({
            //     scrollTop: (document.getElementById('about').getBoundingClientRect().height)
            //   }, 400);
        }
    }, 5000)

    $(window).on("scroll", f_scroll)

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
        $(window).on({
            scroll:function(){
                if ($(this).scrollTop() > 250) {
                    $("#topBtn").fadeIn();
                } else {
                    $("#topBtn").fadeOut();
                    $("#topBtn span").text("Top")
                }
            }
        })
        $("#topBtn").on("click",function() {
            $('html').animate({
                scrollTop : 0
            }, 400);
            return false;
        });





})

const f_isScroll = () => {
    let scrollY = $(window)[0].scrollY;
    return 0 < scrollY;
}

const f_scroll = () => {
    if(f_isScroll()){     //스크롤 했을 때
        isScroll = true;
        return;
    }
    isScroll = false;
}

