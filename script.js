document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('randomButton');
    const displayText = document.getElementById('displayText');
    const background = document.getElementById('background');

    button.addEventListener('mouseover', moveButton);
    button.addEventListener('click', showText);

    function moveButton() {
        const backgroundRect = background.getBoundingClientRect();
        const buttonWidth = button.clientWidth;
        const buttonHeight = button.clientHeight;

        const maxX = backgroundRect.width - buttonWidth;
        const maxY = backgroundRect.height - buttonHeight;

        const x = Math.random() * maxX;
        const y = Math.random() * maxY;

        button.style.position = 'absolute';
        button.style.left = `${x}px`;
        button.style.top = `${y}px`;
    }

    function showText() {
        displayText.style.display = 'block';
    }
});
