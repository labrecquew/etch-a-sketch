const container = document.querySelector('div.container');
const newGrid = document.querySelector('button');

createGridLayout(16);

newGrid.addEventListener("click", function() {
    let gridsPerSide = prompt("Please enter the grids you want per side, 16-100: ");
    let invalidInput = true;
    while (invalidInput) {
        if (gridsPerSide === null) {
            invalidInput = true;
        } else if (gridsPerSide < 16 || gridsPerSide > 100) {
            gridsPerSide = prompt("Invalid input, please enter the grids you want per side, 16-100: ");
        } else {
            createGridLayout(gridsPerSide);
            invalidInput = false;
        }
    }
});

function createGridLayout(gridNumber) {
    let totalGrids = gridNumber * gridNumber;
    removeGridLayout(totalGrids);
    let gridSize = 400 / gridNumber;
    for (let i = 0; i < totalGrids; i++) {
        let grid = document.createElement('div');
        grid.style.height = gridSize + "px";
        grid.style.width = gridSize + "px";
        grid.style.opacity = 0;
        grid.addEventListener("mouseover", function() {
            grid.style.backgroundColor = "pink";
            if (grid.style.opacity < "0.9") {
                let opacity = parseFloat(grid.style.opacity) + 0.1; 
                grid.style.opacity = opacity.toString();
            } else if (grid.style.opacity === "0.9") {
                grid.style.opacity = "1.0";
            }
        });
        container.appendChild(grid);
    }
};

function removeGridLayout() {
     while(container.firstChild != null) {
        let grid = container.firstChild;
        grid.remove();
    }
}