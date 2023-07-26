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

        const canvas = document.getElementById("particles");
        if (canvas.getContext){
            var ctx = canvas.getContext('2d');
            // drawing code here
        } else {
            console.log("no")
            // canvas-unsupported code here
        }
        // const ctx = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        const particlesArray = [];
        
        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 5 + 1;
                this.speedX = Math.random() * 3 - 1.5;
                this.speedY = Math.random() * 3 - 1.5;
                this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
            }
        
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
        
                if (this.size > 0.2) this.size -= 0.1;
                if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
                if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
            }
        
            draw() {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();
            }
        }
        
        function handleParticles() {
            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].update();
                particlesArray[i].draw();
        
                if (particlesArray[i].size <= 0.2) {
                    particlesArray.splice(i, 1);
                    i--;
                }
            }
        }
        
        function createParticles() {
            if (particlesArray.length < 100) {
                particlesArray.push(new Particle());
            }
        }
        
        function animateParticles() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            handleParticles();
            createParticles();
            requestAnimationFrame(animateParticles);
        }
        
        animateParticles();
        
        window.addEventListener("resize", () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });

        function lerp(start, end, amount) {
            return (1-amount)*start+amount*end
        }

    const cursor = document.createElement('div');
    cursor.className = 'cursor';

    const cursorF = document.createElement('div');
    cursorF.className = 'cursor-f';
    let cursorX = 0;
    let cursorY = 0;
    let pageX = 0;
    let pageY = 0;
    let size = 8;
    let sizeF = 36;
    let followSpeed = .16;

    document.body.appendChild(cursor);
    document.body.appendChild(cursorF);

    cursor.style.setProperty('--size', size+'px');
    cursorF.style.setProperty('--size', sizeF+'px');

    if ('ontouchstart' in window) {
        cursor.style.display = 'none';
        cursorF.style.display = 'none';
    }


    window.addEventListener('mousemove', function(e) {
        pageX = e.clientX;
        pageY = e.clientY;
        cursor.style.left = e.clientX-size/2+'px';
        cursor.style.top = e.clientY-size/2+'px';
    });

    function loop() {
        cursorX = lerp(cursorX, pageX, followSpeed);
        cursorY = lerp(cursorY, pageY, followSpeed);
        cursorF.style.top = cursorY - sizeF/2 + 'px';
        cursorF.style.left = cursorX - sizeF/2 + 'px';
        requestAnimationFrame(loop);
    }

    loop();

    let startY;
    let endY;
    let clicked = false;

    function mousedown(e) {
        gsap.to(cursor, {scale: 4.5});
        gsap.to(cursorF, {scale: .4});

        clicked = true;
        startY = e.clientY || e.touches[0].clientY || e.targetTouches[0].clientY;
    }

    function mouseup(e) {
        gsap.to(cursor, {scale: 1});
        gsap.to(cursorF, {scale: 1});

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




