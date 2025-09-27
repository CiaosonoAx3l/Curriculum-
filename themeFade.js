document.addEventListener('DOMContentLoaded', () => {
  // ANIMAZIONE APPARIZIONE CARDS
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('appear');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.card').forEach(card => observer.observe(card));

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
    padding: '10px',
    cursor: 'pointer',
    width: '40px',
    height: '40px',
    lineHeight: '30px',  // centratura verticale perfetta
    cursor: 'pointer',
    fontSize: '1.4rem',    // più grande del pulsante home
    textAlign: 'center',
    padding: '0'
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

function navigateTo(url) {
  window.location.href = url;
}

// HOME TOGGLE (🏠) - visibile solo fuori da index.html e indexIT.html
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
    lineHeight: '30px', // centra l’emoji
    cursor: 'pointer',
    fontSize: '1.5rem',
    textAlign: 'center',
    padding: '0'
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