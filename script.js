// ================= HAMBURGER MENU =================
const hamburger = document.getElementById("hamburger");
const mobileNav = document.getElementById("mobileNav");
const mobileNavClose = document.getElementById("mobileNavClose");

function openMobileNav() {
    mobileNav.classList.add("open");
    hamburger.classList.add("open");
    document.body.style.overflow = "hidden";
}

function closeMobileNav() {
    mobileNav.classList.remove("open");
    hamburger.classList.remove("open");
    document.body.style.overflow = "";
}

if (hamburger) hamburger.addEventListener("click", openMobileNav);
if (mobileNavClose) mobileNavClose.addEventListener("click", closeMobileNav);

document.querySelectorAll(".mobile-nav-link").forEach(link => {
    link.addEventListener("click", () => {
        closeMobileNav();
        const target = document.querySelector(link.getAttribute("href"));
        if (target) setTimeout(() => target.scrollIntoView({ behavior: "smooth" }), 300);
    });
});



const cursor = document.getElementById("cursor");
const cursorTrail = document.getElementById("cursorTrail");

let mouseX = 0, mouseY = 0;
let trailX = 0, trailY = 0;

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (cursor) {
        cursor.style.left = mouseX + "px";
        cursor.style.top = mouseY + "px";
    }
});

function animateTrail() {
    trailX += (mouseX - trailX) * 0.12;
    trailY += (mouseY - trailY) * 0.12;
    if (cursorTrail) {
        cursorTrail.style.left = trailX + "px";
        cursorTrail.style.top = trailY + "px";
    }
    requestAnimationFrame(animateTrail);
}
animateTrail();


// ================= CANVAS PARTICLE BACKGROUND =================
const canvas = document.getElementById("bg-canvas");
const ctx = canvas.getContext("2d");

let W = canvas.width = window.innerWidth;
let H = canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
    initParticles();
});

const NUM_PARTICLES = 70;
let particles = [];

function initParticles() {
    particles = [];
    for (let i = 0; i < NUM_PARTICLES; i++) {
        particles.push({
            x: Math.random() * W,
            y: Math.random() * H,
            r: Math.random() * 1.5 + 0.3,
            vx: (Math.random() - 0.5) * 0.25,
            vy: (Math.random() - 0.5) * 0.25,
            alpha: Math.random() * 0.5 + 0.1
        });
    }
}

initParticles();

function drawParticles() {
    ctx.clearRect(0, 0, W, H);

    // Draw connecting lines
    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 130) {
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.strokeStyle = `rgba(200,246,93,${0.04 * (1 - dist / 130)})`;
                ctx.lineWidth = 0.5;
                ctx.stroke();
            }
        }
    }

    // Draw particles
    particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200,246,93,${p.alpha})`;
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;
    });

    requestAnimationFrame(drawParticles);
}

drawParticles();


// ================= TYPING EFFECT =================
const words = ["Software Developer", "Web Developer", "UI/UX Designer", "Freelancer"];
let i = 0, j = 0, isDeleting = false;
const typingEl = document.querySelector(".typing");

function type() {
    if (!typingEl) return;
    const current = words[i];
    isDeleting ? j-- : j++;
    typingEl.textContent = current.substring(0, j);

    if (!isDeleting && j === current.length) {
        isDeleting = true;
        setTimeout(type, 1400);
        return;
    }
    if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % words.length;
    }
    setTimeout(type, isDeleting ? 40 : 80);
}

type();


// ================= NAVBAR SCROLL =================
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


// ================= SCROLL REVEAL =================
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));


// ================= COUNTER ANIMATION =================
function animateCounter(el) {
    const target = parseInt(el.getAttribute("data-target"));
    const duration = 1800;
    const start = performance.now();

    function update(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 4);
        el.textContent = Math.round(ease * target);
        if (progress < 1) requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
}

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll(".stat-num").forEach(el => counterObserver.observe(el));


// ================= 3D TILT EFFECT =================
document.querySelectorAll(".tilt-card").forEach(card => {
    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = (e.clientX - cx) / (rect.width / 2);
        const dy = (e.clientY - cy) / (rect.height / 2);
        card.style.transform = `perspective(800px) rotateY(${dx * 5}deg) rotateX(${-dy * 5}deg) translateZ(4px)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "perspective(800px) rotateY(0) rotateX(0) translateZ(0)";
        card.style.transition = "transform 0.5s ease";
    });

    card.addEventListener("mouseenter", () => {
        card.style.transition = "none";
    });
});


// ================= SMOOTH SCROLL =================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) target.scrollIntoView({ behavior: "smooth" });
    });
});


// ================= NAVBAR ACTIVE LINK =================
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(sec => {
        if (window.scrollY >= sec.offsetTop - 120) {
            current = sec.getAttribute("id");
        }
    });
    navLinks.forEach(link => {
        link.style.color = link.getAttribute("href") === "#" + current ? "var(--accent)" : "";
    });
});


// ================= SCROLL TO TOP =================
const scrollBtn = document.getElementById("scrollTopBtn");

if (scrollBtn) {
    window.addEventListener("scroll", () => {
        scrollBtn.style.display = window.scrollY > 400 ? "flex" : "none";
    });

    scrollBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}


// ================= CONTACT FORM =================
const form = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

if (form && formStatus) {
    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const data = new FormData(form);
        const res = await fetch(form.action, {
            method: "POST",
            body: data,
            headers: { "Accept": "application/json" }
        });
        if (res.ok) {
            formStatus.textContent = "✅ Message sent! I'll reply within 24 hours.";
            formStatus.style.color = "var(--accent)";
            form.reset();
        } else {
            formStatus.textContent = "❌ Something went wrong. Try again.";
            formStatus.style.color = "#f87171";
        }
    });
}

// Add data-index to project info panels for the number decoration
document.querySelectorAll(".project-item").forEach((item, idx) => {
    const info = item.querySelector(".project-info");
    if (info) info.setAttribute("data-index", String(idx + 1).padStart(2, "0"));
});
