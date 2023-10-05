const spanElements = document.querySelectorAll('#about__home__section h2 span');
const initialColor = '#161617'; // Börja med din startfärg
const changedColor = 'lightblue'; // Önskad ändringsfärg

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    spanElements.forEach((span, index) => {
        const changePosition = index * 65; // Justera detta för önskad effekt

        if (scrollPosition > changePosition) {
            span.style.color = changedColor;
        } else {
            span.style.color = initialColor;
        }
    });
});

