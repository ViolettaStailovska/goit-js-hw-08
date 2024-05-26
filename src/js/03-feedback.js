const form = document.querySelector('.feedback-form');
        const emailInput = form.elements['email'];
        const messageTextarea = form.elements['message'];
        const LOCALSTORAGE_KEY = 'feedback-form-state';
        const throttle = require('lodash.throttle');

        // Функция для сохранения данных формы в localStorage
        const saveFormDataToLocalStorage = throttle(() => {
            const formData = {
                email: emailInput.value,
                message: messageTextarea.value
            };
            localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
        }, 500);

        // Восстановление данных формы из localStorage при загрузке страницы
        const loadFormDataFromLocalStorage = () => {
            const savedData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
            if (savedData) {
                emailInput.value = savedData.email || '';
                messageTextarea.value = savedData.message || '';
            }
        };

        // Обработчик события input для обновления localStorage
        form.addEventListener('input', saveFormDataToLocalStorage);

        // Обработчик события submit для очистки данных и вывода в консоль
        form.addEventListener('submit', event => {
            event.preventDefault();
            const formData = {
                email: emailInput.value,
                message: messageTextarea.value
            };
            console.log(formData);
            form.reset();
            localStorage.removeItem(LOCALSTORAGE_KEY);
        });

        // Загрузка данных из localStorage при загрузке страницы
        window.addEventListener('load', loadFormDataFromLocalStorage);
     
