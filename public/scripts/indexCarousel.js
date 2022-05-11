document.addEventListener('DOMContentLoaded', ()=>{
    const carouselElements= document.querySelectorAll('.carousel');
    M.Carousel.init(carouselElements, {
        duration: 150
    })
})