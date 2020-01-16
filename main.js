//sets container and draws default 4x4 grid
const container = document.getElementById('grid-container');
setDefaultGrid();

//loads clear button and sets event listener
const clearBtn = document.getElementById('clear-btn');
clearBtn.addEventListener('click', setNewGrid);

//draws default 4x4 grid
function setDefaultGrid() {
    container.style.gridTemplateColumns = ('repeat(' + 4 + ', 1fr)'); 
    
    for (var i=0; i<16; i++)  {
            let gridCell = document.createElement('div');
            gridCell.className = 'grid-cell';
            container.appendChild(gridCell);
            gridCell.addEventListener('mouseenter', () => gridCell.className = 'grid-cell selected');
        }
    }

//draws new user-defined grid
function setNewGrid()
{
    clearGrid();
    let gridSize = prompt('How many squares per side would you like?');
    
    for (var i=0; i<parseInt(gridSize**2); i++) 
    {
        let gridCell = document.createElement('div');
        gridCell.className = 'grid-cell';
        container.appendChild(gridCell);
        gridCell.addEventListener('mouseenter', () => gridCell.className = 'grid-cell selected');
    }
    //dynamically sets up new grid size
    container.style.gridTemplateColumns = ('repeat(' + gridSize + ', 1fr)'); 
}

//clears existing grid
function clearGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}