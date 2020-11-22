const createBoard = () => {
  const board = document.createElement("div");
  board.classList.add("board");

  for (let i = 1; i <= 9; i++) {
    const column = document.createElement("div");
    column.classList.add("column", "flex-center");
    board.appendChild(column);
  }
  document.body.appendChild(board);
};

const getColumn = (num) => {
  const columns = document.getElementsByClassName("column");
  return columns[num - 1];
};

const createButtons = () => {

  //record icon
  const recordIcon = document.createElement('img');
  recordIcon.setAttribute('src', './images/microphone.svg');
  //cancel icon
  const cancelIcon = document.createElement('img');
  cancelIcon.setAttribute('src', './images/cancel.svg');


  // create record button
  const recordButton = document.createElement('button');
  recordButton.classList.add('button-circle');
  recordButton.id = 'record';
  recordButton.innerHTML = recordIcon.outerHTML
  recordButton.onclick = runSpeechRecognition;
  document.body.appendChild(recordButton);

  // create cancel button
  const cancelButton = document.createElement('button');
  cancelButton.classList.add('button-circle');
  cancelButton.classList.add('hidden');
  cancelButton.id = 'cancel';
  cancelButton.innerHTML = cancelIcon.outerHTML
  document.body.appendChild(cancelButton);

  // success screen
  const successScreen = document.createElement('div');
  successScreen.classList.add('display');
  successScreen.classList.add('success');
  successScreen.id = 'success-display';
  document.body.appendChild(successScreen)

  // fail screen
  const failScreen = document.createElement('div');
  failScreen.classList.add('display');
  failScreen.classList.add('fail');
  failScreen.id = 'fail-display';
  document.body.appendChild(failScreen)
}



createBoard();
createButtons();
