const popup = () => {
    document.addEventListener('DOMContentLoaded', function() {
        const openModalButton = document.querySelector('.button');
        const closeModalButton = document.querySelector('.header-modal__close');
        const overlay = document.querySelector('.overlay');
        const modal = document.querySelector('.header-modal');
    
        function openModal() {
            overlay.style.display = 'block';
            modal.style.display = 'block';
        }
    
        function closeModal() {
            overlay.style.display = 'none';
            modal.style.display = 'none';
        }
    
        function closeOnOverlayClick(event) {
            if (event.target === overlay) {
                closeModal();
            }
        }
    
        openModalButton.addEventListener('click', openModal);
        closeModalButton.addEventListener('click', closeModal);
        overlay.addEventListener('click', closeOnOverlayClick);
    });
    
    
    
}

export default popup