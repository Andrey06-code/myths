function displayParams() {
    const counterElement = document.getElementById('counter');
   
    const savedParams = sessionStorage.getItem('counter') || 0;
    counterElement.textContent = savedParams;

    const a = document.getElementById('1.1');
    const b = document.getElementById('1.2');
    const c = document.getElementById('1.3');
    const d = document.getElementById('1.4');
    const e = document.getElementById('1.5');
    const f = document.getElementById('2.1');
    const g = document.getElementById('2.2');
    const h = document.getElementById('2.3');
    const i = document.getElementById('2.4');
    const j = document.getElementById('2.5');
    const k = document.getElementById('3.1');
    const l = document.getElementById('3.2');
    const m = document.getElementById('3.3');
    const n = document.getElementById('3.4');
    const o = document.getElementById('3.5');
    const p = document.getElementById('4.1');
    const q = document.getElementById('4.2');
    const r = document.getElementById('4.3');
    const s = document.getElementById('4.4');
    const t = document.getElementById('4.5');

    a.style.visibility = sessionStorage.getItem('1.1') || 'visible';
    b.style.visibility = sessionStorage.getItem('1.2') || 'visible';
    c.style.visibility = sessionStorage.getItem('1.3') || 'visible';
    d.style.visibility = sessionStorage.getItem('1.4') || 'visible';
    e.style.visibility = sessionStorage.getItem('1.5') || 'visible';

    p.style.visibility = sessionStorage.getItem('4.1') || 'visible';
    q.style.visibility = sessionStorage.getItem('4.2') || 'visible';
    r.style.visibility = sessionStorage.getItem('4.3') || 'visible';
    s.style.visibility = sessionStorage.getItem('4.4') || 'visible';
    t.style.visibility = sessionStorage.getItem('4.5') || 'visible';
    
const ft = parseInt(sessionStorage.getItem('ost')) || 11;
if (ft === 1) {
    const form = document.getElementById('form');
    
        form.style.display = 'block';
    
}
}

displayParams();