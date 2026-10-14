const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('#navigation');
function closeNav(){nav.classList.remove('open');navToggle.setAttribute('aria-expanded','false');}
navToggle.addEventListener('click',()=>{const open=navToggle.getAttribute('aria-expanded')==='true';navToggle.setAttribute('aria-expanded',String(!open));nav.classList.toggle('open',!open);});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeNav));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open')){closeNav();navToggle.focus();}});
const dishes=[...document.querySelectorAll('.dish')];
document.querySelectorAll('.filter').forEach(button=>button.addEventListener('click',()=>{
  document.querySelectorAll('.filter').forEach(other=>{const active=other===button;other.classList.toggle('active',active);other.setAttribute('aria-pressed',String(active));});
  let visible=0;dishes.forEach(dish=>{dish.hidden=button.dataset.category!=='all'&&dish.dataset.category!==button.dataset.category;if(!dish.hidden)visible++;});
  document.querySelector('#food-count').textContent=`${visible} highlights`;
}));
const dialog=document.querySelector('#dish-dialog');
dishes.forEach(dish=>dish.addEventListener('click',()=>{document.querySelector('#dish-title').textContent=dish.dataset.dish;document.querySelector('#dish-published-price').textContent=dish.dataset.price;dialog.showModal();}));
document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
const form=document.querySelector('#visit-form');
const dateInput=document.querySelector('#visit-date');
const error=document.querySelector('#form-error');
const result=document.querySelector('#plan-result');
function bangkokToday(){return new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Bangkok',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());}
dateInput.min=bangkokToday();
dateInput.addEventListener('input',()=>{dateInput.setCustomValidity('');error.textContent='';});
form.addEventListener('submit',event=>{
  event.preventDefault();dateInput.min=bangkokToday();
  const selectedDate=new Date(`${dateInput.value}T12:00:00+07:00`);
  if(!dateInput.value||dateInput.value<dateInput.min||Number.isNaN(selectedDate.getTime())){error.textContent='Please choose today or a future date.';dateInput.focus();return;}
  if(new Intl.DateTimeFormat('en-US',{timeZone:'Asia/Bangkok',weekday:'long'}).format(selectedDate)==='Monday'){error.textContent='The restaurant is listed as closed on Mondays. Please choose Tuesday–Sunday.';dateInput.focus();return;}
  const values=new FormData(form);
  const formatted=new Intl.DateTimeFormat('en-GB',{timeZone:'Asia/Bangkok',weekday:'long',day:'numeric',month:'long',year:'numeric'}).format(selectedDate);
  document.querySelector('#summary-guests').textContent=values.get('guests')==='1'?'one':values.get('guests');
  document.querySelector('#summary-details').textContent=`${formatted} · ${values.get('time')} Bangkok time · ${values.get('seating')}.`;
  error.textContent='';form.hidden=true;result.hidden=false;result.focus();
});
document.querySelector('#edit-plan').addEventListener('click',()=>{result.hidden=true;form.hidden=false;dateInput.focus();});
if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches&&'IntersectionObserver'in window){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('reveal');observer.unobserve(entry.target);}}),{threshold:.08});document.querySelectorAll('.section-heading,.story-copy,.feedback-layout,.plan-intro,.visit h2').forEach(el=>observer.observe(el));}
