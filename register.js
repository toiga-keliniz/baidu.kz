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
            const scriptUrl = 'https://script.google.com/macros/s/AKfycbzHn8U_ht3C4EfUsjB7aIwVRxv2M80tzEyO0tqiIzUenvn0uPH06rhWMr2SGXmMlyFFcg/exec'; 

           try {
     const formData = new FormData(form); 

const response = await fetch(scriptUrl, {
    method: 'POST',
    body: formData // Отправляем объект FormData напрямую
});

        // Теперь мы можем проверить реальный ответ от сервера
        if (response.ok) {
            formStatus.textContent = 'Message sent successfully! We will contact you shortly.';
            formStatus.className = 'success';
            form.reset();
        } else {
            // Если сервер вернул ошибку
            throw new Error('Server responded with an error.');
        }

    } catch (error) {
        console.error('Form submission error:', error);
        formStatus.textContent = 'An error occurred while sending the message. Please try again.';
        formStatus.className = 'error';
    }
});
