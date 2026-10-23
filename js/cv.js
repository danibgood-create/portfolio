(() => {
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;

  /* Reveal on scroll (staggered inside lists) */
  $$('.tl, .logos').forEach((list) => $$('[data-reveal]', list).forEach((el, i) => { if (!el.style.getPropertyValue('--d')) el.style.setProperty('--d', (i % 6) * 0.05 + 's'); }));
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: .12, rootMargin: '0px 0px -6% 0px' });
  $$('[data-reveal], .rule, .sep, .clients-title i').forEach((el) => io.observe(el));
  document.addEventListener('i18n:applied', () => $$('[data-reveal], .rule').forEach((el) => { if (!el.classList.contains('in')) io.observe(el); }));
  requestAnimationFrame(() => $$('.cv-head [data-reveal], .cv-head .rule').forEach((el) => el.classList.add('in')));
  // dividers draw in
  $$('.sep, .clients-title i').forEach((el) => { el.style.transform = 'scaleX(0)'; el.style.transition = 'transform 1.2s cubic-bezier(.22,1,.36,1)'; });
  const lineIO = new IntersectionObserver((entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.style.transform = 'none'; lineIO.unobserve(e.target); } }), { threshold: 1 });
  $$('.sep, .clients-title i').forEach((el) => lineIO.observe(el));

  /* Scroll: progress bar, back-to-top, header parallax */
  const bar = $('.progress'), topBtn = $('.top'), bg = $('.cv-head .bg-layer');
  let ticking = false;
  const update = () => {
    ticking = false;
    const y = scrollY, vh = innerHeight, max = document.documentElement.scrollHeight - vh;
    bar.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
    topBtn.classList.toggle('on', y > vh * .8);
    if (!reduce && bg) bg.style.transform = `translate3d(0, ${Math.min(y, 600) * .25}px, 0)`;
  };
  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
  update();
  topBtn.addEventListener('click', () => scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' }));

  if (!fine || reduce) return;

  /* Cursor glow */
  const glow = $('.glow');
  let gx = innerWidth / 2, gy = innerHeight / 2, tx = gx, ty = gy;
  addEventListener('pointermove', (e) => { tx = e.clientX; ty = e.clientY; document.body.classList.add('has-pointer'); });
  const loop = () => { gx += (tx - gx) * .12; gy += (ty - gy) * .12; glow.style.transform = `translate3d(${gx}px, ${gy}px, 0)`; requestAnimationFrame(loop); };
  loop();

})();
