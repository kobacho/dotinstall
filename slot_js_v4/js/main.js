'use strict';

{
    const panels = document.getElementsByClassName('panel');
    const spin = document.getElementById('spin');

    const cards = [
        'seven.png',
        'bell.png',
        'cherry.png'
    ];

    let timers = [];
    let stopCount = 0;

    function runSlot(n) {
        timers[n] = setTimeout(function() {
            panels[n].children[0].src =
                'img/' +
                cards[Math.floor(Math.random() * cards.length)];
            runSlot(n);
        }, 50);
    }

    function initPanel() {
        for (let i = 0; i < panels.length; i++) {
            panels[i].children[1].addEventListener('click', () => {
                if (spin.className.indexOf('inactive') !== -1) {
                    return;
                }        
                clearTimeout(timers[panels[i].children[1].dataset.index]);
                stopCount++;
                panels[i].children[1].className = 'stop inactive';
                if (stopCount === panels.length) {
                    stopCount = 0;
                    checkResults();
                    spin.className = '';
                }
            });
        }
    }

    function checkResults() {
        const img0 = panels[0].children[0];
        const img1 = panels[1].children[0];
        const img2 = panels[2].children[0];

        if (img0.src !== img1.src && img0.src !== img2.src) {
            img0.className = 'unmatched';
        }
        if (img1.src !== img0.src && img1.src !== img2.src) {
            img1.className = 'unmatched';
        }
        if (img2.src !== img0.src && img2.src !== img1.src) {
            img2.className = 'unmatched';
        }
    }

    initPanel();
    
    spin.addEventListener('click', () => {
        if (spin.className.indexOf('inactive') !== -1) {
            return;
        }
        spin.className = 'inactive';
        for (let i = 0; i < panels.length; i++) {
            runSlot(i);
            panels[i].children[0].className = '';
            panels[i].children[1].className = 'stop';
        }
    });
}