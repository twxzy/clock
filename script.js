let darkButton = document.getElementById('dark');
let size = document.querySelectorAll('.size');
let card = document.querySelectorAll('.card');
let body = document.querySelector('body');
let pmAm = document.querySelector('.pmAm');
let darkMode = document.querySelector('.darkMode');

/*Dark Mode*/

function activateDarkMode() {
    card.forEach(card => {
        card.style.backgroundColor = '#24292D';
        card.style.transition = '0.2s background-color ease-in-out';
    });

    size.forEach(size => {
        size.style.color = 'white';
        size.style.transition = '0.2s background-color ease-in-out';
    });

    body.style.backgroundColor = '#323840';
    pmAm.style.color = 'white';

    darkButton.remove();

    darkMode.innerHTML = '<button id="light"><i class="bi bi-sun-fill"></i></button>';

    let lightButton = document.getElementById('light');

    lightButton.addEventListener("click", activateLightMode);
}

/*Light Mode*/

function activateLightMode() {
    card.forEach(card => {
        card.style.backgroundColor = '#F0F8FF';
        card.style.transition = '0.2s background-color ease-in-out';
    });

    size.forEach(size => {
        size.style.color = '#24292D';
        size.style.transition = '0.2s background-color ease-in-out';
    });

    body.style.backgroundColor = 'white';
    pmAm.style.color = '#24292D';

    let lightButton = document.getElementById('light');
    lightButton.remove();

    darkMode.innerHTML = '<button id="dark"><i class="bi bi-moon-fill"></i></button>';

    darkButton = document.getElementById('dark');
    darkButton.addEventListener('click', activateDarkMode);
}

darkButton.addEventListener('click', activateDarkMode);
