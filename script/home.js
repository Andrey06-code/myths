function displayParams() {
    const counterElement = document.getElementById('counter');
   
    const savedParams = sessionStorage.getItem('counter') || 0;
    counterElement.textContent = savedParams;
}

displayParams();