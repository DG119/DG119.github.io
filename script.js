const button = document.getElementById('randomButton');
const displayText = document.getElementById('displayText');

button.addEventListener('mouseover', moveButton);
button.addEventListener('click', showText);

function moveButton() {
    const x = Math.random() * (window.innerWidth - button.clientWidth);
    const y = Math.random() * (window.innerHeight - button.clientHeight);
    button.style.position = 'absolute';
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
}

function showText() {
    displayText.style.display = 'block';
}
