/* JS comes here */

const recButton = document.getElementById('record');
const cancelButton = document.getElementById('cancel');
const successDisplay = document.getElementById('success-display');
const failDisplay = document.getElementById('fail-display')





function runSpeechRecognition() {
  // new speech recognition object
  var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
  const eng = new SpeechRecognition();

  // This runs when the speech recognition service starts
  eng.onstart = function () {
    recButton.classList.add('pulsate-fwd');
    cancelButton.classList.remove('hidden');
    cancelButton.onclick = () => eng.abort();
  };


  eng.onend = () => {
    recButton.classList.remove('pulsate-fwd');
    cancelButton.classList.add('hidden');
    eng.stop();
  }

  // This runs when the speech recognition service returns result
  eng.onresult = function (event) {
    var transcript = event.results[0][0].transcript;
    var confidence = event.results[0][0].confidence;
    const isValid = validate(transcript);

    if (isValid) {
      successDisplay.innerText = transcript
    }
    else {
      failDisplay.innerText = 'Not number'
    }
    console.log("word  ----     ", transcript);
    console.log("result ----",);
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
