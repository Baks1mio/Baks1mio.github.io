const inputs = document.querySelectorAll('.form__text-input');

inputs.forEach((item) => {
    item.addEventListener('blur', (e) => {
        console.log('Working');
    });
});