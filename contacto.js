const contactForm = document.getElementById('contactForm');
        const successAlert = document.getElementById('successAlert');

        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validación de campos
            const nombre = document.getElementById('nombre').value.trim();
            const email = document.getElementById('email').value.trim();
            const asunto = document.getElementById('asunto').value;
            const mensaje = document.getElementById('mensaje').value.trim();
            
            if (!nombre || !email || !asunto || !mensaje) {
                // Mostrar campos inválidos
                if (!nombre) document.getElementById('nombre').classList.add('is-invalid');
                if (!email) document.getElementById('email').classList.add('is-invalid');
                if (!asunto) document.getElementById('asunto').classList.add('is-invalid');
                if (!mensaje) document.getElementById('mensaje').classList.add('is-invalid');
                return;
            }

            // Validar formato de email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                document.getElementById('email').classList.add('is-invalid');
                return;
            }

            // Animación de loading en el botón
            const submitBtn = contactForm.querySelector('.btn-submit');
            const originalText = submitBtn.innerHTML;
            submitBtn.classList.add('loading');
            submitBtn.innerHTML = '<span style="opacity: 0;">Enviando...</span>';

            // Simular envío (aquí irían las peticiones AJAX reales)
            setTimeout(() => {
                // Mostrar mensaje de éxito
                successAlert.style.display = 'flex';
                
                // Scroll suave al mensaje
                successAlert.scrollIntoView({ behavior: 'smooth', block: 'center' });
                
                // Reset del formulario
                contactForm.reset();
                
                // Restaurar botón
                submitBtn.classList.remove('loading');
                submitBtn.innerHTML = originalText;
                
                // Ocultar mensaje después de 6 segundos
                setTimeout(() => {
                    successAlert.style.display = 'none';
                }, 6000);
            }, 2000);
        });

        // Remover clase de inválido al escribir
        const inputs = contactForm.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('input', function() {
                this.classList.remove('is-invalid');
            });
        });

        // Scroll Reveal Animation
        function revealOnScroll() {
            const reveals = document.querySelectorAll('.reveal');
            
            reveals.forEach(element => {
                const windowHeight = window.innerHeight;
                const elementTop = element.getBoundingClientRect().top;
                const revealPoint = 150;
                
                if (elementTop < windowHeight - revealPoint) {
                    element.classList.add('active');
                }
            });
        }

        window.addEventListener('scroll', revealOnScroll);
        revealOnScroll(); // Initial check

        // Parallax effect on hero
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('.hero-header');
            if (hero) {
                hero.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        });

        // Smooth scroll for internal links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Input focus effects
        const formControls = document.querySelectorAll('.form-control, .form-select');
        formControls.forEach(control => {
            control.addEventListener('focus', function() {
                this.parentElement.classList.add('focused');
            });
            
            control.addEventListener('blur', function() {
                if (!this.value) {
                    this.parentElement.classList.remove('focused');
                }
            });
        });