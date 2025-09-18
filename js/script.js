// Carousel functionality
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

// script.js
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

// Intersection Observer for ingredient animation
const ingredients = document.querySelectorAll('.ingredient');

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5 // Trigger when 50% of the item is visible
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // Stop observing once visible
    }
  });
}, observerOptions);

ingredients.forEach(ingredient => {
  observer.observe(ingredient);
});

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
});

// Pop-up sutil de conversão
document.addEventListener('DOMContentLoaded', () => {
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

    }, 10000); // 10 segundos
  }
});

// Add CSS for the popup (should ideally be in style.css, but for quick demo, adding here)
const popupStyle = document.createElement('style');
popupStyle.innerHTML = `
  .conversion-popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(216, 201, 232, 0.8); /* lilás suave */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10000;
    backdrop-filter: blur(5px);
    opacity: 0;
    animation: fadeIn 0.5s forwards;
  }

  .popup-content {
    background: white;
    padding: 30px;
    border-radius: 15px;
    text-align: center;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    position: relative;
    max-width: 400px;
    margin: 20px;
  }

  .popup-content p {
    font-family: 'Lora', serif;
    font-size: 1.1rem;
    margin-bottom: 15px;
    color: #444;
  }

  .popup-content .btn-mystic {
    margin-top: 20px;
    background: linear-gradient(135deg, #D4AF37, #B19CD9);
    color: white;
    border: none;
    padding: 12px 25px;
    border-radius: 10px;
    font-size: 1.1rem;
    box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
  }

  .close-popup {
    position: absolute;
    top: 15px;
    right: 15px;
    font-size: 1.5rem;
    cursor: pointer;
    color: #888;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;
document.head.appendChild(popupStyle);

// Mini-contador de velas vendidas (adicionar ao HTML)
const counterElement = document.createElement('p');
counterElement.className = 'counter';
counterElement.innerHTML = '✨ 128 velas já acenderam corações em todo o Brasil.';

const testimonialSection = document.querySelector('.testimonial');
if (testimonialSection) {
  testimonialSection.parentNode.insertBefore(counterElement, testimonialSection.nextSibling);
}

// QR Code (placeholder, real generation needs external tool)
const qrCodeContainer = document.createElement('div');
qrCodeContainer.className = 'qr-code-container';
qrCodeContainer.innerHTML = `
  <img src="icons/qr.svg" alt="QR Code" class="qr-code-invisible">
`;
const footer = document.querySelector('footer');
if (footer) {
  footer.appendChild(qrCodeContainer);
}

// Som sutil ao clicar em qualquer botão CTA — o suspiro da chama
document.querySelectorAll('.btn-mystic').forEach(btn => {
  btn.addEventListener('click', () => {
    const audio = new Audio('sounds/sininho.mp3');
    audio.volume = 0.3;
    audio.play().catch(e => console.log("Áudio bloqueado — normal em navegadores"));
  });
});

// Movimenta as estrelas como fumaça de incenso ao rolar
window.addEventListener('scroll', () => {
  const scrollY = window.pageYOffset;
  document.getElementById('particles').style.transform = `translateY(${scrollY * 0.05}px)`;
});

// Ritual de boas-vindas — o primeiro abraço
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


