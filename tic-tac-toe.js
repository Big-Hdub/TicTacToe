import TTT from "./TTT.js";

document.addEventListener("DOMContentLoaded", e => {
    let ttt = new TTT;

    const clickHandler = e => {
        let change = false;
        switch (e.target.id) {
            case 'square-0': if (e.target.children.length < 1) {
                ttt.markBoard(e.target);
                ttt.fillGrid(0, 0);
                change = true;
            };
            case 'square-1': if (e.target.children.length < 1) {
                ttt.markBoard(e.target);
                ttt.fillGrid(0, 1);
                change = true;
            };
            case 'square-2': if (e.target.children.length < 1) {
                ttt.markBoard(e.target);
                ttt.fillGrid(0, 2);
                change = true;
            };
            case 'square-3': if (e.target.children.length < 1) {
                ttt.markBoard(e.target);
                ttt.fillGrid(1, 0);
                change = true;
            };
            case 'square-4': if (e.target.children.length < 1) {
                ttt.markBoard(e.target);
                ttt.fillGrid(1, 1);
                change = true;
            };
            case 'square-5': if (e.target.children.length < 1) {
                ttt.markBoard(e.target);
                ttt.fillGrid(1, 2);
                change = true;
            };
            case 'square-6': if (e.target.children.length < 1) {
                ttt.markBoard(e.target);
                ttt.fillGrid(2, 0);
                change = true;
            };
            case 'square-7': if (e.target.children.length < 1) {
                ttt.markBoard(e.target);
                ttt.fillGrid(2, 1);
                change = true;
            };
            case 'square-8': if (e.target.children.length < 1) {
                ttt.markBoard(e.target);
                ttt.fillGrid(2, 2);
                change = true;
            }
        }
        if (change) {
            const check = ttt.checkWin();
            const status = ttt.winnerConditions(check, clickHandler);
            if (status) {
                ttt.endGame(status);
                document.querySelector("#give").setAttribute("disabled", true);
                ttt.giveDis = true;
            }
            else ttt.nextTurn();
            localStorage.setItem("gameData", JSON.stringify(ttt));
        };
    }

    const start = () => {
        if (localStorage.gameData) {
            const data = JSON.parse(localStorage.gameData);
            ttt.grid = Array.from(data.grid);
            ttt.refreshBoard();
            ttt.playerTurn = data.playerTurn;
            data.newDis ? document.querySelector("#new").setAttribute("disabled", true) : document.querySelector("#new").removeAttribute("disabled");
            data.giveDis ? document.querySelector("#give").setAttribute("disabled", true) : document.querySelector("#give").removeAttribute("disabled");
            document.querySelector("h1").innerText = data.message;
            if (data.message.includes("Winner:")) return;
        }
        document.querySelector("#gameBoard").addEventListener("click", clickHandler);
    }

    document.querySelector("footer").addEventListener("click", e => {
        switch (e.target.id) {
            case "new":
                document.querySelector("#new").setAttribute("disabled", true);
                ttt.newDis = true;
                document.querySelector("#give").removeAttribute("disabled");
                ttt.giveDis = false;
                ttt = new TTT;
                document.querySelectorAll(".squares").forEach(sq => sq.innerText = "");
                document.querySelector("h1").innerText = "Player X turn"
                localStorage.removeItem("gameData");
                start();
                break;
            case "give":
                document.querySelector("#new").removeAttribute("disabled");
                ttt.newDis = false;
                document.querySelector("#give").setAttribute("disabled", true);
                ttt.giveDis = true
                ttt.nextTurn();
                ttt.endGame(`Winner: ${ttt.playerTurn}`);
                localStorage.setItem("gameData", JSON.stringify(ttt));
                document.querySelector("#gameBoard").removeEventListener("click", clickHandler);
                break;
        }
    })

    start();
});
