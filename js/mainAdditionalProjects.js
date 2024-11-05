
// Additional Projects JS

document.addEventListener('DOMContentLoaded', () => {
    const sections = ['figma', 'landingPages', 'webDevelopment', 'componentLayouts', 'animationMotion'];

    sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
            const prevBtn = section.querySelector('.prev');
            const nextBtn = section.querySelector('.next');
            const slider = section.querySelector('.sliderCards');
            const cardWidth = slider.querySelector('.projectCards').offsetWidth; // Obtener ancho de una tarjeta

            if (!prevBtn || !nextBtn || !slider) {
                console.warn(`Elementos no encontrados en la sección: ${sectionId}`);
                return;
            }

            // Función para hacer scroll relativo a la izquierda
            const scrollLeft = () => {
                slider.scrollBy({
                    left: -cardWidth, // Desplazar una tarjeta a la izquierda
                    behavior: 'smooth'
                });
            };

            // Función para hacer scroll relativo a la derecha
            const scrollRight = () => {
                slider.scrollBy({
                    left: cardWidth, // Desplazar una tarjeta a la derecha
                    behavior: 'smooth'
                });
            };

            prevBtn.addEventListener('click', scrollLeft);
            nextBtn.addEventListener('click', scrollRight);
        }
    });
});




// document.addEventListener('DOMContentLoaded', () => {
//     const sections = ['figma', 'landingPages', 'webDevelopment', 'componentLayouts', 'animationMotion'];

//     sections.forEach(sectionId => {
//         const section = document.getElementById(sectionId);
//         if (section) {
//             const prevBtn = section.querySelector('.prev');
//             const nextBtn = section.querySelector('.next');
//             const slider = section.querySelector('.sliderCards');
//             const cards = slider ? slider.querySelectorAll('.projectCards') : null;

//             if (!prevBtn || !nextBtn || !slider || !cards) {
//                 console.warn(`Elementos no encontrados en la sección: ${sectionId}`);
//                 return;
//             }

//             let currentIndex = 0;

//             const updateSlider = () => {
//                 slider.scrollLeft = cards[currentIndex].offsetLeft;
//             };

//             prevBtn.addEventListener('click', () => {
//                 if (currentIndex > 0) {
//                     currentIndex--;
//                     updateSlider();
//                 } else {
//                     currentIndex = cards.length - 1;
//                     updateSlider();
//                 }
//             });

//             nextBtn.addEventListener('click', () => {
//                 if (currentIndex < cards.length - 1) {
//                     currentIndex++;
//                     updateSlider();
//                 } else {
//                     currentIndex = 0;
//                     updateSlider();
//                 }
//             });
//         }
//     });
// });


// document.addEventListener('DOMContentLoaded', () => {
//     const sections = ['figma', 'landingPages', 'webDevelopment', 'componentLayouts', 'animationMotion'];

//     sections.forEach(sectionId => {
//         const section = document.getElementById(sectionId);
//         if (section) {
//             const prevBtn = section.querySelector('.prev');
//             const nextBtn = section.querySelector('.next');
//             const slider = section.querySelector('.sliderCards');
//             const cards = slider.querySelectorAll('.projectCards');

//             let currentIndex = 0;

//             const updateSlider = () => {
//                 slider.scrollLeft = cards[currentIndex].offsetLeft;
//             };

//             prevBtn.addEventListener('click', () => {
//                 if (currentIndex > 0) {
//                     currentIndex--;
//                     updateSlider();
//                 } else {
//                     currentIndex = cards.length - 1; // Ir al último slide
//                     updateSlider();
//                 }
//             });

//             nextBtn.addEventListener('click', () => {
//                 if (currentIndex < cards.length - 1) {
//                     currentIndex++;
//                     updateSlider();
//                 } else {
//                     currentIndex = 0; // Ir al primer slide
//                     updateSlider();
//                 }
//             });

//             // Opcional: Mover automáticamente las diapositivas cada 5 segundos
//             // setInterval(() => {
//             //     if (currentIndex < cards.length - 1) {
//             //         currentIndex++;
//             //     } else {
//             //         currentIndex = 0;
//             //     }
//             //     updateSlider();
//             // }, 5000);
//         }
//     });
// });
