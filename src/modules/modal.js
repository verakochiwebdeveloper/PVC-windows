import animate from './helper.js';


const modal = () => { 
    const modal = document.querySelector('.popup'); 
    const buttons = document.querySelectorAll('.popup-btn'); 
    const popupCloseBtn = modal.querySelector('.popup-close'); 

    buttons.forEach(btn => { 
        btn.addEventListener('click', () => { 
            modal.style.display = 'block'; 
        }); 
    }); 

    popupCloseBtn.addEventListener('click', () => { 
        modal.style.display = 'none'; 
    }); 

        const showModal = () => {
            modal.classList.add('show');
        };

        const hideModal = () => {
            modal.classList.remove('show');
        };

        const checkScreenWidth = () => {
            if (window.innerWidth >= 768) {
                showModal();
            }
        };

        window.addEventListener('load', checkScreenWidth);

        
        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                showModal();
                animate({
                    duration: 1000,
                    timing(timeFraction) {
                        return timeFraction;
                    },
                    draw(progress) {
                        elem.style.width = progress * 100 + '%';
                    },
                    elem: modal // Передаем modal в качестве элемента для анимации ширины
                });
            });
        });
        popupCloseBtn.addEventListener('click', () => {
            hideModal();
        });
};

export default modal;
