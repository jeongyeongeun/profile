//text blink
const vis = (function () {
    let stateKey,
    eventKey,
    keys = {
        hidden: "visibilitychange",
        webkitHidden: "webkitvisibilitychange",
        mozHidden: "mozvisibilitychange",
        msHidden: "msvisibilitychange"
    };
    for (stateKey in keys) {
    if (stateKey in document) {
        eventKey = keys[stateKey];
        break;
    }
    }
    return function (c) {
    if (c) document.addEventListener(eventKey, c);
    return !document[stateKey];
    }
})();
// tickerText(contents, keep, seconds, delay = 20, iterations = 0, ratio, secondsout, dev = false, pausetarget, stoptarget);
let $elements = $(".tt-holder .tt");
$(".ttt").tickerText($elements, 8, 3, 30, 1, 0.5, 2, false, "timerpause", "timerstop");

// $(function(){
//     $('#t').t({
    
//         delay:2,                   // start delay in seconds [default:0]
    
//         speed:50,                  // typing speed (ms) [default:50]
//         speed_vary:false,          // 'human like' speed variation [default:false]
    
//         beep:false,                 // beep while typing (Web Audio API) [default:false]
    
//         mistype:3,                 // mistype rate: 1:N per char [default:false]
//         locale:'en',               // keyboard layout (to fit mistype); supported: 'en' (english) or 'de' (german) [default:'en']
    
//         caret:'\u2589',            // caret content; can be html too [default:true (\u258e)]
//         blink:true,                // blink-interval in ms; if TRUE, speed*3  [default:true]
//         blink_perm:false,          // permanent blinking? if FALSE, caret blinks only on delay/pause/finish [default:false]
//         repeat:0,                  // repeat typing: if TRUE, infinite or N times [default:0]
//         tag:'span',                // wrapper tag (.t-container, .t-caret) [default:'span']
//         pause_on_click:true,       // pauses/continues typing on click/tap (elm) [default:false]
//         pause_on_tab_switch:true,  // pauses typing if window is inactive (Page Visibility API) [default:false]
    
//         // init callback (ready-to-type)
//     init:function(elm){},        
//         // typing callback
//     typing:function(elm,chr_or_elm,left,total){},
//         // finished callback
//     fin:function(elm){}          
    
//     });
    
//     });


// $("#t").t([content,],{
//     delay:0, //시작 딜레이
//     speed:50, //타이핑 속도(최소 10),ms로 표기
//     speed_vary:false, //인간이 치는것 같은 속도
//     beep:false, //삐소리
//     mistype:false, //틀리는 비율
//     caret:true,      //*caret; can be HTML; associated CSS class:
//                     //.t-caret; default (TRUE): ▎ (\u258e)*/
//     blink_perm:false, //깜빡이는 속도 delay/pause/finish
//     repeat:0, //반복 infinite or N times
//     tag:'span', //wrapper tag (.t-container, .t-caret)
//     pause_on_click:false, //클릭하면 멈춤
//     pause_on_tab_switch //탭하면 멈춤
//     :false,


// //callback
// init:function(elm){},
// typing:function(elm,chr_or_elm,left,total){},
// fin:function(elm){}
// });
//$(elm).a(content) add
//$(elm).q(content) que
//$(elm).p([true/false]) pause
//$(elm).s(ms) speed
//$(elm).b() beep
//$(elm).t_off([true]) clear
//data typing
// $(elm).data().t TRUE if initialised
// $(elm).data().is_typing typing
// $(elm).data().paused paused
// $("#t").a("<del>hello</del>")