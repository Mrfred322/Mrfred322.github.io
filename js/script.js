/* =====================================================
   PREMIUM MOBILE NAVIGATION
   ===================================================== */

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle?.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');

  menuToggle.classList.toggle('active', open);
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute(
    'aria-label',
    open ? 'Close navigation menu' : 'Open navigation menu'
  );

  document.body.classList.toggle('menu-open', open);
});


/* Close menu when a navigation link is clicked */

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');

    menuToggle?.classList.remove('active');
    menuToggle?.setAttribute('aria-expanded', 'false');
    menuToggle?.setAttribute('aria-label', 'Open navigation menu');

    document.body.classList.remove('menu-open');
  });
});


/* Close menu when clicking outside */

document.addEventListener('click', e => {
  if (
    navLinks?.classList.contains('open') &&
    !navLinks.contains(e.target) &&
    !menuToggle?.contains(e.target)
  ) {
    navLinks.classList.remove('open');

    menuToggle?.classList.remove('active');
    menuToggle?.setAttribute('aria-expanded', 'false');
    menuToggle?.setAttribute('aria-label', 'Open navigation menu');

    document.body.classList.remove('menu-open');
  }
});


/* Close menu with Escape key */

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && navLinks?.classList.contains('open')) {
    navLinks.classList.remove('open');

    menuToggle?.classList.remove('active');
    menuToggle?.setAttribute('aria-expanded', 'false');
    menuToggle?.setAttribute('aria-label', 'Open navigation menu');

    document.body.classList.remove('menu-open');
  }
});

const progress=document.createElement('div');progress.className='scroll-progress';document.body.prepend(progress);
const cursor=document.createElement('div');cursor.className='cursor-glow';document.body.append(cursor);
let ticking=false;const updateScroll=()=>{const h=document.documentElement.scrollHeight-innerHeight;progress.style.width=`${h>0?(scrollY/h)*100:0}%`;ticking=false};window.addEventListener('scroll',()=>{if(!ticking){requestAnimationFrame(updateScroll);ticking=true}},{passive:true});updateScroll();
if(matchMedia('(pointer:fine)').matches){window.addEventListener('pointermove',e=>{cursor.style.left=e.clientX+'px';cursor.style.top=e.clientY+'px'});document.querySelectorAll('.service-card').forEach(card=>{card.addEventListener('pointermove',e=>{const r=card.getBoundingClientRect();card.style.setProperty('--mx',`${e.clientX-r.left}px`);card.style.setProperty('--my',`${e.clientY-r.top}px`)});});}
const revealObserver=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12,rootMargin:'0px 0px -40px'});
document.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));
const staggerObserver=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){const items=e.target.querySelectorAll('.service-card,.feature-list div,.map-card');items.forEach((item,i)=>setTimeout(()=>item.classList.add('is-visible'),i*90));staggerObserver.unobserve(e.target)}}),{threshold:.08});
document.querySelectorAll('.service-grid,.feature-list,.contact-grid').forEach(el=>staggerObserver.observe(el));

const tiltTarget = document.querySelector('.hero-visual');

if (tiltTarget && matchMedia('(pointer:fine)').matches) {

  tiltTarget.addEventListener('pointermove', e => {

    const r = tiltTarget.getBoundingClientRect();

    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;

    const card = tiltTarget.querySelector('.hero-image');

    if (card) {
      card.style.transform =
        `perspective(1100px)
         rotateY(${x * 4}deg)
         rotateX(${-y * 3}deg)
         translateY(-3px)`;
    }

  });

  tiltTarget.addEventListener('pointerleave', () => {

    const card = tiltTarget.querySelector('.hero-image');

    if (card) {
      card.style.transform = '';
    }

  });

}
// Smooth anchor navigation with a little offset for the sticky header.
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const target=document.querySelector(a.getAttribute('href'));if(!target)return;e.preventDefault();const y=target.getBoundingClientRect().top+scrollY-86;window.scrollTo({top:y,behavior:'smooth'})}));
