// ===== CAROUSEL FUNCTIONALITY =====
let slideIndex = 1;

function changeSlide(n) {
  showSlide(slideIndex += n);
}

function currentSlide(n) {
  showSlide(slideIndex = n);
}

function showSlide(n) {
  const slides = document.querySelectorAll('.carousel-slide');
  const dots = document.querySelectorAll('.dot');
  
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }
  
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));
  
  if (slides[slideIndex - 1]) {
    slides[slideIndex - 1].classList.add('active');
  }
  if (dots[slideIndex - 1]) {
    dots[slideIndex - 1].classList.add('active');
  }
}

// Auto-advance carousel every 5 seconds
setInterval(() => {
  changeSlide(1);
}, 5000);

// ===== PARTICLES (ESTRELAS FLUTUANTES) =====
const container = document.getElementById('particles');
for (let i = 0; i < 15; i++) {
  const star = document.createElement('div');
  star.style.position = 'absolute';
  star.style.width = '2px';
  star.style.height = '2px';
  star.style.backgroundColor = '#fff';
  star.style.borderRadius = '50%';
  star.style.opacity = Math.random() * 0.6 + 0.4;
  star.style.left = `${Math.random() * 100}%`;
  star.style.top = `${Math.random() * 100}%`;
  star.style.animation = `twinkle ${3 + Math.random() * 4}s infinite ease-in-out`;
  container.appendChild(star);
}

// ===== INTERSECTION OBSERVER PARA ANIMAÇÃO DOS INGREDIENTES =====
const ingredients = document.querySelectorAll('.ingredient');

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

ingredients.forEach(ingredient => {
  observer.observe(ingredient);
});

// ===== MUSIC CONTROL + TODOS OS OUTROS EFEITOS DENTRO DO DOMCONTENTLOADED =====
document.addEventListener('DOMContentLoaded', () => {
  // 🔊 Controle de música
  const backgroundMusic = document.getElementById('background-music');
  const playPauseBtn = document.getElementById('play-pause-music');

  if (backgroundMusic && playPauseBtn) {
    playPauseBtn.addEventListener('click', () => {
      if (backgroundMusic.paused) {
        backgroundMusic.play();
        playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
      } else {
        backgroundMusic.pause();
        playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
      }
    });
  }

  // 🎵 Som de sininho ao clicar em qualquer botão CTA
  document.querySelectorAll('.btn-mystic').forEach(btn => {
    btn.addEventListener('click', () => {
      const audio = new Audio('sounds/sininho.mp3');
      audio.volume = 0.3;
      audio.play().catch(e => console.log("Áudio bloqueado — normal em navegadores"));
    });
  });

  // 🌬️ Movimento das estrelas ao rolar
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    const scrollX = window.pageXOffset * 0.01;
    document.getElementById('particles').style.transform = `translate(${scrollX}px, ${scrollY * 0.05}px)`;
  });

  // 💬 Pop-up de conversão (só aparece uma vez)
  const hasSeenPopup = localStorage.getItem('auraCelestePopup');
  if (!hasSeenPopup) {
    setTimeout(() => {
      const popup = document.createElement('div');
      popup.className = 'conversion-popup';
      popup.innerHTML = `
        <div class="popup-content">
          <span class="close-popup">&times;</span>
          <p>Você merece um momento de paz.</p>
          <p>Acenda sua Aura Celeste hoje.</p>
          <a href="https://wa.me/554888228663?text=Ol%C3%A1%21%20Estou%20buscando%20um%20momento%20de%20paz%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20Blend%20M%C3%ADstico%20da%20Aura%20Celeste.%0A%0AQuero%20comprar%20uma%20vela%20com%20entrega%20para%20mim.%0A%0APoss%20pagar%20por%20PIX%20ou%20cart%C3%A3o%3F%0A%0A%28Responda%20com%20%E2%80%98sim%E2%80%99%20e%20me%20envie%20as%20op%C3%A7%C3%B5es%21%29" class="btn-mystic">👉 Sim, quero minha vela</a>
        </div>
      `;
      document.body.appendChild(popup);

      document.querySelector('.close-popup').addEventListener('click', () => {
        popup.remove();
        localStorage.setItem('auraCelestePopup', 'true');
      });

      popup.addEventListener('click', (e) => {
        if (e.target === popup) {
          popup.remove();
          localStorage.setItem('auraCelestePopup', 'true');
        }
      });
    }, 10000);
  }

  // 🌟 Saudação inicial "Bem-vinda, alma tranquila."
  const welcome = document.createElement('div');
  welcome.innerHTML = '<p style="position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);font-family:Cormorant Garamond;font-size:1.5rem;color:#D4AF37;z-index:9999;opacity:0;transition:opacity 1s;">Bem-vinda, alma tranquila.</p>';
  document.body.appendChild(welcome);

  setTimeout(() => {
    welcome.style.opacity = '1';
  }, 500);

  setTimeout(() => {
    welcome.style.opacity = '0';
  }, 2500);

  setTimeout(() => {
    welcome.remove();
  }, 3000);

  // ✅ Adiciona contador (caso ainda não exista no HTML)
  if (!document.querySelector('.counter')) {
    const counterElement = document.createElement('p');
    counterElement.className = 'counter';
    counterElement.innerHTML = '✨ 128 almas encontraram seu momento hoje.';
    const testimonialSection = document.querySelector('.testimonial');
    if (testimonialSection) {
      testimonialSection.parentNode.insertBefore(counterElement, testimonialSection.nextSibling);
    }
  }

  // 🖼️ QR Code no CTA Final — garantindo que ele existe
  if (!document.querySelector('.qr-code-container')) {
    const qrCodeContainer = document.createElement('div');
    qrCodeContainer.className = 'qr-code-container';
    qrCodeContainer.innerHTML = `
      <div class="qr-wrapper">
        <img src="icons/qr.svg" alt="QR Code da Aura Celeste" class="qr-code">
      </div>
      <p class="qr-text">Escaneie para acender sua paz.</p>
    `;
    const ctaFinal = document.querySelector('.cta-final');
    if (ctaFinal) {
      ctaFinal.appendChild(qrCodeContainer);
    }
  }

  // 🔊 Som ao clicar no QR Code (opcional, mas lindo!)
  document.querySelector('.qr-code')?.addEventListener('click', () => {
    const audio = new Audio('sounds/sininho.mp3');
    audio.volume = 0.2;
    audio.play().catch(e => console.log("Áudio bloqueado — normal em navegadores"));
  });
});
