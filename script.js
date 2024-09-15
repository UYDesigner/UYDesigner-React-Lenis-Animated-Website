// Initialize Lenis
const lenis = new Lenis();

lenis.on('scroll', (e) => {
    console.log(e);
});

// Request Animation Frame for Lenis
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// GSAP animations
document.querySelectorAll(".elem").forEach(elem => {
    let image = elem.querySelector("img");
    let ti = gsap.timeline();
    let xTransform = gsap.utils.random(-100, 100);

    // Set initial state
    ti.set(image, {
        transformOrigin: xTransform < 0 ? '0%' : '100%',
        scale: 1 // Ensure scale is initially 1
    }, "start")
    .to(image, {
        scale: 0,
        ease: "none",
        scrollTrigger: {
            trigger: image,
            start: "top top",
            end: "bottom top",
            scrub: true
        }
    }, "start")
    // .to(elem, {
    //     xPercent: xTransform,
    //     ease: "none",
    //     scrollTrigger: {
    //         trigger: image,
    //         start: "top bottom",
    //         end: "bottom top",
    //         scrub: true
    //     }
    // }, "start");
});

// Ensure ScrollTrigger is updated
window.addEventListener('load', () => {
    ScrollTrigger.refresh();
});
