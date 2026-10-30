const buttons = document.querySelectorAll('button');

function changeColor() {

    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    this.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
}

for (const button of buttons) {
    button.addEventListener('click', changeColor);
}