function displayParams() {
    const counterElement = document.getElementById('counter');
   
    const savedParams = sessionStorage.getItem('counter') || 0;
    counterElement.textContent = savedParams;

    const a = document.getElementById('4.1');
    const b = document.getElementById('4.2');
    const c = document.getElementById('4.3');
    const d = document.getElementById('4.4');
    const e = document.getElementById('4.5');

    a.style.visibility = sessionStorage.getItem('4.1') || 'visible';
    b.style.visibility = sessionStorage.getItem('4.2') || 'visible';
    c.style.visibility = sessionStorage.getItem('4.3') || 'visible';
    d.style.visibility = sessionStorage.getItem('4.4') || 'visible';
    e.style.visibility = sessionStorage.getItem('4.5') || 'visible';
}

displayParams();