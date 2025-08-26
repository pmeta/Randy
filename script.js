
// Tiny sprinkle: confetti squeak when clicking the hero art
(function(){
  const art = document.querySelector('.hero__art');
  if(!art) return;
  art.addEventListener('click', () => {
    for(let i=0;i<20;i++){
      const s = document.createElement('span');
      s.className = 'confetti';
      s.textContent = ['🐹','✨','🥕','💥'][Math.floor(Math.random()*4)];
      s.style.left = (50 + (Math.random()-0.5)*40) + '%';
      s.style.top = (50 + (Math.random()-0.5)*10) + '%';
      s.style.fontSize = (16 + Math.random()*20) + 'px';
      s.style.transform = `translate(-50%,-50%) rotate(${(Math.random()*60-30)}deg)`;
      art.appendChild(s);
      setTimeout(()=>s.remove(), 1200 + Math.random()*400);
    }
  });
})();
