'use strict';

{
    const btn = document.getElementById('btn');

    btn.addEventListener('click', () => {
        const n = Math.random();
        
        if (n < 0.05) {
            btn.textContent = '大吉'; // 5%
        } else if (n < 0.2) {
            btn.textContent = '中吉'; // 15%
        } else {
            btn.textContent = '凶'; // 80%
        }
    });

    btn.addEventListener('mousedown', () => {
        btn.classList.add('pushed');
    });

    btn.addEventListener('mouseup', () => {
        btn.classList.remove('pushed');
    });
}
