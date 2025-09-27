document.addEventListener('DOMContentLoaded', () => {
  // INTERSECTION OBSERVER PER FADE-IN
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('appear');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  const currentPage = window.location.pathname.split('/').pop();

  // FA APPARIRE SUBITO LA CARD BIOGRAPHY SOLO SU bio.html / bioIT.html
  if (currentPage === 'bio.html' || currentPage === 'bioIT.html') {
    const bioCard = document.querySelector('.card.biography');
    if (bioCard) bioCard.classList.add('appear'); // solo visivo
  }

  // OSSERVA TUTTE LE ALTRE CARDS (fade-in)
  document.querySelectorAll('.card').forEach(card => {
    // se siamo su bio.html / bioIT.html, non osservare la biography
    if ((currentPage === 'bio.html' || currentPage === 'bioIT.html') && card.classList.contains('biography')) return;
    observer.observe(card);
  });

  // TEMA CHIARO/SCURO TOGGLE
  const toggle = document.createElement('button');
  toggle.innerText = '🌓';
  Object.assign(toggle.style, {
    position: 'fixed',
    top: '15px',
    right: '15px',
    zIndex: '999',
    background: 'var(--card-bg-color)',
    color: 'var(--text-color)',
    border: `2px solid var(--accent-color)`,
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    lineHeight: '30px',
    fontSize: '1.4rem',
    textAlign: 'center',
    padding: '0',
    cursor: 'pointer'
  });
  document.body.appendChild(toggle);

  toggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('light-mode');
  });

  // CONTROLLA ERRORI ICONE SOCIAL
  const icons = document.querySelectorAll('.social-icons img');
  icons.forEach(icon => {
    icon.addEventListener('error', () => {
      icon.style.display = 'none';
    });
  });
});

// FUNZIONE DI NAVIGAZIONE CLICK
function navigateTo(url) {
  window.location.href = url;
}

// HOME BUTTON (solo fuori da index.html / indexIT.html)
const currentPage = window.location.pathname.split('/').pop();
if (currentPage !== 'index.html' && currentPage !== 'indexIT.html') {
  const homeBtn = document.createElement('button');
  homeBtn.innerText = '🏠';
  homeBtn.title = 'Torna alla Home';
  Object.assign(homeBtn.style, {
    position: 'fixed',
    top: '15px',
    right: '65px', // distanza dal pulsante tema
    zIndex: '999',
    background: 'var(--card-bg-color)',
    color: 'var(--text-color)',
    border: `2px solid var(--accent-color)`,
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    lineHeight: '30px',
    fontSize: '1.5rem',
    textAlign: 'center',
    padding: '0',
    cursor: 'pointer'
  });
  document.body.appendChild(homeBtn);

  homeBtn.addEventListener('click', () => {
    const lang = (document.documentElement.lang || '').toLowerCase();
    if (lang === 'it') {
      window.location.href = 'indexIT.html';
    } else {
      window.location.href = 'index.html';
    }
  });
}
