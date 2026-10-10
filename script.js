const imgPlaceholder = (seed) => `https://picsum.photos/seed/${seed}/300/400`;

const heroData = [
  { title: 'Shadow Monarch Reborn', genre: 'Action · Fantasy', rating: 9.4, chapter: 128, seed: 'hero1' },
  { title: 'Dungeon Reset Chronicles', genre: 'Adventure · Isekai', rating: 9.1, chapter: 87, seed: 'hero2' },
  { title: 'The Blade of Dawn', genre: 'Martial Arts · Drama', rating: 8.9, chapter: 204, seed: 'hero3' },
  { title: 'Academy of Fallen Stars', genre: 'School · Supernatural', rating: 9.0, chapter: 56, seed: 'hero4' },
];

const comicTerbaru = [
  { title: 'why kucingku bloon', type: 'Manhwa', chapter: 45, rating: 9.2, seed: 'c1' },
  { title: 'My Vampire Roommate', type: 'Manga', chapter: 112, rating: 8.7, seed: 'c2' },
  { title: 'Level Up Alone', type: 'Manhwa', chapter: 78, rating: 9.5, seed: 'c3' },
  { title: 'The Last Alchemist tapi boong', type: 'Manhua', chapter: 33, rating: 8.4, seed: 'c4' },
  { title: 'Frost Queen Reborn', type: 'Manhwa', chapter: 91, rating: 9.0, seed: 'c5' },
  { title: 'Cyber Ninja 2099', type: 'Manga', chapter: 24, rating: 8.6, seed: 'c6' },
  { title: 'Dragon Tamer Academy', type: 'Manhwa', chapter: 150, rating: 9.1, seed: 'c7' },
  { title: 'prabowo sebagai presiden', type: 'Manhua', chapter: 67, rating: 8.8, seed: 'c8' },
];

const comicPopuler = [
  { title: 'Solo Ascension', type: 'Manhwa', chapter: 220, rating: 9.7, seed: 'p1' },
  { title: 'Tower of Trials', type: 'Manhwa', chapter: 180, rating: 9.3, seed: 'p2' },
  { title: 'Demon joshua king', type: 'Manga', chapter: 95, rating: 9.2, seed: 'p3' },
  { title: 'Healer Gone Rogue', type: 'Manhua', chapter: 140, rating: 9.0, seed: 'p4' },
  { title: 'Silver Knight Saga', type: 'Manhwa', chapter: 76, rating: 8.9, seed: 'p5' },
  { title: 'Magic Chef Isekai', type: 'Manga', chapter: 58, rating: 8.5, seed: 'p6' },
];

const chapterBaru = [
  { title: 'Solo Ascension', chapter: 221, time: '2 menit lalu', isNew: true, seed: 'p1' },
  { title: 'Level Up Alone', chapter: 79, time: '15 menit lalu', isNew: true, seed: 'c3' },
  { title: 'Tower of Trials', chapter: 181, time: '1 jam lalu', isNew: true, seed: 'p2' },
  { title: 'Reincarnated as a Sword God', chapter: 46, time: '3 jam lalu', isNew: false, seed: 'c1' },
  { title: 'Dragon Tamer Academy', chapter: 151, time: '5 jam lalu', isNew: false, seed: 'c7' },
];

const ranking = [
  { title: 'Solo Ascension', score: '9.7', seed: 'p1' },
  { title: 'Level Up Alone', score: '9.5', seed: 'c3' },
  { title: 'Shadow Monarch Reborn', score: '9.4', seed: 'hero1' },
  { title: 'Tower of Trials', score: '9.3', seed: 'p2' },
  { title: 'Reincarnated as a Sword God', score: '9.2', seed: 'c1' },
];

const genres = [
  'Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', 'Horror',
  'Isekai', 'Martial Arts', 'Mystery', 'Romance', 'School', 'Sci-Fi',
  'Slice of Life', 'Supernatural', 'Thriller',
];

function comicCard(item) {
  return `
    <div class="comic-card">
      <div class="comic-thumb">
        <img src="${imgPlaceholder(item.seed)}" alt="${item.title}" loading="lazy" />
        <span class="comic-type">${item.type}</span>
        <span class="comic-chapter">Ch. ${item.chapter}</span>
      </div>
      <div class="comic-info">
        <h3 class="comic-title">${item.title}</h3>
        <div class="comic-rating">
          <i class="fa-solid fa-star"></i> ${item.rating}
        </div>
      </div>
    </div>
  `;
}

const heroSlider = document.getElementById('heroSlider');
const heroDots = document.getElementById('heroDots');

heroData.forEach((item, i) => {
  const slide = document.createElement('div');
  slide.className = 'hero-slide' + (i === 0 ? ' active' : '');
  slide.style.backgroundImage = `url(https://picsum.photos/seed/${item.seed}/1200/500)`;
  slide.innerHTML = `
    <div class="hero-info">
      <span class="hero-badge">Featured</span>
      <h1>${item.title}</h1>
      <div class="hero-meta">
        <span><i class="fa-solid fa-star" style="color:#ffb347"></i> ${item.rating}</span>
        <span><i class="fa-solid fa-book"></i> ${item.genre}</span>
        <span><i class="fa-solid fa-list-ol"></i> Ch. ${item.chapter}</span>
      </div>
      <a href="#" class="btn-hero"><i class="fa-solid fa-play"></i> Baca Sekarang</a>
    </div>
  `;
  heroSlider.appendChild(slide);

  const dot = document.createElement('button');
  if (i === 0) dot.classList.add('active');
  dot.addEventListener('click', () => goToSlide(i));
  heroDots.appendChild(dot);
});

let currentSlide = 0;
const slides = heroSlider.querySelectorAll('.hero-slide');
const dots = heroDots.querySelectorAll('button');

function goToSlide(index) {
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');
  currentSlide = index;
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}

setInterval(() => {
  goToSlide((currentSlide + 1) % slides.length);
}, 5000);

document.getElementById('gridTerbaru').innerHTML = comicTerbaru.map(comicCard).join('');
document.getElementById('gridPopuler').innerHTML = comicPopuler.map(comicCard).join('');

document.getElementById('chapterList').innerHTML = chapterBaru.map((c) => `
  <div class="chapter-item">
    <img src="${imgPlaceholder(c.seed)}" alt="${c.title}" loading="lazy" />
    <div class="chapter-info">
      <h4>${c.title}</h4>
      <div class="chapter-meta">
        <span>Chapter ${c.chapter} ${c.isNew ? '<span class="new">NEW</span>' : ''}</span>
      </div>
    </div>
    <span class="chapter-time">${c.time}</span>
  </div>
`).join('');

document.getElementById('rankingList').innerHTML = ranking.map((r, i) => `
  <li>
    <span class="rank-num">${i + 1}</span>
    <img class="rank-thumb" src="${imgPlaceholder(r.seed)}" alt="${r.title}" loading="lazy" />
    <div class="rank-info">
      <h4>${r.title}</h4>
      <span><i class="fa-solid fa-star" style="color:#ffb347"></i> ${r.score}</span>
    </div>
  </li>
`).join('');

document.getElementById('genreTags').innerHTML = genres.map((g) => `<a href="#">${g}</a>`).join('');

const btnSearch = document.getElementById('btnSearch');
const searchBar = document.getElementById('searchBar');
const searchInput = document.getElementById('searchInput');

btnSearch.addEventListener('click', () => {
  searchBar.classList.toggle('open');
  if (searchBar.classList.contains('open')) searchInput.focus();
});

const btnMenu = document.getElementById('btnMenu');
const nav = document.getElementById('nav');
btnMenu.addEventListener('click', () => nav.classList.toggle('open'));

nav.querySelectorAll('a').forEach((a) =>
  a.addEventListener('click', () => nav.classList.remove('open'))
);

const backTop = document.getElementById('backTop');
window.addEventListener('scroll', () => {
  backTop.classList.toggle('show', window.scrollY > 400);
});
backTop.addEventListener('click', () =>
  window.scrollTo({ top: 0, behavior: 'smooth' })
);
