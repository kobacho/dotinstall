'use strict';

let i = 0;
let r = [];
let timerId;

function spin() {
    document.getElementById('spin_' + i).textContent= Math.floor(Math.random() * 10);
    timerId = setTimeout(spin, 100);
}

function stop() {
    r[i] = document.getElementById('spin_' + i).textContent;
    i++;
    if (i > 2) {
        clearTimeout(timerId);
        r.sort();
        if (r[0] == r[1] && r[0] == r[2]) {
            alert("3つ揃った!");
        } else if (r[0] == r[1] || r[1] == r[2]) {
            alert("2つ揃った!");
        } else {
            alert("残念!");
        }
    }
}

spin();