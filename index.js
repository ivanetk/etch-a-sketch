const container = document.querySelector('.container');
for (let i = 0; i < 16*16; i++) {
    const div = document.createElement('div');
    container.appendChild(div);
    div.classList.add('grid');
}

const cells = document.querySelectorAll('.grid');
let isDrawing = false;
cells.forEach((cell) => {
    cell.addEventListener('mousedown', () => {
        cell.style.backgroundColor = "black";
        isDrawing = true;
    } )
    
    cell.addEventListener('mousemove', () => {
        if (isDrawing === true) {
            cell.style.backgroundColor = "black";
        }
    })

    cell.addEventListener('mouseup', () => {
        if (isDrawing === true) {
            cell.style.backgroundColor = "black";
            isDrawing = false;
        }
    })
})


const btnnew = document.querySelector('.new');
btnnew.addEventListener('click', () => {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    let n = prompt("Please enter number of squares");
    for (let i = 0; i < n*n; i++) {
        const div = document.createElement('div');
        container.appendChild(div);
        div.classList.add('grid');
    }
    
    container.style.gridTemplateColumns = `repeat(${n}, auto)`;
    container.style.gridTemplateRows = `repeat(${n}, auto)`;
    
    
    const cells = document.querySelectorAll('.grid');
    cells.forEach((cell) => {
        cell.addEventListener('mousedown', () => {
            cell.style.backgroundColor = "black";
            isDrawing = true;
        } )
        
        cell.addEventListener('mousemove', () => {
            if (isDrawing === true) {
                cell.style.backgroundColor = "black";
            }
        })
    
        cell.addEventListener('mouseup', () => {
            if (isDrawing === true) {
                cell.style.backgroundColor = "black";
                isDrawing = false;
            }
        })
    })
    
    /*
    flexbox style grid
    const grid = document.querySelectorAll('.grid');
    grid.forEach(function(cell){
        cell.style.width = `calc(480px / ${n})`;
        cell.style.height = `calc(480px / ${n})`;
    })
    grid.style.width = `calc(100vw / ${n})`;
    grid.style.height = `calc(100vw / ${n})`;*/

})



