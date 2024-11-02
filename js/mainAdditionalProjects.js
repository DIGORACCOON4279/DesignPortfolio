
// Additional Projects JS

// document.addEventListener('DOMContentLoaded', () => {
//     const sections = ['figma', 'landingPages', 'webDevelopment', 'componentLayouts', 'animationMotion'];

//     sections.forEach(sectionId => {
//         const section = document.getElementById(sectionId);
//         if (section) {
//             const prevBtn = section.querySelector('.prev');
//             const nextBtn = section.querySelector('.next');
//             const slider = section.querySelector('.sliderCards');
//             const cards = slider ? slider.querySelectorAll('.projectCards') : null;

//             // Verificar que prevBtn, nextBtn, slider, y cards existen antes de continuar
//             if (!prevBtn || !nextBtn || !slider || !cards) {
//                 console.warn(`Elementos no encontrados en la sección: ${sectionId}`);
//                 return; // Terminar esta iteración si faltan elementos
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
                const cardWidth = cards[0].offsetWidth; // Obtiene el ancho de la primera tarjeta
                slider.scrollLeft = currentIndex * (cardWidth + 20); // 20 es el margen entre tarjetas
            };

            prevBtn.addEventListener('click', () => {
                currentIndex = (currentIndex > 0) ? currentIndex - 1 : cards.length - 1; // Regresa al último slide si está en el primero
                updateSlider();
            });

            nextBtn.addEventListener('click', () => {
                currentIndex = (currentIndex < cards.length - 1) ? currentIndex + 1 : 0; // Regresa al primer slide si está en el último
                updateSlider();
            });

            // Actualización inicial del carrusel
            updateSlider();
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
