// single currentPage reused everywhere
const currentPage = window.location.pathname.split('/').pop();

document.addEventListener('DOMContentLoaded', () => {
  // ===== FADE-IN CARDS =====
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('appear');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  // FA APPARIRE SUBITO LA CARD BIOGRAPHY SOLO SU BIO.HTML / BIOIT.HTML
  if (currentPage === 'bio.html' || currentPage === 'bioIT.html') {
    const bioCard = document.querySelector('.card.biography');
    if (bioCard) bioCard.classList.add('appear');
  }

  // OSSERVA TUTTE LE CARDS (se siamo su bio.html / bioIT.html la biography viene già mostrata)
  document.querySelectorAll('.card').forEach(card => {
    if ((currentPage === 'bio.html' || currentPage === 'bioIT.html') && card.classList.contains('biography')) return;
    observer.observe(card);
  });

  // ===== TEMA CHIARO/SCURO =====
  // Applica preferenza salvata se presente
  if (localStorage.getItem('theme') === 'light') {
    document.documentElement.classList.add('light-mode');
  }

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
    if (document.documentElement.classList.contains('light-mode')) {
      localStorage.setItem('theme', 'light');
    } else {
      localStorage.removeItem('theme');
    }
  });

  // ===== CONTROLLA ERRORI ICONE SOCIAL =====
  const icons = document.querySelectorAll('.social-icons img');
  icons.forEach(icon => {
    icon.addEventListener('error', () => {
      icon.style.display = 'none';
    });
  });
});

// ===== FUNZIONE NAVIGAZIONE =====
function navigateTo(url) {
  window.location.href = url;
}

// ===== HOME BUTTON (🏠) =====
if (currentPage !== 'index.html' && currentPage !== 'indexIT.html') {
  const homeBtn = document.createElement('button');
  homeBtn.innerText = '🏠';
  homeBtn.title = 'Torna alla Home';
  Object.assign(homeBtn.style, {
    position: 'fixed',
    top: '15px',
    right: '65px',
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
