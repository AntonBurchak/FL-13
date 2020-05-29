const foreword = document.querySelector('.foreword');
const clks = document.querySelectorAll('.clk');
const lightOn = document.querySelector('.foreword #backlightOn');


lightOn.addEventListener('click', () => {
    lightOn.classList.toggle('on');

    if(lightOn.classList.contains('on')) {
        lightOn.textContent = 'Выключить подсветку';
    }  else {
        lightOn.textContent = 'Включить подсветку';
    }
    clks.forEach(el => el.classList.toggle('pulse')); 
});


window.addEventListener('load', () => {
    setTimeout(() => foreword.classList.add('active'), 1500);
    
});