export class Square {

  constructor(board, pos) {
      this.board = board;
      this.pos = pos;
      this.mine = false;
}

  makeMine() {
    this.mined = true;
  }
}

export class Board {

  constructor(width,height,numberOfMines) {
    this.width = width;
    this.height = height;
    this.grid = [];
    this.numberOfMines = numberOfMines;
    this.createBoard();
    this.makeMines();
  }

  createBoard() {
    for (let i = 0; i < this.width; i++) {
      this.grid.push([]);
      for (let j = 0; j < this.height; j++) {
        const square = new Square(this, [i, j]);
        this.grid[i].push(square);
      }
    }
  }

  makeMines() {
    let totalMines = 0;
    while (totalMines < this.numberOfMines) {
      const row = Math.round(Math.random() * (this.width - 1));
      const column = Math.round(Math.random() * (this.height - 1));
      console.log("ROW",row);
      console.log("column",column);
      let square = this.grid[row][column];
      if (!square.mined) {
        square.makeMine();
        totalMines++;
      }
    }
  }

}
