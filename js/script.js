// Напишите скрипт для страницы из 3й практической работы, который, если после загрузки страницы прошло 7 секунд 
// и действий на странице не осуществлено, то случайный блок, начинает мигать, если браузер не IE (moz, Ch, Ed).

let timer = setTimeout(function(){
    let block = document.querySelectorAll('body *:not(option)');
    let randomBlock = block[Math.floor(Math.random()*block.length)];
    let light = false;
    setInterval(function(){
        if (light) {
            randomBlock.style.backgroundColor = "red";
            light = false;
        } else {
            randomBlock.style.backgroundColor = "white";
            light = true;
        }
    },500);
},2000); 

let body = document.querySelector('body');

body.addEventListener('click',deletetimeout);
body.addEventListener('mousemove',deletetimeout);
body.addEventListener('keydown',deletetimeout);

function deletetimeout(){
    clearInterval(timer);
}