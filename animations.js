

ScrollTrigger.defaults({
    toggleActions: "restart pause resume pause"
  });

gsap.from(".cleft", {
    scrollTrigger: {
    trigger: "#c",
    start: "center bottom"
            
    },
    x: -400,
    duration: 1,
});

gsap.from(".eleft", {
    scrollTrigger: {
    trigger: "#e",
    toggleActions: "restart",
    start: "center bottom"
            
    },
    x: -400,
    duration: 1,
});

gsap.from(".gleft", {
    scrollTrigger: {
    trigger: "#g",
    toggleActions: "restart",
    start: "center bottom"
            
    },
    x: -400,
    duration: 1,
});

gsap.from(".hleft", {
    scrollTrigger: {
    trigger: "#h",
    toggleActions: "restart",
    start: "center bottom"
            
    },
    x: -400,
    duration: 1,
});

gsap.from(".ileft", {
    scrollTrigger: {
    trigger: "#contact",
    toggleActions: "restart",
    start: "center bottom"
            
    },
    x: -400,
    duration: 1,
});
