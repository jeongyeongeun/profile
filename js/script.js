$(function(){
    // As A jQuery Plugin
$('#demo').gradient({
    colors: ['#a960ee', '#ff333d', '#90e0ff', '#ffcb57'],
    height: '1000'
    });
    //시간지나면 스크롤내리기
    let lnb3 = $(".navbar").offset().top; // 0

    // $(window).on({
    //     load : setTimeout(function(){
    //         $(this).scrollTop(900)
    //     },3000),
    //     scroll : function(){
    //         let disTop = $(window).scrollTop();
    //         if(lnb3 <= disTop){ 
    //             console.log("22")
    //             $(window).off("load")
    //             console.log("됨?")
    //             return false;
    //         }else{
    //             // $(".option_wrap").removeClass('fixN');
    //         }
            
    //     }
    // });
    $(window).on("load",function(){
        console.log(1)
    })
    setTimeout(function(){
        let disTop = $(window).scrollTop();
        location.href = "#about"
        if(lnb3<disTop){
            console.log("???")
            return false;
        }
    },16000)

        // $(window).on("scroll",function(){
        //     let disTop = $(window).scrollTop();
        //     if(lnb3 <= disTop){ 
        //         console.log("22")
        //         setTimeout(function(){
        //             $(window).scrollTop()
        //         },10000000)
        //         console.log("됨?")
        //         return false;
        //     }
        // })

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
                if ($(this).scrollTop() > 900) {
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