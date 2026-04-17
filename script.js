* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* 🔥 IMPORTANT FIX FOR HIRE ME BUTTON */
html {
    scroll-behavior: smooth;
    scroll-padding-top: 90px;
}

body {
    font-family: 'Poppins', sans-serif;
    background: #0a0f1c;
    color: #e2e8f0;
    line-height: 1.6;
}

/* ================= NAVBAR ================= */
.navbar {
    position: fixed;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 5%;
    background: rgba(10,15,28,0.7);
    backdrop-filter: blur(10px);
    z-index: 1000;
}

.navbar h2 {
    color: #38bdf8;
}

.navbar a {
    margin-left: 20px;
    color: #cbd5f5;
    text-decoration: none;
    transition: 0.3s;
}

.navbar a:hover {
    color: #38bdf8;
}

/* ================= HERO ================= */
.hero {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 5%;
    text-align: center;
    position: relative;
    overflow: hidden;
}

/* Glow background */
.hero::before {
    content: "";
    position: absolute;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(99,102,241,0.3), transparent);
    top: 20%;
    left: 10%;
    filter: blur(80px);
    animation: moveGlow 8s infinite alternate;
}

@keyframes moveGlow {
    0% { transform: translate(0,0); }
    100% { transform: translate(100px, 50px); }
}

/* Hero text */
.hero h1 {
    font-size: 3rem;
    max-width: 900px;
    font-weight: 700;

    background: linear-gradient(90deg, #38bdf8, #6366f1, #8b5cf6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    animation: glowText 3s ease-in-out infinite alternate;
}

@keyframes glowText {
    0% { text-shadow: 0 0 10px rgba(56,189,248,0.3); }
    100% { text-shadow: 0 0 25px rgba(139,92,246,0.6); }
}

.typing {
    color: #38bdf8;
    margin: 10px 0;
    font-size: 1.2rem;
}

/* 🔥 NEW SUBTITLE */
.subtitle {
    margin-top: 10px;
    color: #94a3b8;
    font-size: 1rem;
    max-width: 500px;
}

/* ================= BUTTON ================= */
.btn {
    background: linear-gradient(90deg, #38bdf8, #6366f1);
    padding: 12px 26px;
    border-radius: 30px;
    color: white;
    text-decoration: none;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 500;

    box-shadow: 0 0 15px rgba(99,102,241,0.4);
}

.btn:hover {
    transform: scale(1.1);
    box-shadow: 0 0 30px rgba(99,102,241,0.8);
}

/* ================= SECTIONS ================= */
.section {
    padding: 100px 5%;
    max-width: 1200px;
    margin: auto;
}

.section h2 {
    margin-bottom: 20px;
    color: #38bdf8;
}

/* 🔥 CONTACT FIX */
#contact {
    scroll-margin-top: 100px;
}

/* ================= STATS SECTION ================= */
.stats {
    display: flex;
    justify-content: space-around;
    padding: 60px 5%;
    text-align: center;
}

.stat-box h2 {
    color: #38bdf8;
    font-size: 2rem;
}

.stat-box p {
    color: #94a3b8;
    font-size: 0.9rem;
}

/* ================= GRID ================= */
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
    align-items: stretch;
}

/* ================= CARDS ================= */
.card {
    background: rgba(255,255,255,0.05);
    padding: 20px;
    border-radius: 10px;
    transition: all 0.3s ease;
    border: 1px solid rgba(255,255,255,0.05);
    overflow: hidden;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    position: relative;
}

.card:hover {
    transform: translateY(-8px);
    background: rgba(255,255,255,0.08);
    box-shadow: 0 10px 25px rgba(0,0,0,0.4);
}

/* ================= PROJECT IMAGE ================= */
.card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 12px;
    transition: transform 0.3s ease;
}

.card:hover img {
    transform: scale(1.05);
}

/* 🔥 OVERLAY EFFECT */
.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 200px;

    background: rgba(0,0,0,0.6);
    color: white;

    display: flex;
    align-items: center;
    justify-content: center;

    opacity: 0;
    transition: 0.3s;
    border-radius: 8px;
}

.card:hover .overlay {
    opacity: 1;
}

/* ================= PROJECT TEXT ================= */
.card h3 {
    margin-bottom: 8px;
}

.card p {
    flex-grow: 1;
}

/* ================= PROJECT LINKS ================= */
.links {
    margin-top: 15px;
}

.links a {
    display: inline-block;
    margin-right: 10px;
    margin-top: 5px;
    padding: 6px 12px;
    border-radius: 6px;
    background: rgba(255,255,255,0.08);
    color: #38bdf8;
    text-decoration: none;
    font-size: 0.9rem;
    transition: 0.3s;
}

.links a:hover {
    background: #38bdf8;
    color: black;
}

/* ================= CTA SECTION ================= */
.cta {
    text-align: center;
    padding: 80px 5%;
}

.cta h2 {
    margin-bottom: 10px;
}

.cta p {
    color: #94a3b8;
    margin-bottom: 20px;
}

/* ================= FORM ================= */
form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    max-width: 500px;
    margin: auto;
}

input, textarea {
    padding: 10px;
    border-radius: 8px;
    border: none;
    background: rgba(255,255,255,0.05);
    color: white;
    outline: none;
}

textarea {
    min-height: 120px;
}

.extra-contact {
    margin-top: 20px;
    text-align: center;
}

/* ================= ANIMATION ================= */
.hidden {
    opacity: 0;
    transform: translateY(40px);
    transition: all 0.6s ease;
}

.show {
    opacity: 1;
    transform: translateY(0);
}

/* ================= SCROLL BUTTON ================= */
#scrollTopBtn {
    position: fixed;
    bottom: 30px;
    right: 30px;

    background: linear-gradient(90deg, #38bdf8, #6366f1);
    color: white;

    border: none;
    border-radius: 50%;
    width: 45px;
    height: 45px;

    font-size: 18px;
    cursor: pointer;

    display: none;

    align-items: center;
    justify-content: center;

    box-shadow: 0 0 15px rgba(99,102,241,0.5);
    transition: all 0.3s ease;

    z-index: 999;
}

#scrollTopBtn:hover {
    transform: scale(1.1);
    box-shadow: 0 0 25px rgba(99,102,241,0.8);
}

/* ================= MOBILE ================= */
@media (max-width: 768px) {

    .navbar {
        flex-direction: column;
        gap: 10px;
        text-align: center;
    }

    .navbar nav {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .hero {
        height: auto;
        padding: 120px 5% 60px;
    }

    .hero h1 {
        font-size: 2rem;
    }

    .card img {
        height: 180px;
    }

    .stats {
        flex-direction: column;
        gap: 20px;
    }

    .section {
        padding: 70px 5%;
    }
}

/* ================= SMALL MOBILE ================= */
@media (max-width: 480px) {

    .hero h1 {
        font-size: 1.6rem;
    }

    .typing {
        font-size: 1rem;
    }

    .btn {
        padding: 10px 18px;
        font-size: 0.9rem;
    }

    .card img {
        height: 160px;
    }

}
