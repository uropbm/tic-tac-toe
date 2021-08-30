class TicTacToe {
    constructor() {

        this.sumbol = 'x'

    this.field = [
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ]  

    }

    getCurrentPlayerSymbol() {
        return this.sumbol
    }

    nextTurn(rowIndex, columnIndex) {
        if (!this.field[rowIndex][columnIndex]) {
            this.field[rowIndex][columnIndex] = this.sumbol
            this.sumbol = this.sumbol === 'x' ? 'o' : 'x'
        } else return
    }

    isFinished() {
        if ((this.getWinner()) || this.noMoreTurns()) {
            return true
        } else return false
    }

    getWinner() {
        let row, column, count = 0, count1 = 0
        for (let i = 0; i < this.field.length; i++) {
            row = this.field[i][0]
            column = this.field[0][i]
            for (let j = 1; j < this.field[i].length; j++) {
                if (row === this.field[i][j]) {
                    count++
                }
                if (column === this.field[j][i]) {
                    count1++
                }
            }
            if (count == 2) {
                return row
            }
            if (count1 == 2) {
                return column
            }
            count = 0
            count1 = 0
        }

        row = this.field[0][0]

        if ((row === this.field[1][1]) && (row === this.field[2][2])) {
            return row
        }

        column = this.field[0][2]

        if ((column === this.field[1][1]) && (column === this.field[2][0])) {
            return column
        }

        return null
    }

    noMoreTurns() {
        return this.field.every(element => element.every(el => el))
    }

    isDraw() {
        if ((this.noMoreTurns()) && (!this.getWinner())) {
            return true 
        } else return false
    }

    getFieldValue(rowIndex, colIndex) {
        if ((rowIndex < 3) && (colIndex < 3))
            return this.field[rowIndex][colIndex]
    }
}

module.exports = TicTacToe;
