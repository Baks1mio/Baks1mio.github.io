addEventListener('DOMContentLoaded', () => {

    // Валидация формы

    const inputs = document.querySelectorAll('.form__text-input'),
        checkbox = document.querySelector('.form__checkbox'),
        form = document.querySelector('form');



    function showError(field, errorText) {
        if (field.nextElementSibling && field.nextElementSibling.textContent === errorText) {
            return;
        }
        field.classList.add('form__text-input_err');
        const err = document.createElement('span');
        field.after(err);
        err.classList.add('form__error');
        err.textContent = errorText;
        hideError(field, err);
    }

    function hideError(field, err) {
        field.addEventListener('input', () => {
            field.classList.remove('form__text-input_err');
            err.remove();
        });
    }

    inputs.forEach((item) => {
        item.addEventListener('blur', () => {
            if (item.value.length === 0) {
                showError(item, 'Поле не заполнено');
            }
        });
    });

    function errorCheckbox(checkbox, errorText) {
        if (checkbox.nextElementSibling && checkbox.nextElementSibling.textContent === errorText) {
            return;
        }
        const err = document.createElement('span');
        checkbox.after(err);
        err.classList.add('form__checkbox-error');
        err.textContent = errorText;
        hideErrorCheckBox(checkbox, err);
    }

    function hideErrorCheckBox(checkbox, err) {
        checkbox.addEventListener('click', () => {
            if (checkbox.checked) {
                err.remove();
            }
        });
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let validate = true;

        inputs.forEach(item => {
            if (item.value.length === 0) {
                validate = false;
                showError(item, 'Поле не заполнено');

            }
        });

        if (!checkbox.checked) {
            validate = false;
            errorCheckbox(checkbox, 'Установите флажок');
        }

        if (validate) {
            form.reset();
            alert('Заявка успешно отправлена!');
        }

    });


    // Открытие-закрытие формы

    const overlay = document.querySelector('.overlay'),
        orderButtons = document.querySelectorAll('.catalog__item-order'),
        closeButton = document.querySelector('.close-btn');

    orderButtons.forEach(orderButton => {
        orderButton.addEventListener('click', () => {
            overlay.classList.add('overlay-show');
        });
    });

    closeButton.addEventListener('click', () => {
        overlay.classList.remove('overlay-show');
    });

    overlay.addEventListener('click', (e) => {
        if (e.target && e.target.matches('.overlay')) {
            overlay.classList.remove('overlay-show');
        }
    });


});