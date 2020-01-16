//sets container and draws default 4x4 grid
const container = document.getElementById('grid-container');
let currentColor = 'pink';

drawGrid(4);
colorCell(currentColor);

//loads clear button and sets event listener
const clearBtn = document.getElementById('clear-btn');
clearBtn.addEventListener('click', clearGrid);

const resizeBtn = document.getElementById('resize-btn');
resizeBtn.addEventListener('click', () => {
    let gridSize = prompt("How many cells per side would you like?");
     drawGrid(gridSize) 
        
});

const colorBtn = document.getElementById('color-btn');
colorBtn.addEventListener('click', () => {
    currentColor = prompt('Pick a new pen color');
    colorCell(currentColor);
})

const randomBtn = document.getElementById('random-btn');
randomBtn.addEventListener('click', () => {
    currentColor = randomColor();
    colorCell(currentColor);
})

//draws new user-defined grid
function drawGrid(gridSize)
{
    deletePreviousGrid();
    for (var i=0; i<parseInt(gridSize**2); i++) 
    {
        console.log(gridSize**2);
        let gridCell = document.createElement('div');
        gridCell.className = 'grid-cell';
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

function deletePreviousGrid() {
    console.log('In the delete grid function');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function colorCell(color) {
    let gridCells = document.querySelectorAll('.grid-cell');
    gridCells.forEach(cell => {
        cell.addEventListener("mouseenter", () => {
            cell.style.backgroundColor = color;
        });
    });
}

//deletes existing grid (to allow new one to be built)

function randomColor() {
  let num = Math.round(0xffffff * Math.random());
  let r = num >> 16;
  let g = num >> 8 & 255;
  let b = num & 255;
  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

