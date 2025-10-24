var anstrue = false;

function Right2() {
    const yes = document.getElementById('true');
const no = document.getElementById('false');
    if(anstrue === false){
        anstrue = true;
        yes.style.display = 'block';
    const current = parseInt(sessionStorage.getItem('counter')) || 0;
    sessionStorage.setItem('counter', current + 2);
    }
}

function Right4() {
    const yes = document.getElementById('true');
const no = document.getElementById('false');
    if(anstrue === false){
        anstrue = true;
        yes.style.display = 'block';
    const current = parseInt(sessionStorage.getItem('counter')) || 0;
    sessionStorage.setItem('counter', current + 4);
        }
}

function Right6() {
    const yes = document.getElementById('true');
const no = document.getElementById('false');
    if(anstrue === false){
        anstrue = true;
        yes.style.display = 'block';
    const current = parseInt(sessionStorage.getItem('counter')) || 0;
    sessionStorage.setItem('counter', current + 6);
}
}

function Right8() {
    const yes = document.getElementById('true');
const no = document.getElementById('false');
    if(anstrue === false){
        anstrue = true;
        yes.style.display = 'block';
    const current = parseInt(sessionStorage.getItem('counter')) || 0;
    sessionStorage.setItem('counter', current + 8);
}
}

function Right10() {
    const yes = document.getElementById('true');
const no = document.getElementById('false');
    if(anstrue === false){
        anstrue = true;
        yes.style.display = 'block';
    const current = parseInt(sessionStorage.getItem('counter')) || 0;
    sessionStorage.setItem('counter', current + 10);
}
}
function error(){
    const yes = document.getElementById('true');
const no = document.getElementById('false');
    anstrue = true;
    no.style.display = 'block';
}

const cur = parseInt(sessionStorage.getItem('ost')) || 11;
sessionStorage.setItem('ost', cur - 1);