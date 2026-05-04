// Carousel functionality
let slideIndex = 1;

function changeSlide(n) {
  showSlide(slideIndex += n);
}

function currentSlide(n) {
  showSlide(slideIndex = n);
}

function showSlide(n) {
  const slides = document.querySelectorAll(".carousel-slide");
  const dots = document.querySelectorAll(".dot");
  
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }
  
  slides.forEach(slide => slide.classList.remove("active"));
  dots.forEach(dot => dot.classList.remove("active"));
  
  if (slides[slideIndex - 1]) {
    slides[slideIndex - 1].classList.add("active");
  }
  if (dots[slideIndex - 1]) {
    dots[slideIndex - 1].classList.add("active");
  }
}

// Auto-advance carousel every 5 seconds
setInterval(() => {
  changeSlide(1);
}, 5000);

// script.js
const container = document.getElementById("particles");

for (let i = 0; i < 15; i++) {
  const star = document.createElement("div");
  star.style.position = "absolute";
  star.style.width = "2px";
  star.style.height = "2px";
  star.style.backgroundColor = "#fff";
  star.style.borderRadius = "50%";
  star.style.opacity = Math.random() * 0.6 + 0.4;
  star.style.left = `${Math.random() * 100}%`;
  star.style.top = `${Math.random() * 100}%`;
  star.style.animation = `twinkle ${3 + Math.random() * 4}s infinite ease-in-out`;
  container.appendChild(star);
}

// Intersection Observer for ingredient animation
const ingredients = document.querySelectorAll(".ingredient");

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5 // Trigger when 50% of the item is visible
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target); // Stop observing once visible
    }
  });
}, observerOptions);

ingredients.forEach(ingredient => {
  observer.observe(ingredient);
});

// CEP input functionality
document.addEventListener("DOMContentLoaded", () => {
  const sendCepBtn = document.getElementById("send-cep-btn");
  if (sendCepBtn) {
    sendCepBtn.addEventListener("click", () => {
      const cep = document.getElementById("cep-input").value.replace(/\D/g, "");
      if (cep.length === 8) {
        const message = `Olá! Estou buscando um momento de paz e gostaria de saber mais sobre o Blend Místico da Aura Celeste.\n\nQuero comprar uma vela com entrega para mim.\n\nPosso pagar por PIX ou cartão?\n\n(Responda com \'sim\' e me envie as opções!)`;
        window.open(`https://wa.me/554888228663?text=${encodeURIComponent(message)}`);
      } else {
        alert("Por favor, digite um CEP válido (8 dígitos).");
      }
    });
  }

  const backgroundMusic = document.getElementById("background-music");
  const playPauseBtn = document.getElementById("play-pause-music");

  if (backgroundMusic && playPauseBtn) {
    playPauseBtn.addEventListener("click", () => {
      if (backgroundMusic.paused) {
        backgroundMusic.play();
        playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
      } else {
        backgroundMusic.pause();
        playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
      }
    });
  }

  // Pop-up sutil de conversão
  const hasSeenPopup = localStorage.getItem("auraCelestePopup");
  const popupOverlay = document.querySelector(".conversion-popup-overlay");
  const popup = document.querySelector(".conversion-popup");
  const closePopup = document.querySelector(".close-popup");

  if (!hasSeenPopup) {
    setTimeout(() => {
      if (popupOverlay) popupOverlay.style.display = "flex";
      if (popup) popup.style.display = "block";
    }, 10000); // 10 segundos
  }

  if(closePopup) {
    closePopup.addEventListener("click", () => {
      if (popupOverlay) popupOverlay.style.display = "none";
      if (popup) popup.style.display = "none";
      localStorage.setItem("auraCelestePopup", "true");
    });
  }

  if(popupOverlay) {
    popupOverlay.addEventListener("click", (event) => {
      if (event.target === popupOverlay) { // Garante que só fecha se clicar no overlay, não no conteúdo do popup
        if (popupOverlay) popupOverlay.style.display = "none";
        if (popup) popup.style.display = "none";
        localStorage.setItem("auraCelestePopup", "true");
      }
    });
  }
});

// Som sutil ao clicar em qualquer botão CTA — o suspiro da chama
document.querySelectorAll(".btn-mystic").forEach(btn => {
  btn.addEventListener("click", () => {
    const audio = new Audio("sounds/sininho.mp3");
    audio.volume = 0.3;
    audio.play().catch(e => console.log("Áudio bloqueado — normal em navegadores"));
  });
});

// Movimenta as estrelas como fumaça de incenso ao rolar
window.addEventListener("scroll", () => {
  const scrollY = window.pageYOffset;
  document.getElementById("particles").style.transform = `translateY(${scrollY * 0.05}px)`;
});

// Ritual de boas-vindas — o primeiro abraço
const welcome = document.createElement("div");
welcome.innerHTML = '<p style="position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);font-family:Cormorant Garamond;font-size:1.5rem;color:#D4AF37;z-index:9999;opacity:0;transition:opacity 1s;">Bem-vinda, alma tranquila.</p>';
document.body.appendChild(welcome);

setTimeout(() => {
  welcome.style.opacity = "1";
}, 500);

setTimeout(() => {
  welcome.style.opacity = "0";
}, 2500);

setTimeout(() => {
  welcome.remove();
}, 3000);
