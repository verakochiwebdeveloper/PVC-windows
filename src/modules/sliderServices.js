const sliderServices = () => {
    document.addEventListener('DOMContentLoaded', function() {
        const slides = document.querySelectorAll('.slide-d');
        let currentSlide = 0;
    
        function showSlide(index) {
            slides.forEach((slide, i) => {
                if (i >= index && i < index + 2) {
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
    
        document.querySelector('.services__arrow--left').addEventListener('click', nextSlide);
        document.querySelector('.services__arrow--right').addEventListener('click', prevSlide);
    
        showSlide(currentSlide);
    });
    
}

export default sliderServices