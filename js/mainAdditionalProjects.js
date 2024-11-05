
// Additional Projects JS

document.addEventListener('DOMContentLoaded', () => {
    const sections = ['figma', 'landingPages', 'webDevelopment', 'componentLayouts', 'animationMotion'];

    sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
            const prevBtn = section.querySelector('.prev');
            const nextBtn = section.querySelector('.next');
            const slider = section.querySelector('.sliderCards');
            const cards = slider ? slider.querySelectorAll('.projectCards') : null;

            if (!prevBtn || !nextBtn || !slider || !cards) {
                console.warn(`Elementos no encontrados en la sección: ${sectionId}`);
                return;
            }

            let currentIndex = 0;

            const updateSlider = () => {
                setTimeout(() => {
                    slider.scrollLeft = cards[currentIndex].offsetLeft;
                }, 100); // Retraso de 100 ms
            };

            prevBtn.addEventListener('click', () => {
                if (currentIndex > 0) {
                    currentIndex--;
                } else {
                    currentIndex = cards.length - 1;
                }
                updateSlider();
            });

            nextBtn.addEventListener('click', () => {
                if (currentIndex < cards.length - 1) {
                    currentIndex++;
                } else {
                    currentIndex = 0;
                }
                updateSlider();
            });
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
