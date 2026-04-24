// Mobile Menu
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Typing Effect
const text = "BIM Engineer | VDC Specialist | Problem Solver";
const typing = document.getElementById("typing");

let i = 0;

function typeText() {
  if (i < text.length) {
    typing.textContent += text.charAt(i);
    i++;
    setTimeout(typeText, 70);
  }
}

typeText();

// Reveal Animation
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach(item => {
    const top = item.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      item.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// Active Nav Highlight
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const top = section.offsetTop - 120;
    if (pageYOffset >= top) current = section.id;
  });

  navItems.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// Ripple Effect
document.querySelectorAll(".ripple").forEach(btn => {
  btn.addEventListener("click", function(e){
    const circle = document.createElement("span");
    circle.style.position = "absolute";
    circle.style.width = circle.style.height = "10px";
    circle.style.borderRadius = "50%";
    circle.style.background = "rgba(255,255,255,.6)";
    circle.style.left = e.offsetX + "px";
    circle.style.top = e.offsetY + "px";
    circle.style.transform = "scale(0)";
    circle.style.transition = ".6s";
    this.appendChild(circle);

    setTimeout(() => {
      circle.style.transform = "scale(20)";
      circle.style.opacity = "0";
    }, 10);

    setTimeout(() => circle.remove(), 600);
  });
});
