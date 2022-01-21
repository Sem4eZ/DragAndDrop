const empty = document.querySelectorAll('.empty');
const dropBox = document.querySelector('.drop__box');
const assets = document.querySelector('.assets');
const counter = document.querySelector('.counter');
let count = 0;
let arr = [];

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
// Когда элемент падает, добавляю его в поле, и также спавню клон в asset'e
function dragDrop() {
    this.className =  'drop__box'
    assets.innerHTML = `<div class="drop__box" id="drop__box" draggable="true"></div>`;
    CheckCount();
}

function CheckCount() {
    for (let item of empty) {
        // Закидываю название каждого элемента в массив
        arr.push(item.className)
    };
    // тк. область у меня без расширения(7*6), то я могу проверить соседние элементы от него(верх, низ, право, лево),
    // и если соседа нет, то кидаю в счетчик +1 за каждую свободную сторону
   for(let i = 0; i < arr.length; i++) {
       if (arr[i] == 'drop__box') {
        if (i != 6 && i != 13 && i != 20 && i != 27 && i != 34 && i != 41) {
            if (arr[i + 1] == 'empty') {
                count+=1;
            }
        }
        if (arr[i - 1] == 'empty') {
            count+=1;
        }
        if (arr[i + 7] == 'empty') {
            count+=1;
        }
        if (arr[i - 7] == 'empty') {
            count+=1;
        }
        if ((i % 7 == 0) && (i != 0)) {
            count-=1;
        }
        if ((i == 6 && arr[i+1 % 7] == 'drop__box') || (i == 13 && arr[i+1 % 7] == 'drop__box') || (i == 20 && arr[i+1 % 7] == 'drop__box') || (i == 27 && arr[i+1 % 7] == 'drop__box') || (i == 34 && arr[i+1 % 7] == 'drop__box') || (i == 41 && arr[i+1 % 7] == 'drop__box')) {
            count+=1;
        }
       }
       continue;
    } 
    arr.splice(0,42);
    counter.innerHTML = count;
    count = 0;
} 


