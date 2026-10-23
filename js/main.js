(() => {
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

  /* ---------- Reveal on scroll ---------- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: .15, rootMargin: '0px 0px -8% 0px' });
  $$('[data-reveal], .mask-line, .rule').forEach((el) => io.observe(el));
  // hero in on load
  requestAnimationFrame(() => $$('.hero [data-reveal], .hero .mask-line, .hero .rule').forEach((el) => el.classList.add('in')));

  /* ---------- Side menu: appears after the index, scroll-spy ---------- */
  const side = $('.side');
  const links = $$('.side a[href^="#"]');
  const sections = links.map((a) => $(a.getAttribute('href')));
  const indexSec = $('#index');
  const darkSel = '.hero, .case-banner, .strip, .show.dark, .legal';
  const allLinks = $$('.side a');

  /* ---------- Scroll-driven stuff (single rAF loop) ---------- */
  const bar = $('.progress');
  const topBtn = $('.top');
  const parallaxEls = $$('[data-speed]');
  const bgLayers = $$('.bg-layer');
  let ticking = false;

  const update = () => {
    ticking = false;
    const y = scrollY, vh = innerHeight;
    const max = document.documentElement.scrollHeight - vh;
    bar.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
    const visible = indexSec.getBoundingClientRect().bottom < vh * .4;
    side.classList.toggle('on', visible);
    if (visible) {
      // colour each link by the background beneath it
      const x = innerWidth - 40;
      allLinks.forEach((a) => {
        const r = a.getBoundingClientRect();
        const under = document.elementsFromPoint(x, r.top + r.height / 2).find((el) => !side.contains(el));
        a.dataset.tone = under && under.closest(darkSel) ? 'dark' : 'light';
      });
    }
    topBtn.classList.toggle('on', y > vh * 1.5);

    // active section
    let active = null;
    sections.forEach((s, i) => {
      const r = s.getBoundingClientRect();
      if (r.top < vh * .45 && r.bottom > vh * .45) active = links[i];
    });
    links.forEach((a) => {
      const on = a === active;
      a.classList.toggle('active', on);
      on ? a.setAttribute('aria-current', 'true') : a.removeAttribute('aria-current');
    });

    if (reduce) return;
    // background layers: slow parallax relative to their container
    bgLayers.forEach((l) => {
      const p = l.parentElement.getBoundingClientRect();
      if (p.bottom < -100 || p.top > vh + 100) return;
      const prog = (vh / 2 - (p.top + p.height / 2)) / (vh + p.height);
      l.style.transform = `translate3d(0, ${prog * 160}px, 0)`;
    });
    // generic parallax: data-speed="0.2" (+ moves slower, - faster)
    parallaxEls.forEach((el) => {
      const r = el.parentElement.getBoundingClientRect();
      if (r.bottom < -200 || r.top > vh + 200) return;
      const s = parseFloat(el.dataset.speed);
      const off = (vh / 2 - (r.top + r.height / 2)) * s;
      el.style.transform = `translate3d(0, ${off.toFixed(1)}px, 0)`;
    });
  };
  const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
  addEventListener('scroll', onScroll, { passive: true });
  addEventListener('resize', onScroll);
  addEventListener('load', () => { update(); });
  update();

  /* ---------- Smooth anchor offset ---------- */
  $$('a[href^="#"]').forEach((a) => a.addEventListener('click', (e) => {
    const t = $(a.getAttribute('href'));
    if (!t) return;
    e.preventDefault();
    t.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
  }));
  topBtn.addEventListener('click', () => scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' }));

  if (!fine || reduce) return;

  /* ---------- Cursor glow (lerped) ---------- */
  const glow = $('.glow');
  let gx = innerWidth / 2, gy = innerHeight / 2, tx = gx, ty = gy;
  addEventListener('pointermove', (e) => { tx = e.clientX; ty = e.clientY; document.body.classList.add('has-pointer'); });
  const loop = () => {
    gx += (tx - gx) * .12; gy += (ty - gy) * .12;
    glow.style.transform = `translate3d(${gx}px, ${gy}px, 0)`;
    requestAnimationFrame(loop);
  };
  loop();

  /* ---------- 3D tilt on cards + device mocks ---------- */
  $$('[data-tilt]').forEach((el) => {
    const amt = parseFloat(el.dataset.tilt) || 8;
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - .5;
      const py = (e.clientY - r.top) / r.height - .5;
      el.style.transform = `perspective(900px) rotateY(${px * amt}deg) rotateX(${-py * amt}deg) translateZ(0)`;
    });
    el.addEventListener('pointerleave', () => { el.style.transform = ''; });
  });

  /* ---------- Magnetic hero contacts ---------- */
  $$('.magnetic').forEach((el) => {
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * .25}px, ${(e.clientY - r.top - r.height / 2) * .4}px)`;
    });
    el.addEventListener('pointerleave', () => { el.style.transform = ''; });
  });

  /* ---------- Scroll-on-hover for tall screenshots ---------- */
  $$('.scroll-shot').forEach((s) => {
    const set = () => s.style.setProperty('--h', s.clientHeight + 'px');
    set(); addEventListener('resize', set);
    const img = $('img', s);
    img.addEventListener('load', set);
    // duration proportional to distance
    s.addEventListener('pointerenter', () => {
      const dist = img.clientHeight - s.clientHeight;
      img.style.transitionDuration = clamp(dist / 120, 2, 12) + 's';
    });
  });
})();
