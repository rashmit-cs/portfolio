// ================= TYPING EFFECT =================
const words = ["Software Developer", "Web Developer", "Freelancer"];

let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

// get typing element safely
const typingElement = document.querySelector(".typing");

function type() {

    // safety check (important)
    if (!typingElement) return;

    current = words[i];

    // typing / deleting logic
    if (isDeleting) {
        j--;
    } else {
        j++;
    }

    typingElement.textContent = current.substring(0, j);

    // word complete → start deleting
    if (!isDeleting && j === current.length) {
        isDeleting = true;
        setTimeout(type, 1000);
        return;
    }

    // word deleted → move to next
    if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % words.length;
    }

    // typing speed
    setTimeout(type, isDeleting ? 50 : 100);
}

// start typing
type();


// ================= SCROLL REVEAL ANIMATION =================
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.2
});

// observe all hidden elements
document.querySelectorAll(".hidden").forEach(el => {
    observer.observe(el);
});


// ================= SCROLL TO TOP BUTTON =================
const scrollBtn = document.getElementById("scrollTopBtn");

// safety check
if (scrollBtn) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {
            scrollBtn.style.display = "flex";
        } else {
            scrollBtn.style.display = "none";
        }

    });

    scrollBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


// ================= SMOOTH SCROLL NAVIGATION =================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        // safety check
        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});
