// const navContainer = document.getElementById("nav-container");
// const footer = document.getElementById("footer");
// const homeSection = document.getElementById("home");

// document.addEventListener("scroll", () => {
//     if (window.scrollY > homeSection.offsetHeight) {
//         navContainer.style.display = "block";
//         footer.style.display = "block";
//     } else {
//         navContainer.style.display = "none";
//         footer.style.display = "none";
//     }
// });

document.addEventListener('DOMContentLoaded', function () {
    AOS.init();
});

gsap.from(".welcome__student-img svg", {
    duration: 1,
    x: -200,
    opacity: 0,
    ease: "power3.out",
});

