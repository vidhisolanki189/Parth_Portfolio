// Mobile Menu
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.onclick = () => navLinks.classList.toggle("show");

// Typing
const typing = document.getElementById("typing");
const words = "BIM Engineer | VDC Specialist | Problem Solver";
let i = 0;

function type(){
  if(i < words.length){
    typing.textContent += words.charAt(i);
    i++;
    setTimeout(type, 55);
  }
}
type();

// Reveal Scroll
const revealItems = document.querySelectorAll(".reveal");

function reveal(){
  revealItems.forEach(el=>{
    const top = el.getBoundingClientRect().top;
    if(top < window.innerHeight - 80){
      el.classList.add("show");
    }
  });
}
window.addEventListener("scroll", reveal);
reveal();

// Active Nav
const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", ()=>{
  let current = "";

  sections.forEach(sec=>{
    if(pageYOffset >= sec.offsetTop - 140){
      current = sec.id;
    }
  });

  links.forEach(link=>{
    link.classList.remove("active");
    if(link.getAttribute("href") === "#" + current){
      link.classList.add("active");
    }
  });
});

// Cursor
const dot = document.querySelector(".cursor-dot");
const ring = document.querySelector(".cursor-ring");

window.addEventListener("mousemove",(e)=>{
  dot.style.transform = `translate(${e.clientX}px,${e.clientY}px)`;
  ring.style.transform = `translate(${e.clientX}px,${e.clientY}px)`;
});

// Tilt 3D
document.querySelectorAll(".tilt").forEach(card=>{
  card.addEventListener("mousemove",(e)=>{
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rx = -(y - rect.height/2)/15;
    const ry = (x - rect.width/2)/15;

    card.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) translateY(-8px)`;
  });

  card.addEventListener("mouseleave",()=>{
    card.style.transform = `rotateX(0) rotateY(0)`;
  });
});

// Particles
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

let particles = [];

for(let i=0;i<70;i++){
  particles.push({
    x:Math.random()*canvas.width,
    y:Math.random()*canvas.height,
    r:Math.random()*2,
    dx:(Math.random()-.5)*0.3,
    dy:(Math.random()-.5)*0.3
  });
}

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);

  particles.forEach(p=>{
    p.x += p.dx;
    p.y += p.dy;

    if(p.x<0||p.x>canvas.width)p.dx*=-1;
    if(p.y<0||p.y>canvas.height)p.dy*=-1;

    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fillStyle="rgba(255,255,255,.35)";
    ctx.fill();
  });

  requestAnimationFrame(animate);
}

animate();

window.addEventListener("resize",()=>{
  canvas.width = innerWidth;
  canvas.height = innerHeight;
});
