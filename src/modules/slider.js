const slider = () => {
    document.addEventListener('DOMContentLoaded', function() {
        const slides = document.querySelectorAll('.slide');
        let currentSlide = 0;
    
        function showSlide(index) {
            slides.forEach((slide, i) => {
                if (i >= index && i < index + 3) {
                    slide.style.display = 'block';
                } else {
                    slide.style.display = 'none';
                }
            });
        }
    
        function nextSlide() {
            currentSlide = (currentSlide + 1) % (slides.length - 2);
            showSlide(currentSlide);
        }
    
        function prevSlide() {
            currentSlide = (currentSlide - 1 + slides.length - 2) % (slides.length - 2);
            showSlide(currentSlide);
        }
    
        document.querySelector('.next').addEventListener('click', nextSlide);
        document.querySelector('.prev').addEventListener('click', prevSlide);
    
        showSlide(currentSlide);
    });
    
}

export default slider