AOS.init({
  duration: 1200,
  once: true,
  offset: 100,
  easing: "ease-out-cubic",
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
});

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  const scrolled = window.scrollY > 50;

  if (scrolled) {
    navbar.style.background = "rgba(255, 255, 255, 0.98)";
    navbar.style.boxShadow = "0 2px 30px rgba(0,0,0,0.15)";
    navbar.style.backdropFilter = "blur(20px)";
  } else {
    navbar.style.background = "rgba(255, 255, 255, 0.95)";
    navbar.style.boxShadow = "0 2px 20px rgba(0,0,0,0.1)";
    navbar.style.backdropFilter = "blur(10px)";
  }
});

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");

      // Add stagger effect for cards
      if (entry.target.classList.contains("about-card")) {
        const cards =
          entry.target.parentElement.querySelectorAll(".about-card");
        cards.forEach((card, index) => {
          setTimeout(() => {
            card.classList.add("visible");
          }, index * 200);
        });
      }
    }
  });
}, observerOptions);

document.querySelectorAll(".fade-in-up").forEach((el) => {
  observer.observe(el);
});

const carousel = document.getElementById("facilitiesCarousel");
if (carousel) {
  const carouselInstance = new bootstrap.Carousel(carousel, {
    interval: 4000,
    pause: "hover",
    touch: true,
    keyboard: true,
  });

  carousel.addEventListener("slide.bs.carousel", function (e) {
    const activeItem = e.relatedTarget;
    const img = activeItem.querySelector("img");
    if (img) {
      img.style.transform = "scale(1.1)";
      setTimeout(() => {
        img.style.transform = "scale(1)";
      }, 100);
    }
  });
}

document.querySelectorAll(".about-card, .service-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-15px) scale(1.02)";
    this.style.boxShadow = "0 30px 60px rgba(0,0,0,0.2)";
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
    this.style.boxShadow = "0 15px 35px rgba(0,0,0,0.1)";
  });
});

window.addEventListener("scroll", function () {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector(".hero-section");
  if (hero) {
    const rate = scrolled * -0.5;
    hero.style.transform = `translateY(${rate}px)`;
  }
});

function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = "";

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  setTimeout(type, 1000);
}

window.addEventListener("load", function () {
  const heroTitle = document.querySelector(".hero-content h1");
  if (heroTitle) {
    const originalText = heroTitle.textContent;
    typeWriter(heroTitle, originalText, 150);
  }
});

function createParticles() {
  const hero = document.querySelector(".hero-section");
  if (!hero) return;

  for (let i = 0; i < 50; i++) {
    const particle = document.createElement("div");
    particle.style.cssText = `
                    position: absolute;
                    width: 2px;
                    height: 2px;
                    background: rgba(255,255,255,0.3);
                    border-radius: 50%;
                    pointer-events: none;
                    animation: float ${
                      3 + Math.random() * 4
                    }s ease-in-out infinite;
                    left: ${Math.random() * 100}%;
                    top: ${Math.random() * 100}%;
                    animation-delay: ${Math.random() * 2}s;
                `;
    hero.appendChild(particle);
  }
}

window.addEventListener("load", createParticles);

window.addEventListener("load", function () {
  document.body.style.opacity = "0";
  document.body.style.transition = "opacity 0.8s ease-in-out";
  setTimeout(() => {
    document.body.style.opacity = "1";
  }, 100);
});

function revealOnScroll() {
  const reveals = document.querySelectorAll(".fade-in-up");

  reveals.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

document
  .querySelectorAll(".btn-hero, .btn-book, .btn-service")
  .forEach((button) => {
    button.addEventListener("click", function (e) {
      const ripple = document.createElement("span");
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.cssText = `
                    position: absolute;
                    width: ${size}px;
                    height: ${size}px;
                    left: ${x}px;
                    top: ${y}px;
                    background: rgba(255,255,255,0.3);
                    border-radius: 50%;
                    transform: scale(0);
                    animation: ripple 0.6s linear;
                    pointer-events: none;
                `;

      this.style.position = "relative";
      this.style.overflow = "hidden";
      this.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });

const style = document.createElement("style");
style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
document.head.appendChild(style);
