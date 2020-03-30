'use strict';

function getOmikuji() {
    const omikuji = ["大吉", "中吉", "小吉", "凶", "大凶"];
    let result = Math.floor(Math.random() * omikuji.length);
    document.getElementById('result').innerHTML = omikuji[result];
}   
