const glow=document.querySelector('.cursor-glow');
const progress=document.querySelector('.progress');
const art=document.querySelector('.hero-art');
const sun=document.querySelector('.sun');
const toast=document.querySelector('.toast');

window.addEventListener('pointermove',(event)=>{
  glow.style.left=`${event.clientX}px`;
  glow.style.top=`${event.clientY}px`;
  if(window.innerWidth>=700){
    const x=(event.clientX/window.innerWidth-.5)*8;
    const y=(event.clientY/window.innerHeight-.5)*8;
    art.style.transform=`translate(${x}px,${y}px)`;
    sun.style.transform=`rotate(-10deg) translate(${x/2}px,${y/2}px)`;
  }
});

window.addEventListener('scroll',()=>{
  const max=document.documentElement.scrollHeight-window.innerHeight;
  progress.style.width=`${Math.min(100,(window.scrollY/max)*100)}%`;
});

const observer=new IntersectionObserver((entries)=>entries.forEach((entry)=>{
  if(entry.isIntersecting) entry.target.classList.add('visible');
}),{threshold:.12});
document.querySelectorAll('.reveal').forEach((element)=>observer.observe(element));

document.querySelectorAll('.skill-row').forEach((row)=>row.addEventListener('click',()=>{
  const details={strategy:'用结构化思维，把问题拆解成可执行的路径。',research:'从信息中提炼洞察，让决策更有依据。',brand:'在商业目标与用户感受之间，找到清晰的表达。',communication:'把复杂想法讲清楚，也把不同观点连接起来。'};
  document.querySelector('.skill-detail').textContent=details[row.dataset.skill];
  document.querySelectorAll('.skill-row').forEach((item)=>item.classList.remove('active'));
  row.classList.add('active');
}));

document.querySelector('.theme-toggle').addEventListener('click',()=>{
  document.body.classList.toggle('dark');
});

document.querySelector('.copy-email').addEventListener('click',async()=>{
  try{await navigator.clipboard.writeText('hello@yanxuehua.com');}catch(e){}
  toast.classList.add('show');
  setTimeout(()=>toast.classList.remove('show'),1800);
});
