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

// CEP input functionality
const cepInputContainer = document.createElement('div');
cepInputContainer.className = 'cep-input-container';
cepInputContainer.innerHTML = `
  <input type="text" id="cep-input" placeholder="Digite seu CEP para ver o frete..." maxlength="8">
  <button id="send-cep-btn">Adquirir agora</button>
`;

const finalCtaSection = document.querySelector('.cta-final');
if (finalCtaSection) {
  finalCtaSection.appendChild(cepInputContainer);
}

document.addEventListener('DOMContentLoaded', () => {
  const sendCepBtn = document.getElementById('send-cep-btn');
  if (sendCepBtn) {
    sendCepBtn.addEventListener('click', () => {
      const cep = document.getElementById('cep-input').value.replace(/\D/g, '');
      if (cep.length === 8) {
        const message = `Olá! Sou apaixonada por velas místicas e gostaria de saber mais sobre o Blend Místico da Aura Celeste.\n\nQuero comprar uma vela com entrega para ${cep}.\n\nPosso pagar por PIX ou cartão?\n\n(Responda com 'sim' e me envie as opções!)`;
        window.open(`https://wa.me/554888228663?text=${encodeURIComponent(message)}`);
      } else {
        alert("Por favor, digite um CEP válido (8 dígitos).");
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
          <a href="https://wa.me/554888228663?text=Ol%C3%A1%21%20Sou%20apaixonada%20por%20velas%20m%C3%ADsticas%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20Blend%20M%C3%ADstico%20da%20Aura%20Celeste.%0A%0AQuero%20comprar%20uma%20vela%20com%20entrega%20para%20%5BCEP%20do%20cliente%5D.%0A%0APoss%20pagar%20por%20PIX%20ou%20cart%C3%A3o%3F%0A%0A%28Responda%20com%20%E2%80%98sim%E2%80%99%20e%20me%20envie%20as%20op%C3%A7%C3%B5es%21%29" class="btn-mystic">👉 Sim, quero minha vela</a>
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

// Add CSS for QR Code (should ideally be in style.css)
const qrStyle = document.createElement('style');
qrStyle.innerHTML = `
  .qr-code-invisible {
    width: 40px;
    height: 40px;
    opacity: 0.1; /* Invisible effect */
    margin-top: 10px;
  }
`;
document.head.appendChild(qrStyle);


