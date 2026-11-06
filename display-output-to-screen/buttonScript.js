const buttons = document.querySelectorAll('button');

// this function generates a color of the button randomly by clicking on it
function changeColor() {

    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    this.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
}

// calls the function whenever a click is made
for (const button of buttons) {
    button.addEventListener('click', changeColor);
}