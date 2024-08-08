gsap.from(".nav h2",{
    x:-40,
    opacity:0,
    duration:1,
    delay:1,   
})

gsap.from("select",{
    x:-40,
    opacity:0,
    duration:1,
    delay:1,   
})

gsap.from("#search",{
    x:-40,
    opacity:0,
    duration:1,
    delay:1,   
})

gsap.from(".icon",{
    x:-40,
    opacity:0,
    duration:1,
    delay:1,
})

gsap.from(".part2",{
    x:40,
    opacity:0,
    duration:1,
    delay:1,

})

gsap.from(".mot-line h1",{
    opacity:0,
    duration:1,
    delay:1,
})

gsap.from(".box1",{
    y:-20,
    opacity:0,
    duration:1,
    delay:1,
})

gsap.from(".box2",{
    y:20,
    opacity:0,
    duration:1,
    delay:1,
})
gsap.to(".page2 h1", {
    transform:"translateX(-110%)",
    scrollTrigger: {
        trigger: ".page2",
        scroller: "body",
        start: "top 0%",
        end: "top -100%",
        scrub: 2,
        pin: true
    }
});


gsap.from('.box0',{
    x:-1250,
    duration:0.5,
    delay:0.5,
    scrollTrigger:{
        trigger:".box0",
        scroller:"body",
        start:"top 90%",
        end:"top 0%",
        scrub:2,
    }    
})

gsap.from('.box00',{
    x:1250,
    duration:0.5,
    delay:0.5,
    scrollTrigger:{
        trigger:".box00",
        scroller:"body",
        start:"top 120%",
        end:"top 60%",
        scrub:2,
    }    
})

//next box

gsap.from('.box9',{
    x:-1250,
    duration:0.5,
    delay:0.5,
    scrollTrigger:{
        trigger:".box9",
        scroller:"body",
        start:"top 90%",
        end:"top 0%",
        scrub:2,
    }    
})

gsap.from('.box99',{
    x:1250,
    duration:0.5,
    delay:0.5,
    scrollTrigger:{
        trigger:".box99",
        scroller:"body",
        start:"top 120%",
        end:"top 60%",
        scrub:2,
    }    
})

