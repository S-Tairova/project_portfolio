document.addEventListener('DOMContentLoaded', function() {
    const cvButton = document.getElementById('cvButton');
    const bioLink = document.getElementById('bioLink');
    const navLinks = document.querySelector(".nav-links");
    const cvContainer = document.getElementById('cv-con');
    const closeButton = document.querySelector('.icon-box');

    const toggleCV = () => {
        const isOpen = cvContainer.classList.contains('open');
        if (isOpen) {
            cvContainer.classList.remove('open');
            cvContainer.classList.add('closed');
        } else {
            cvContainer.classList.remove('closed');
            cvContainer.classList.add('open');
        }
    };

    cvButton.addEventListener('click', toggleCV);
    bioLink.addEventListener('click', toggleCV);
    navLinks.addEventListener('click', toggleCV);
    closeButton.addEventListener('click', toggleCV);
});