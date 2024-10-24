gsap.to("h1", {
    text:"PORTFOLIO",
    duration:2,
    repeat:-1,
    repeatdelay:2,
    ease: "power1.in",
    yoyo:true,
    yoyoduration:4
})
gsap.from("h3", {x:300, opacity:0, delay:1, duration:1});
gsap.from("p", {x:300, opacity:0, delay:2, duration:2});

