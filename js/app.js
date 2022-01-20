const empty = document.querySelectorAll('.empty');
const dropBox = document.querySelector('.drop__box');
const dropBoxTask = document.getElementsByClassName('.drop__box');
const assets = document.querySelector('.assets');


dropBox.addEventListener('dragstart', dragStart);
dropBox.addEventListener('dragend', dragEnd);

// Обрабатывает начало перетаскивания. Место где он был, должно быть прозрачным, но там спавнится новый элемент
function dragStart () {
    requestAnimationFrame(() => (
    this.style.backgroundColor = 'transparent'
    ), 0);
};
// Обрабатывает конец перетаскивания
function dragEnd () {
};

// Чекаю каждую пустую область
for (let item of empty) {
        item.addEventListener('dragover', dragOver);
        item.addEventListener('dragenter', dragEnter);
        item.addEventListener('dragleave', dragLeave);
        item.addEventListener('drop', dragDrop);
}

function dragOver(event) {
    event.preventDefault();
}
// Когда навожу на пустой элемент, дает подсказку, куда упадет элемент
function dragEnter() {
    this.style.backgroundColor = 'rgb(0, 255, 255)'
}
// Когда ухожу с пустого блока, даю ему опять серый цвет

function dragLeave() {
    this.style.backgroundColor = 'rgb(194, 194, 194)'
}
// Когда элемент падает, добавляю его в поле, и также спавню новый в asset'e
function dragDrop() {
    this.className =  'drop__box'
    assets.innerHTML = `<div class="drop__box" draggable="true"></div>`;
}

