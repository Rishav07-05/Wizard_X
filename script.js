// Animating First Page 

function page1Animation(){
    var t1 = gsap.timeline()

t1.from("nav h1 , nav h4, nav button", {
    y: -30,
    duration:.5,
    delay: .4,
    opacity:0,
    stagger:0.13
})


t1.from(".center-part1 h1",{
    x:-200,
    opacity:0,
    duration:0.5
})
t1.from(".center-part1 p",{
    x:-100,
    opacity:0,
    duration:0.4
})

t1.from(".center-part1 button",{
    opacity:0
})

t1.from(".center-part2 img",{
    opacity:0,
    duration:.5,
    x:200
}, "-=.8")


t1.from(".section1bottom img" , {
    opacity:0,
    y:40,
    stagger:0.1,
    duration:.4
})
}

page1Animation()


// Animating Second Page 

function page2Animation(){
    let t2 = gsap.timeline({
        scrollTrigger : {
                    trigger: ".section2",
                    scroller:"body",
                    // markers:true,
                    start:"top 50%",
                    end:"top 0",
                    scrub:2
                }
    })
    
    t2.from(".services" , {
        y:30,
        opacity:0,
        duration:.5
    })
    
    t2.from(".elem.line1.left",{
        x:-300,
        duration:.5,
        opacity:0,
    },"align")
    
    t2.from(".elem.line1.right",{
        x:300,
        duration:.5,
        opacity:0,
    },"align")
    
    t2.from(".elem.line2.left",{
        x:-300,
        duration:.5,
        opacity:0,
    },"alignSecond")
    
    t2.from(".elem.line2.right",{
        x:300,
        duration:.5,
        opacity:0,
    },"alignSecond")
}

page2Animation()


// Animating Svg 

function animateSvg(){
    let initialPath = `M 10 100 Q 500 100 990 100`
let finalPath = `M 10 100 Q 500 100 990 100`

let end = document.querySelector(".end")

end.addEventListener("mouseenter" , function(dets){
    initialPath = `M 10 100 Q ${dets.x} ${dets.y}  990 100`

    gsap.to("svg path",{
        attr:{d: initialPath},
        duration:.7,
        ease: "power3.out"
    })
})

end.addEventListener("mouseleave", function(){
    gsap.to("svg path" ,{
        attr:{d: finalPath},
        duration:.7,
        ease:"elastic.out(1.6,0.09)"
    })
})
}

animateSvg()



// Animating Playball

function playball(){
    let Playball = document.querySelector(".playball")
let body = document.querySelector("body")

body.addEventListener("mousemove" , function(dets){
    gsap.to(".playball",{
        x:`${dets.x}`,
        y:`${dets.y}`,
        duration:.3
        
    })
})
}

playball()


// Animating All Navbar Elements 

function animateNav(){
    let h4 = document.querySelectorAll('nav h4')
    h4.forEach(function(h4){
    let underline = document.createElement(`span`);
    h4.appendChild(underline);
    h4.addEventListener('mouseenter',function(){
        gsap.to(underline , {
            width: "100%",
            duration:.2,
            ease: "power2.out"
        });
    h4.addEventListener('mouseleave', function() {
        gsap.to(underline, {
            width: '0%', 
            duration: 0.3,
            ease: 'power2.in' });
        });
    })
});
}

animateNav()

