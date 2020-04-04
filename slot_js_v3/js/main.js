'use strict';

{
    const panels = ['◯', '△', '☆'];
    let timers = [];
    let results = [];
    let stopCount = 0;
    let isPlaying = false;

    const panel0 = document.getElementById('panel0');
    const panel1 = document.getElementById('panel1');
    const panel2 = document.getElementById('panel2');
    const btn0 = document.getElementById('btn0');
    const btn1 = document.getElementById('btn1');
    const btn2 = document.getElementById('btn2');
    const spinButton = document.getElementById('spinButton');

    spinButton.addEventListener('click', () => {
        if (isPlaying) return;
        isPlaying = true;
        spinButton.className = 'inactive';
        btn0.className = 'btn';
        btn1.className = 'btn';
        btn2.className = 'btn';
        panel0.className = 'panel';
        panel1.className = 'panel';
        panel2.className = 'panel';

        runSlot(0, panel0);
        runSlot(1, panel1);
        runSlot(2, panel2);
    });

    function runSlot(n, panel) {
        panel.textContent = panels[Math.floor(Math.random() * panels.length)];
        timers[n] = setTimeout(function() {
            runSlot(n, panel)
        }, 50);
    }

    btn0.addEventListener('click', () => {
        stopSlot(0, panel0, this);
    });

    btn1.addEventListener('click', () => {
        stopSlot(1, panel1, this);
    });

    btn2.addEventListener('click', () => {
        stopSlot(2, panel2, this);
    });

    function stopSlot(n, panel, btn) {
        if (!isPlaying || results[n] != undefined) return;
        btn.className = 'btn inactive';
        clearTimeout(timers[n]);
        results[n] = panel.textContent;
        stopCount++;

        if (stopCount === 3) {
            //check
            checkResults();

            // init
            isPlaying = false;
            timers = [];
            results = [];
            stopCount = 0;
            spinButton.className = '';
        }
    }

    function checkResults() {
        if (results[0] !== results[1] && results[0] !== results[2]) {
            panel0.className = 'panel unmatched';
        }
        if (results[1] !== results[0] && results[1] !== results[2]) {
            panel1.className = 'panel unmatched';
        }
        if (results[2] !== results[1] && results[2] !== results[0]) {
            panel2.className = 'panel unmatched';
        }
    }
}