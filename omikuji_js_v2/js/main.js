'use strict';

{
    document.getElementById('btn').addEventListener('click', () => {
        const results = ['大吉', '小吉', '中吉', '凶', '吉'];
        const result = Math.floor(Math.random() * results.length);

        document.getElementById('result').innerHTML = results[result];
    });

    document.getElementById('btn').addEventListener('mousedown', () => {
        document.getElementById('btn').className = 'pushed';
    });

    document.getElementById('btn').addEventListener('mouseup', () => {
        document.getElementById('btn').className = '';
    });
}
