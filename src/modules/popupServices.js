const popupServices = () => {
    document.addEventListener('DOMContentLoaded', function() {
        const openModalButtons = document.querySelectorAll('.service-button');
        const closeModalButton = document.querySelector('.services-modal__close');
        const overlay = document.querySelector('.overlay');
        const modal = document.querySelector('.services-modal');

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

        openModalButtons.forEach(button => {
            button.addEventListener('click', openModal);
        });

        closeModalButton.addEventListener('click', closeModal);
        overlay.addEventListener('click', closeOnOverlayClick);
    });
};




export default popupServices