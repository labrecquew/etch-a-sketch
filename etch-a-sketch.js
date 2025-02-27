const container = document.querySelector('div.container');

createGridLayout(16);

function createGridLayout(gridNumber) {
    let totalGrids = gridNumber * gridNumber;
    let gridSize = 500 / gridNumber;
    for (let i = 0; i < totalGrids; i++) {
        let grid = document.createElement('div');
        grid.style.height = gridSize + "px"
        grid.style.width = gridSize + "px"
        container.appendChild(grid);
    }
};