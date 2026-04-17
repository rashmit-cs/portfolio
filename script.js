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


// ================= NAVBAR ACTIVE LINK (NEW 🔥) =================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }
    });

});


// ================= FORM SUBMIT WITHOUT REDIRECT (NEW 🔥) =================
const form = document.getElementById("contact-form");
const status = document.createElement("p");

if (form) {

    form.appendChild(status);

    form.addEventListener("submit", async function(e) {

        e.preventDefault();

        const data = new FormData(form);

        const response = await fetch(form.action, {
            method: "POST",
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            status.innerHTML = "✅ Message sent successfully!";
            status.style.color = "#38bdf8";
            form.reset();
        } else {
            status.innerHTML = "❌ Something went wrong. Try again.";
            status.style.color = "red";
        }

    });

}


// ================= CARD CLICK EFFECT (NEW 🔥) =================
document.querySelectorAll(".card").forEach(card => {

    card.addEventListener("click", () => {

        const link = card.querySelector("a");

        if (link) {
            window.open(link.href, "_blank");
        }

    });

});


// ================= HERO PARALLAX EFFECT (NEW 🔥) =================
window.addEventListener("scroll", () => {

    const hero = document.querySelector(".hero");

    if (hero) {
        hero.style.backgroundPositionY = window.scrollY * 0.5 + "px";
    }

});
