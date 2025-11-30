// Particle background
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
for (let i = 0; i < 150; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2 + 1,
    vx: (Math.random() - 0.5) * 0.8,
    vy: (Math.random() - 0.5) * 0.8
  });
}

function animate() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fillStyle = "rgba(0,255,245,0.7)";
    ctx.fill();
    p.x += p.vx;
    p.y += p.vy;
    if(p.x<0||p.x>canvas.width)p.vx*=-1;
    if(p.y<0||p.y>canvas.height)p.vy*=-1;
  });
  requestAnimationFrame(animate);
}
animate();

window.addEventListener('resize',()=>{canvas.width=window.innerWidth; canvas.height=window.innerHeight;});

// Generator logic
document.getElementById('generateBtn').addEventListener('click', ()=>{
  const results = document.getElementById('results');
  results.innerHTML = "Generating private server...";
  results.classList.remove('hidden');

  setTimeout(()=>{
    const brainrots = [
      {name:"Meowl", money:"800M"},
      {name:"Dragon Cannelloni", money:"700M"},
      {name:"Strawberry Elephant", money:"900M"}
    ];

    let html = `<a href="https://www.roblox.com/share?code=e8d22ac9fd253c4eb5f0253d41232ceb&type=Server" target="_blank">Join Private Server</a>`;
    html += '<div class="result-box">';
    brainrots.forEach(b=>{
      html += `<strong>${b.name}</strong> — <span>${b.money}</span> Money per second<br>`;
    });
    html += '</div>';
    results.innerHTML = html;
  },2000);
});
