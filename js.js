// menu, filtry modeli, licznik koszyka
(function () {
  var b = document.getElementById('burger'), m = document.getElementById('menu');
  b.addEventListener('click', function () {
    var o = m.classList.toggle('otwarte');
    b.setAttribute('aria-expanded', o);
  });
  m.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { m.classList.remove('otwarte'); b.setAttribute('aria-expanded', false); }
  });

  var przyciski = document.querySelectorAll('[data-filtr]');
  var produkty = document.querySelectorAll('.produkt');
  function filtruj(f) {
    przyciski.forEach(function (p) { p.setAttribute('aria-pressed', p.dataset.filtr === f); });
    produkty.forEach(function (p) { p.hidden = !(f === 'wszystko' || p.dataset.kat.split(' ').indexOf(f) > -1); });
  }
  przyciski.forEach(function (p) { p.addEventListener('click', function () { filtruj(p.dataset.filtr); }); });
  document.querySelectorAll('[data-pokaz]').forEach(function (a) {
    a.addEventListener('click', function () { filtruj(a.dataset.pokaz === 'plaskorzezby' ? 'koty' : a.dataset.pokaz); });
  });

  var licznik = document.getElementById('licznik'), n = 0;
  document.querySelectorAll('.dodaj').forEach(function (d) {
    d.addEventListener('click', function () {
      n++; licznik.textContent = n;
      d.classList.add('ok'); d.textContent = 'W koszyku';
    });
  });
  document.getElementById('rok').textContent = new Date().getFullYear();
})();
