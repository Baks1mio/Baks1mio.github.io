'use strict';
const ModuleVideo = () => {

    const button = document.querySelector('.promo__link'),
        overlay = document.querySelector('[data-overlay="video"]');

    button.addEventListener('click', (e) => {
        e.preventDefault();
        overlay.classList.add('overlay-show');
    });

    overlay.addEventListener('click', (e) => {
        if (e.target && e.target.matches('.overlay')) {
            overlay.classList.remove('overlay-show');
        }
    });
};

export default ModuleVideo;
