        // Этот скрипт нужен для фиксации навигации и обработки формы.
        // Вы можете скопировать его из вашего script.js или добавить сюда.
        // Если у вас есть общий script.js, лучше вынести эти функции туда.

        // Fix navigation on scroll
        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // ==========================================================
        // JavaScript для отправки формы в Google Таблицу
        // ==========================================================

        const form = document.getElementById('contactForm');
        const formStatus = document.getElementById('form-status');

        form.addEventListener('submit', async function(e) {
            e.preventDefault(); // Предотвращаем стандартную отправку формы

            formStatus.textContent = 'Отправка...';
            formStatus.className = ''; // Очищаем классы статуса

            const formData = new FormData(form);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });

            // Замените YOUR_WEB_APP_URL на URL вашего развернутого Google Apps Script
            const scriptUrl = 'https://script.google.com/macros/s/AKfycbxMXXUTPvsbzQo42zarwhVqAAIO_3IHMDBK53p2Zip9e5kJh-YMSwh3PochbfSbfViotA/exec'; 

            try {
                const response = await fetch(scriptUrl, {
                    method: 'POST',
                    mode: 'no-cors', // Важно для кросс-доменных запросов к Google Apps Script
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                });

                // Поскольку 'no-cors' режим не позволяет читать ответ,
                // мы просто предполагаем успех, если нет явной ошибки сети.
                // В реальном приложении можно настроить CORS на Google Apps Script
                // и получать более точные ответы.

                formStatus.textContent = 'Message sent successfully! We will contact you shortly.';
                formStatus.className = 'success';
                form.reset(); // Очищаем форму после успешной отправки

            } catch (error) {
                console.error('Ошибка отправки формы:', error);
                formStatus.textContent = 'An error occurred while sending the message. Please try again.';
                formStatus.className = 'error';
            }
        });
