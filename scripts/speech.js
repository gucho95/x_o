



// new speech recognition object
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
const eng = new SpeechRecognition();


function runSpeechRecognition() {
  const successDisplay = document.getElementById('success-display');
  const failDisplay = document.getElementById('fail-display');
  const recButton = document.getElementById('record');
  const cancelButton = document.getElementById('cancel');


  successDisplay.innerText = '';
  failDisplay.innerText = '';

  let hasResult = false;



  // This runs when the speech recognition service starts
  eng.onstart = function () {
    recButton.classList.add('pulsate-fwd');
    cancelButton.classList.remove('hidden');
    cancelButton.onclick = () => eng.abort();
    console.log('on start');
  };


  eng.onend = () => {
    recButton.classList.remove('pulsate-fwd');
    cancelButton.classList.add('hidden');
    eng.stop();
    if (!hasResult) {
      runSpeechRecognition();
    }
    // console.log('on end', hasResult);

  }

  // This runs when the speech recognition service returns result
  eng.onresult = function (event) {
    var transcript = event.results[0][0].transcript;
    var confidence = event.results[0][0].confidence;
    const isValid = validate(transcript);

    if (isValid) {
      const number = Number(transcript);
      successDisplay.innerText = number
      failDisplay.innerText = '';
      hasResult = true;
      addX(number);
    }
    else {
      successDisplay.innerText = '';
      failDisplay.innerText = 'Not number'
    }
    console.log('on result', transcript);
    // console.log("word  ----     ", );
    // console.log("result ----",);
  };

  // start recognition
  eng.lang = "ru";
  eng.start();

}

const validate = (text) => {
  const number = Number(text);
  if (!isNaN(number)) {

    if (number >= 1 && number <= 9) {
      return true;
    } else {
      return false;
    }

  } else {
    return false;
  }
};


const addX = (index) => {
  const board = document.getElementsByClassName('board')[0];
  board.children[index - 1].innerText = 'X';
}

const addO = (index) => {
  const board = document.getElementsByClassName('board')[0];
  board.children[index - 1].innerText = 'O';
}