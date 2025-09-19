let menu =document.querySelector(".navbar h2")
let closebtn = document.querySelector(".menubar i")

var tl = gsap.timeline()

tl.to(".menubar",{
    right:0,
    duration:0.3
})
tl.from(".menubar h4",{
    x:150,
     duration:0.3,
    stagger:0.3,
    opacity:0
})

tl.from(".menubar i",{
    opacity:0
})
tl.pause()

menu.addEventListener("click",function(){
    tl.play()
})
closebtn.addEventListener("click", function(){
    tl.reverse()
})

gsap.to(".page1 img",{
    y:1000,
    x:360,
    rotate:360,
    scale:8,
    scrollTrigger:{
        trigger:(".page1 img"),
        scroll:"body",
        // markers:true,
        start:"top 1%",
        end:"top -80%",
        scrub:2
     
    }
})
