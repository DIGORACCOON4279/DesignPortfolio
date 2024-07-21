
// document.addEventListener('DOMContentLoaded', function() {
//     let currentIndex = 0;

//     const prevArrow = document.querySelector('.details .containerSection .arrows .arrow:nth-child(1)');
//     const nextArrow = document.querySelector('.details .containerSection .arrows .arrow:nth-child(2)');
//     const slider = document.querySelector('.details .containerSection .sectionCards');
//     const cards = document.querySelectorAll('.details .containerSection .sectionCards .cards');
//     const totalSlides = cards.length;

//     prevArrow.addEventListener('click', () => {
//         moveSlide(-1);
//     });

//     nextArrow.addEventListener('click', () => {
//         moveSlide(1);
//     });

//     function moveSlide(direction) {
//         currentIndex += direction;

//         if (currentIndex < 0) {
//             currentIndex = totalSlides - 1;
//         } else if (currentIndex >= totalSlides) {
//             currentIndex = 0;
//         }

//         slider.style.transform = `translateX(-${currentIndex * 40}%)`;
//     }

//     // Opcional: Mover automáticamente las diapositivas cada 5 segundos
//     // setInterval(() => {
//     //     moveSlide(1);
//     // }, 5000);
// });

document.addEventListener('DOMContentLoaded', function() {
    let currentIndex = 0;

    const prevArrow = document.querySelector('.details .containerSection .arrows .arrow:nth-child(1)');
    const nextArrow = document.querySelector('.details .containerSection .arrows .arrow:nth-child(2)');
    const slider = document.querySelector('.details .containerSection .sectionCards');
    const cards = document.querySelectorAll('.details .containerSection .sectionCards .cards');
    const totalSlides = cards.length;
    const slideWidth = cards[0].offsetWidth + parseInt(window.getComputedStyle(cards[0]).marginRight);

    prevArrow.addEventListener('click', () => {
        moveSlide(-1);
    });

    nextArrow.addEventListener('click', () => {
        moveSlide(1);
    });

    function moveSlide(direction) {
        if (slider.classList.contains('animating')) return; // Evitar múltiples clics rápidos
        slider.classList.add('animating');

        currentIndex += direction;

        if (currentIndex < 0) {
            currentIndex = totalSlides - 1;
        } else if (currentIndex >= totalSlides) {
            currentIndex = 0;
        }

        const maxTranslate = (totalSlides - 1) * slideWidth;
        slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

        setTimeout(() => {
            slider.classList.remove('animating');
        }, 500); // Ajustar este valor según la duración de tu transición CSS
    }

    // Opcional: Mover automáticamente las diapositivas cada 5 segundos
    // setInterval(() => {
    //     moveSlide(1);
    // }, 5000);
});


document.addEventListener('DOMContentLoaded', () => {
    const sections = ['figma', 'landingPages', 'webDevelopment', 'componentLayouts', 'animationMotion'];

    sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
            const prevBtn = section.querySelector('.prev');
            const nextBtn = section.querySelector('.next');
            const slider = section.querySelector('.sliderCards');
            const cards = slider.querySelectorAll('.projectCards');

            let currentIndex = 0;

            const updateSlider = () => {
                slider.scrollLeft = cards[currentIndex].offsetLeft;
            };

            prevBtn.addEventListener('click', () => {
                if (currentIndex > 0) {
                    currentIndex--;
                    updateSlider();
                } else {
                    currentIndex = cards.length - 1; // Ir al último slide
                    updateSlider();
                }
            });

            nextBtn.addEventListener('click', () => {
                if (currentIndex < cards.length - 1) {
                    currentIndex++;
                    updateSlider();
                } else {
                    currentIndex = 0; // Ir al primer slide
                    updateSlider();
                }
            });

            // Opcional: Mover automáticamente las diapositivas cada 5 segundos
            // setInterval(() => {
            //     if (currentIndex < cards.length - 1) {
            //         currentIndex++;
            //     } else {
            //         currentIndex = 0;
            //     }
            //     updateSlider();
            // }, 5000);
        }
    });
});
