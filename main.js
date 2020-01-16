//sets container and draws default 4x4 grid
const container = document.getElementById('grid-container');
let currentColor = 'pink';

drawGrid(4);
colorCell(currentColor);

//load buttons and set relevant actions
const clearBtn = document.getElementById('clear-btn');
clearBtn.addEventListener('click', clearGrid);

const resizeBtn = document.getElementById('resize-btn');
resizeBtn.addEventListener('click', () => {
    let gridSize = prompt("How many cells per side would you like?");
    if (gridSize !== null) {
     drawGrid(gridSize) 
    }    
});

const colorBtn = document.getElementById('color-btn');
colorBtn.addEventListener('click', () => {
    currentColor = prompt('Pick a new pen color');
    colorCell(currentColor);
})

const randomBtn = document.getElementById('random-btn');
randomBtn.addEventListener('click', () => { 
    let gridCells = document.querySelectorAll('.grid-cell');
    gridCells.forEach(cell => {
        cell.addEventListener("mouseenter", () => {
            randomColorCell(cell, randomColor());
        });
    });
});

//draws new user-defined grid
function drawGrid(gridSize)
{
    deletePreviousGrid();
    for (var i=0; i<parseInt(gridSize**2); i++) {
        console.log(gridSize**2);
        let gridCell = document.createElement('div');
        gridCell.className = 'grid-cell';
        gridCell.style.backgroundColor = 'white';
        container.appendChild(gridCell);
    }
    //dynamically sets up new grid size
    container.style.gridTemplateColumns = ('repeat(' + gridSize + ', 1fr)'); 
    colorCell(currentColor);
}

//clears existing grid and resets cells back to white
function clearGrid() {
    let gridCells = document.querySelectorAll('.grid-cell');
    gridCells.forEach(cell => {
        cell.style.backgroundColor = 'white';
    });
}

//deletes divs(cells) related to previous grid
function deletePreviousGrid() {
    console.log('In the delete grid function');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

//fills each cell with user-defined color
function colorCell(color) {
    let gridCells = document.querySelectorAll('.grid-cell');
    gridCells.forEach(cell => {
        cell.addEventListener("mouseenter", () => {
            cell.style.backgroundColor = color;
        });
    });
}

//fills each cell with a different color
function randomColorCell(cell, color) {
    cell.style.backgroundColor = color;
}

//generates random color
function randomColor() {
  let num = Math.round(0xffffff * Math.random());
  let r = num >> 16;
  let g = num >> 8 & 255;
  let b = num & 255;
  color = 'rgb(' + r + ', ' + g + ', ' + b + ')';
  return color;
}

