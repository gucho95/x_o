const createBoard = () => {
  const board = document.createElement("div");
  board.classList.add("board");

  for (let i = 1; i <= 9; i++) {
    const column = document.createElement("div");
    column.classList.add("column", "flex-center");
    column.innerText = i;
    board.appendChild(column);
  }
  document.body.appendChild(board);
};

const getColumn = (num) => {
  const columns = document.getElementsByClassName("column");
  return columns[num - 1];
};

createBoard();

let b = 12
