export default class TTT {
    constructor() {
        this.playerTurn = "X";
        this.newDis = true;
        this.giveDis = false;
        this.message = "Player X turn"
        this.Xwins = 0;
        this.Ywins = 0;
        this.Ties = 0;
        this.grid = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ]
    }

    checkWin(grid = this.grid) {
        let tieCount = 0;
        if (grid[0][0] === grid[1][1] && grid[0][0] === grid[2][2] && grid[0][0] !== "") return grid[0][0];
        if (grid[2][0] === grid[1][1] && grid[2][0] === grid[0][2] && grid[2][0] !== "") return grid[2][0];
        for (let i = 0; i < grid.length; i++) {
            if (grid[i].every(char => char === "X") || grid[i].every(char => char === "O")) return grid[i][0];
            if (grid[0][i] === grid[1][i] && grid[0][i] === grid[2][i] && grid[0][i] !== "") return grid[0][i];
            if (grid[i].every(char => char !== "")) tieCount++;
        };
        if (tieCount === 3) return 'T';
        return false;
    };

    fillGrid(y, x) {
        if (this.playerTurn === "X") this.grid[y][x] = "X";
        else this.grid[y][x] = "O";
    };

    nextTurn() {
        const text = document.querySelector('h1');
        if (this.playerTurn === "X") this.playerTurn = "O";
        else this.playerTurn = "X";
        this.message = `Player ${this.playerTurn} turn`;
        text.innerText = this.message;
    };

    endGame(str) {
        this.message = str;
        const text = document.querySelector('h1');
        text.innerText = str;
    }

    markBoard(el) {
        const img = document.createElement("img");
        if (this.playerTurn === 'X') img.setAttribute("src", "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg");
        else img.setAttribute("src", "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg");
        el.appendChild(img);
    }

    winnerConditions(check, clickHandler) {
        switch (check) {
            case 'X':
                document.querySelector("#gameBoard").removeEventListener("click", clickHandler);
                document.querySelector("#new").removeAttribute("disabled");
                this.newDis = false;
                return "Winner: X";
            case 'O':
                document.querySelector("#gameBoard").removeEventListener("click", clickHandler);
                document.querySelector("#new").removeAttribute("disabled");
                this.newDis = false;
                return "Winner: O";
            case 'T':
                document.querySelector("#gameBoard").removeEventListener("click", clickHandler);
                document.querySelector("#new").removeAttribute("disabled");
                this.newDis = false;
                return "Winner: None";
            default: return;
        }
    }

    refreshBoard() {
        const g = this.grid
        if (g[0][0]) {
            console.log()
            this.playerTurn = g[0][0];
            this.markBoard(document.querySelector("#square-0"));
        }
        if (g[0][1]) {
            this.playerTurn = g[0][1];
            this.markBoard(document.querySelector("#square-1"));
        }
        if (g[0][2]) {
            this.playerTurn = g[0][2];
            this.markBoard(document.querySelector("#square-2"));
        }
        if (g[1][0]) {
            this.playerTurn = g[1][0];
            this.markBoard(document.querySelector("#square-3"));
        }
        if (g[1][1]) {
            this.playerTurn = g[1][1];
            this.markBoard(document.querySelector("#square-4"));
        }
        if (g[1][2]) {
            this.playerTurn = g[1][2];
            this.markBoard(document.querySelector("#square-5"));
        }
        if (g[2][0]) {
            this.playerTurn = g[2][0];
            this.markBoard(document.querySelector("#square-6"));
        }
        if (g[2][1]) {
            this.playerTurn = g[2][1];
            this.markBoard(document.querySelector("#square-7"));
        }
        if (g[2][2]) {
            this.playerTurn = g[2][2];
            this.markBoard(document.querySelector("#square-8"));
        }
    }
}
