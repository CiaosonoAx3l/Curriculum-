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

 const translations = {
  it: {
    h1_name: 'Alessandro Mercede',
    bio_title: 'Biografia',
    bio_text: 'Mi chiamo Alessandro...',
    // aggiungi le chiavi per ogni testo visibile
  },
  en: {
    h1_name: 'Alessandro Mercede',
    bio_title: 'Biography',
    bio_text: 'My name is Alessandro...',
    // ...
  }
};

function setLanguage(lang) {
  localStorage.setItem('lang', lang);
  applyLanguage(lang);
}

function applyLanguage(lang) {
  const t = translations[lang] || translations.it;
  document.documentElement.lang = lang;

  document.querySelector('h1').textContent = t.h1_name;
  document.querySelector('.card.biography h2').textContent = t.bio_title;
  document.querySelector('.card.biography p').textContent = t.bio_text;
  // ripeti per ogni elemento testuale usando data-attributes se preferisci
}

document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('lang') || 'it';
  applyLanguage(saved);

  document.querySelectorAll('.lang-switch img').forEach(img => {
    img.addEventListener('click', () => {
      const lang = img.alt.toLowerCase();
      setLanguage(lang);
      document.querySelectorAll('.lang-switch img').forEach(i => i.classList.toggle('inactive', i !== img));
    });
  });
});


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

function navigateTo(url) {
  window.location.href = url;
}
