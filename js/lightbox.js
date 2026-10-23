/* Lightbox: click / tap / Enter on a project image opens it large. Uses a native <dialog> (focus trap + Esc). */
(() => {
  const SEL = '.shot img, .tile img, .device-stage img, .media img, .duo img, .process-head img[alt="Double Diamond"], .row img[src*="ami-1"]';
  const imgs = [...document.querySelectorAll(SEL)];
  if (!imgs.length || typeof HTMLDialogElement === 'undefined') return;
  const T = (s) => (window.i18nT ? window.i18nT(s) : s); // UI strings follow the page language
  const groupOf = (el) => imgs.filter((i) => i.closest('section[id]') === el.closest('section[id]'));

  const dlg = document.createElement('dialog');
  dlg.className = 'lb';
  dlg.innerHTML = `
    <div class="lb-bar"><span class="lb-count" aria-live="polite"></span><button type="button" class="lb-close"></button></div>
    <div class="lb-stage"><img alt=""></div>
    <button type="button" class="lb-nav lb-prev"><span aria-hidden="true">‹</span></button>
    <button type="button" class="lb-nav lb-next"><span aria-hidden="true">›</span></button>
    <p class="lb-cap"></p>`;
  document.body.appendChild(dlg);
  const stage = dlg.querySelector('.lb-stage'), view = stage.querySelector('img');
  const count = dlg.querySelector('.lb-count'), cap = dlg.querySelector('.lb-cap');
  const prev = dlg.querySelector('.lb-prev'), next = dlg.querySelector('.lb-next'), close = dlg.querySelector('.lb-close');
  let group = [], idx = 0, opener = null;

  const labels = () => {
    dlg.setAttribute('aria-label', T('Image viewer'));
    close.setAttribute('aria-label', T('Close'));
    prev.setAttribute('aria-label', T('Previous image'));
    next.setAttribute('aria-label', T('Next image'));
  };
  const show = (i) => {
    idx = (i + group.length) % group.length;
    const el = group[idx];
    view.classList.remove('tall');
    view.onload = () => view.classList.toggle('tall', view.naturalHeight / view.naturalWidth > 1.6);
    view.src = el.currentSrc || el.src;
    view.alt = el.alt;
    cap.textContent = el.alt;
    count.textContent = group.length > 1 ? `${idx + 1} / ${group.length}` : '';
    prev.hidden = next.hidden = group.length < 2;
    stage.scrollTop = 0;
  };
  const open = (el) => {
    opener = el; group = groupOf(el); labels();
    show(group.indexOf(el));
    document.documentElement.classList.add('lb-open');
    dlg.showModal();
    close.focus();
  };
  const shut = () => dlg.open && dlg.close();
  dlg.addEventListener('close', () => { document.documentElement.classList.remove('lb-open'); opener && opener.focus({ preventScroll: true }); });
  close.addEventListener('click', shut);
  prev.addEventListener('click', () => show(idx - 1));
  next.addEventListener('click', () => show(idx + 1));
  stage.addEventListener('click', (e) => { if (e.target === stage) shut(); });
  dlg.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') { e.preventDefault(); show(idx - 1); }
    if (e.key === 'ArrowRight') { e.preventDefault(); show(idx + 1); }
  });
  let x0 = null;
  stage.addEventListener('touchstart', (e) => { x0 = e.touches[0].clientX; }, { passive: true });
  stage.addEventListener('touchend', (e) => {
    if (x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0; x0 = null;
    if (Math.abs(dx) > 60 && group.length > 1) show(idx + (dx < 0 ? 1 : -1));
  });

  imgs.forEach((el) => {
    el.classList.add('zoomable');
    el.setAttribute('tabindex', '0');
    el.setAttribute('role', 'button');
    const setLabel = () => el.setAttribute('aria-label', `${T('View larger')}: ${el.alt}`);
    setLabel(); el.addEventListener('focus', setLabel);
    el.addEventListener('click', () => open(el));
    el.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(el); } });
  });
})();
