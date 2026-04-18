// ================= HAMBURGER MENU =================
const hamburger = document.getElementById("hamburger");
const mobileNav  = document.getElementById("mobileNav");
const mobileNavClose = document.getElementById("mobileNavClose");

function openMobileNav()  { mobileNav.classList.add("open"); hamburger.classList.add("open"); document.body.style.overflow = "hidden"; }
function closeMobileNav() { mobileNav.classList.remove("open"); hamburger.classList.remove("open"); document.body.style.overflow = ""; }

if (hamburger) hamburger.addEventListener("click", openMobileNav);
if (mobileNavClose) mobileNavClose.addEventListener("click", closeMobileNav);
document.querySelectorAll(".mobile-nav-link").forEach(link => {
    link.addEventListener("click", () => {
        closeMobileNav();
        const target = document.querySelector(link.getAttribute("href"));
        if (target) setTimeout(() => target.scrollIntoView({ behavior: "smooth" }), 300);
    });
});

// ================= CUSTOM CURSOR =================
const cursor = document.getElementById("cursor");
const cursorTrail = document.getElementById("cursorTrail");
let mx = 0, my = 0, tx = 0, ty = 0;

document.addEventListener("mousemove", e => {
    mx = e.clientX; my = e.clientY;
    if (cursor) { cursor.style.left = mx + "px"; cursor.style.top = my + "px"; }
});

(function animateTrail() {
    tx += (mx - tx) * 0.11;
    ty += (my - ty) * 0.11;
    if (cursorTrail) { cursorTrail.style.left = tx + "px"; cursorTrail.style.top = ty + "px"; }
    requestAnimationFrame(animateTrail);
})();

// ================= CANVAS PARTICLES =================
const canvas = document.getElementById("bg-canvas");
const ctx = canvas.getContext("2d");
let W = canvas.width = window.innerWidth;
let H = canvas.height = window.innerHeight;
let particles = [];

window.addEventListener("resize", () => {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
    initP();
});

function initP() {
    particles = Array.from({ length: 65 }, () => ({
        x: Math.random() * W, y: Math.random() * H,
        r: Math.random() * 1.4 + 0.3,
        vx: (Math.random() - .5) * .22,
        vy: (Math.random() - .5) * .22,
        alpha: Math.random() * .45 + .08
    }));
}
initP();

(function drawP() {
    ctx.clearRect(0, 0, W, H);
    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const d = Math.sqrt(dx*dx + dy*dy);
            if (d < 120) {
                ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(particles[j].x, particles[j].y);
                ctx.strokeStyle = `rgba(200,246,93,${.035 * (1 - d/120)})`; ctx.lineWidth = .5; ctx.stroke();
            }
        }
    }
    particles.forEach(p => {
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
        ctx.fillStyle = `rgba(200,246,93,${p.alpha})`; ctx.fill();
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
    });
    requestAnimationFrame(drawP);
})();

// ================= TYPING EFFECT =================
const words = ["Full-Stack Developer", "UI/UX Designer", "Mobile App Developer", "3D Artist", "IoT Maker", "Automation Engineer"];
let wi = 0, wj = 0, deleting = false;
const typingEl = document.querySelector(".typing");

function type() {
    if (!typingEl) return;
    const cur = words[wi];
    deleting ? wj-- : wj++;
    typingEl.textContent = cur.substring(0, wj);
    if (!deleting && wj === cur.length) { deleting = true; setTimeout(type, 1600); return; }
    if (deleting && wj === 0) { deleting = false; wi = (wi + 1) % words.length; }
    setTimeout(type, deleting ? 38 : 78);
}
type();

// ================= NAVBAR SCROLL =================
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// ================= SCROLL REVEAL =================
const revealObs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); });
}, { threshold: 0.1 });
document.querySelectorAll(".reveal").forEach(el => revealObs.observe(el));

// ================= SKILL BAR ANIMATION =================
const skillObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add("animate");
            skillObs.unobserve(e.target);
        }
    });
}, { threshold: 0.3 });
document.querySelectorAll(".skill-chip").forEach(el => skillObs.observe(el));

// ================= COUNTER ANIMATION =================
function counter(el) {
    const target = parseInt(el.getAttribute("data-target"));
    const t0 = performance.now();
    (function tick(now) {
        const p = Math.min((now - t0) / 1800, 1);
        const ease = 1 - Math.pow(1 - p, 4);
        el.textContent = Math.round(ease * target);
        if (p < 1) requestAnimationFrame(tick);
    })(t0);
}
const cntObs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { counter(e.target); cntObs.unobserve(e.target); } });
}, { threshold: 0.5 });
document.querySelectorAll(".stat-num").forEach(el => cntObs.observe(el));

// ================= 3D TILT =================
document.querySelectorAll(".tilt-card").forEach(card => {
    card.addEventListener("mousemove", e => {
        const r = card.getBoundingClientRect();
        const dx = (e.clientX - r.left - r.width/2)  / (r.width/2);
        const dy = (e.clientY - r.top  - r.height/2) / (r.height/2);
        card.style.transform = `perspective(900px) rotateY(${dx*5}deg) rotateX(${-dy*5}deg) translateZ(4px)`;
    });
    card.addEventListener("mouseleave", () => {
        card.style.transition = "transform .5s ease";
        card.style.transform = "perspective(900px) rotateY(0) rotateX(0) translateZ(0)";
    });
    card.addEventListener("mouseenter", () => { card.style.transition = "none"; });
});

// ================= SMOOTH SCROLL =================
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", e => {
        e.preventDefault();
        const t = document.querySelector(a.getAttribute("href"));
        if (t) t.scrollIntoView({ behavior: "smooth" });
    });
});

// ================= ACTIVE NAV =================
const secEls = document.querySelectorAll("section[id]");
const navAs  = document.querySelectorAll(".nav-links a");
window.addEventListener("scroll", () => {
    let cur = "";
    secEls.forEach(s => { if (window.scrollY >= s.offsetTop - 130) cur = s.id; });
    navAs.forEach(a => { a.style.color = a.getAttribute("href") === "#" + cur ? "var(--accent)" : ""; });
});

// ================= SCROLL TOP =================
const scrollBtn = document.getElementById("scrollTopBtn");
if (scrollBtn) {
    window.addEventListener("scroll", () => { scrollBtn.style.display = window.scrollY > 400 ? "flex" : "none"; });
    scrollBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

// ================= CONTACT FORM =================
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");
if (form && status) {
    form.addEventListener("submit", async e => {
        e.preventDefault();
        status.textContent = "Sending…"; status.style.color = "var(--muted)";
        const res = await fetch(form.action, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } });
        if (res.ok) {
            status.textContent = "✅ Message sent! I'll reply within 24 hours.";
            status.style.color = "var(--accent)"; form.reset();
        } else {
            status.textContent = "❌ Something went wrong. Try again.";
            status.style.color = "#f87171";
        }
    });
}
