var container = document.getElementById('container');
var br = document.createElement('br');

// First time user input
function userInput() {
    var h = 101;
    while (Number.isNaN(h) || h > 100) {
        h = prompt('How many squares do you want in the horizontal axis? (no more than 100): ');    
    }
    var v = 101;
    while (Number.isNaN(v) || v > 100) {
        v = prompt('How many squares do you want in the vertical axis? (no more than 100): ');    
    }
    createGrid(h, v);
}

userInput();

// Create the grid with CSS grid
function createGrid(h, v){
    let width = 960 / h;
    for (var i = 1; i <= v * h; i++) {
        var div = document.createElement('div');
        div.className = 'cell';
        div.style.border = 'solid 1px black';
        container.appendChild(div);
        container.appendChild(br);
    }
    cellsEvent();
    container.style.display = 'grid';
    container.style.gridTemplateRows = 'repeat(' + v + ', ' + width + 'px)';
    container.style.gridTemplateColumns = 'repeat(' + h + ', ' + width + 'px)';
    container.style.justifyContent = 'center';
}

// Block that change the divs from white to black in one step
// // Adds the mouseenter event to all the cells
// function cellsEvent() {
//     var cells = document.getElementsByClassName('cell');
//     for (var k = 0; k < cells.length; k++) {
//         cells[k].addEventListener('mouseenter', paint);
//     }
// }

// // Add the 'cell-painted' class when the event occurs
// function paint(e) {
//     e.target.classList.add('cell-painted');
// }

// // Removes the 'cell-painted' class to all the cells
// function unpaint() {
//     var cells = document.getElementsByClassName('cell');
//     for (var l = 0; l < cells.length; l++) {
//         cells[l].classList.remove('cell-painted');
//     }
// }

// Block that change the divs with a random rgb color //
// Adds the mouseenter event to all the cells
function cellsEvent() {
    var cells = document.getElementsByClassName('cell');
    for (var k = 0; k < cells.length; k++) {
        cells[k].addEventListener('mouseenter', paintRandom);
    }
}

// Paint the div with a random RGB value
function paintRandom(e) {
    e.target.style.backgroundColor = rgbRandom();
}

// RGB random generator
function rgbRandom() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

// Unpaint all the cells's colors
function unpaint() {
    var cells = document.getElementsByClassName('cell');
    for (var l = 0; l < cells.length; l++) {
        cells[l].style.removeProperty('background-color');
    }
}

// Leaves the container empty
function deleteDivs() {
    container.textContent = '';
}

// Adds the click event to the button
var button = document.getElementById('erase');
button.addEventListener('click', ask);

// Some user inputs when the event occurs
function ask(e) {
    var sure = prompt('Are you sure you want to erase your drawing?');
    sure.toLowerCase;
    if (sure != 'yes') {
        return;
    }
    unpaint();
    deleteDivs();
    var h = prompt('How many squares do you want in the horizontal axis?: ');
    var v = prompt('Hoy many squares do you want in the vertical axis?: ');
    createGrid(h, v);
}