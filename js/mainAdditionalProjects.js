
// Additional Projects JS

document.addEventListener('DOMContentLoaded', () => {
    const sections = ['figma', 'landingPages', 'webDevelopment', 'componentLayouts', 'animationMotion'];

    sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
            const prevBtn = section.querySelector('.prev');
            const nextBtn = section.querySelector('.next');
            const slider = section.querySelector('.sliderCards');
            const cards = slider.querySelectorAll('.projectCards');
            const cardWidth = cards[0].offsetWidth; // Ancho de una tarjeta
            const visibleWidth = slider.clientWidth; // Ancho visible del contenedor

            if (!prevBtn || !nextBtn || !slider || cards.length === 0) {
                console.warn(`Elementos no encontrados en la sección: ${sectionId}`);
                return;
            }

            // Función para hacer scroll hacia la izquierda
            const scrollLeft = () => {
                if (slider.scrollLeft <= 0) {
                    // Si estamos al inicio, vamos al final
                    slider.scrollTo({
                        left: slider.scrollWidth - visibleWidth,
                        behavior: 'smooth'
                    });
                } else {
                    slider.scrollBy({
                        left: -cardWidth,
                        behavior: 'smooth'
                    });
                }
            };

            // Función para hacer scroll hacia la derecha
            const scrollRight = () => {
                if (slider.scrollLeft + visibleWidth >= slider.scrollWidth) {
                    // Si estamos al final, vamos al inicio
                    slider.scrollTo({
                        left: 0,
                        behavior: 'smooth'
                    });
                } else {
                    slider.scrollBy({
                        left: cardWidth,
                        behavior: 'smooth'
                    });
                }
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
//             const cardWidth = slider.querySelector('.projectCards').offsetWidth; // Obtener ancho de una tarjeta

//             if (!prevBtn || !nextBtn || !slider) {
//                 console.warn(`Elementos no encontrados en la sección: ${sectionId}`);
//                 return;
//             }

//             // Función para hacer scroll relativo a la izquierda
//             const scrollLeft = () => {
//                 slider.scrollBy({
//                     left: -cardWidth, // Desplazar una tarjeta a la izquierda
//                     behavior: 'smooth'
//                 });
//             };

//             // Función para hacer scroll relativo a la derecha
//             const scrollRight = () => {
//                 slider.scrollBy({
//                     left: cardWidth, // Desplazar una tarjeta a la derecha
//                     behavior: 'smooth'
//                 });
//             };

//             prevBtn.addEventListener('click', scrollLeft);
//             nextBtn.addEventListener('click', scrollRight);
//         }
//     });
// });
