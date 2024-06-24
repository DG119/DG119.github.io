document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('randomButton');
    const displayText = document.getElementById('displayText');
    const content = document.getElementById('content');

    let teleportCount = 0;
    const maxTeleports = 13;

    button.addEventListener('mouseover', moveButton);
    button.addEventListener('click', showText);

    function moveButton() {
        if (teleportCount >= maxTeleports) {
            button.removeEventListener('mouseover', moveButton);
            return;
        }

        const contentRect = content.getBoundingClientRect();

        const maxX = contentRect.width - button.clientWidth;
        const maxY = contentRect.height - button.clientHeight;

        const x = Math.random() * maxX;
        const y = Math.random() * maxY;

        button.style.position = 'absolute';
        button.style.left = `${x}px`;
        button.style.top = `${y}px`;

        teleportCount++;
    }

    function showText() {
        //displayText.style.display = 'block';
        background.style.display = 'block';
        button.style.display = 'none';
    }
});
