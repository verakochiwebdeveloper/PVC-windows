const slider = () => {
  //portfolio-content
  //portfolio-item
  const sliderBlock = document.querySelector(".portfolio-content");
  const slides = document.querySelectorAll(".portfolio-item");
  const dots = document.querySelectorAll('dot')
  let currentSlide = 0;
  let interval; 

  slides.forEach((slide, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.setAttribute('data-slide', index);
    sliderBlock.appendChild(dot);

    if(event.target.matches('.dot')) {
      currentSlide = parseInt(event.target.getAttribute('data-slide'));
    }
    
  });

  

  const prevSlide = (elems, index, strClass) => {
    elems[index].classList.remove(strClass)
  };
  const nextSlide = (elems, index, strClass) => {
    elems[index].classList.add(strClass)
  };

  const autoSlide = () => {
    prevSlide(slides, currentSlide, 'portfolio-item-active')
    prevSlide(dots, currentSlide, 'dot-active')
    currentSlide++
    if(currentSlide >= slides.length) {
        currentSlide = 0
    }
    nextSlide(slides, currentSlide, 'portfolio-item-active')
    nextSlide(dots, currentSlide, 'dot-active')
  };


  const startSlide = ( timer = 1500) => {
    interval = setInterval(autoSlide, timer)
  };
  const stopSlide = () => {
    clearInterval(interval)
  };

  sliderBlock.addEventListener('click', (event) => {
    event.preventDefault()

    if(!event.target.matches('.dot, .portfolio-btn')) {
      return
    }

    prevSlide(slides, currentSlide, 'portfolio-item-active')
    prevSlide(dots, currentSlide, 'dot-active')

    if(event.target.matches('#arrow-right')) {
      currentSlide++

    } else if(event.target.matches('#arrow-left')) {
      currentSlide--

    } else if(event.target.classList.contains('dot')) {
      dots.array.forEach((dot, index) => {
        if(event.target === dot) {
          currentSlide = index
        } 

        
      });

      if(currentSlide >= slides.length) {
        currentSlide = 0
      }

      if(currentSlide < 0 ) {
        currentSlide = slides.length -1
      }

    }
    nextSlide(slides, currentSlide, 'portfolio-item-active')
    nextSlide(dots, currentSlide, 'dot-active')
  })

  sliderBlock.addEventListener('mouseinter', (event) =>{
    if(event.target.matches('.dot, .portfolio-btn')) {
      stopSlide(2000)
    }
  }, true)

  sliderBlock.addEventListener('mouseleave', (event) =>{
    if(event.target.matches('.dot, .portfolio-btn')) {
      startSlide(2000)
    }
  },true)

  startSlide(2000)
};

export default slider;
