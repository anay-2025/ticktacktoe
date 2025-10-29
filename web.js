let boxes = document.querySelectorAll(".box");
let rbtn = document.querySelector("#r_btn");

let turn = 0;
let moves = 0;


function winCal() {
    // Row 1
    if (boxes[0].innerText !== "" && boxes[0].innerText === boxes[1].innerText && boxes[1].innerText === boxes[2].innerText) {
        boxes[0].style.backgroundColor = "blue";
        boxes[1].style.backgroundColor = "blue";
        boxes[2].style.backgroundColor = "blue";
        return 1;
    }
    // Row 2
    if (boxes[3].innerText !== "" && boxes[3].innerText === boxes[4].innerText && boxes[4].innerText === boxes[5].innerText) {
        boxes[3].style.backgroundColor = "blue";
        boxes[4].style.backgroundColor = "blue";
        boxes[5].style.backgroundColor = "blue";
        return 1;
    }
    // Row 3
    if (boxes[6].innerText !== "" && boxes[6].innerText === boxes[7].innerText && boxes[7].innerText === boxes[8].innerText) {
        boxes[6].style.backgroundColor = "blue";
        boxes[7].style.backgroundColor = "blue";
        boxes[8].style.backgroundColor = "blue";
        return 1;
    }
    // Column 1
    if (boxes[0].innerText !== "" && boxes[0].innerText === boxes[3].innerText && boxes[3].innerText === boxes[6].innerText) {
        boxes[0].style.backgroundColor = "blue";
        boxes[3].style.backgroundColor = "blue";
        boxes[6].style.backgroundColor = "blue";
        return 1;
    }
    // Column 2
    if (boxes[1].innerText !== "" && boxes[1].innerText === boxes[4].innerText && boxes[4].innerText === boxes[7].innerText) {
        boxes[1].style.backgroundColor = "blue";
        boxes[4].style.backgroundColor = "blue";
        boxes[7].style.backgroundColor = "blue";
        return 1;
    }
    // Column 3
    if (boxes[2].innerText !== "" && boxes[2].innerText === boxes[5].innerText && boxes[5].innerText === boxes[8].innerText) {
        boxes[2].style.backgroundColor = "blue";
        boxes[5].style.backgroundColor = "blue";
        boxes[8].style.backgroundColor = "blue";
        return 1;
    }
    // Diagonal 1
    if (boxes[0].innerText !== "" && boxes[0].innerText === boxes[4].innerText && boxes[4].innerText === boxes[8].innerText) {
        boxes[0].style.backgroundColor = "blue";
        boxes[4].style.backgroundColor = "blue";
        boxes[8].style.backgroundColor = "blue";
        return 1;
    }
    // Diagonal 2
    if (boxes[2].innerText !== "" && boxes[2].innerText === boxes[4].innerText && boxes[4].innerText === boxes[6].innerText) {
        boxes[2].style.backgroundColor = "blue";
        boxes[4].style.backgroundColor = "blue";
        boxes[6].style.backgroundColor = "blue";
        return 1;
    }
    return 0;
}


function resetGame() {
    for(let i of boxes) {
        i.innerText = "";
        i.disabled = false;
        i.style.backgroundColor = "";
    }
    turn = moves = 0;
}

if(moves >= 5) {
    
}

for(let i of boxes) {
    i.addEventListener("click", () => {
        if(turn == 0) {
            i.innerText = "X";
            turn = 1;
        }
        else {
            i.innerText = "0";
            turn = 0;
        }
        moves++;
        if(moves >= 5) {
            if(winCal()) {  // color.
                for(let i of boxes) {
                    i.disabled = true;
                }
                let ch = 'X';
                if(turn == 0) ch = '0';
                setTimeout(() => {
                    alert(`congratulations! player ${ch} has won the match.`);
                    let choice = prompt("1 for new game. \n2 for stay. \nEnter your choice -> ");
                    if(choice == 1) {
                        resetGame();
                    }
                }, 1000);
            } 
        }
        if(moves == 9) {
            setTimeout(() => {
                alert(`the match has been drawned!`);
                let choice = prompt("1 for new game. \n2 for stay. \nEnter your choice -> ");
                if(choice == 1) {
                    resetGame();
                }
            }, 1000);
        }
        i.disabled = true;
    })
}

rbtn.addEventListener("click", resetGame);

