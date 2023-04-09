// function 1. change background images

let theButtons = document.querySelectorAll(".monsters img"),
    container = document.getElementById("container");

function changeBGImage() {
    container.style.backgroundImage = `url(images/backGround${this.id}.jpg)`;
}

theButtons.forEach(button => button.addEventListener('click', changeBGImage));


// function 2. drag and drop, and then play music

const instrumentImages = document.querySelectorAll('#instruments img');

instrumentImages.forEach(instrumentImage => {
    instrumentImage.addEventListener('dragstart', (event) => {
      event.dataTransfer.setData('audioSrc', document.querySelector(`audio[data-key="${instrumentImage.dataset.key}"]`).src);
      event.dataTransfer.setData('dataKey', instrumentImage.dataset.key);
    });
  });

  document.querySelector('.monsters').addEventListener('drop', (event) => {
    event.preventDefault();
    const audioSrc = event.dataTransfer.getData('audioSrc');
    const dataKey = event.dataTransfer.getData('dataKey');
    const audio = document.querySelector(`audio[data-key="${dataKey}"]`);
    if (audio) {
      audio.src = audioSrc;
      audio.play();
    }
  });

  document.querySelector('.monsters').addEventListener('dragover', (event) => {
    event.preventDefault();
  });


// function 3. activate stop button

const stopButton = document.querySelector('#pauseButton');

stopButton.addEventListener('click', () => {
  const audioElements = document.querySelectorAll('audio');
  audioElements.forEach(audioElement => {
    audioElement.pause();
  });
});


// function 4. activate reset button

const resetButton = document.querySelector('#rewindButton');

resetButton.addEventListener('click', () => {
  document.body.style.backgroundImage = '';
  
  const audioElements = document.querySelectorAll('audio');
  audioElements.forEach(audioElement => {
    audioElement.pause();
    audioElement.currentTime = 0;
  });
});


// function 5. activate volumn

const volumeControl = document.getElementById('volumeControl');
const audios = document.querySelectorAll('audio');

volumeControl.addEventListener('input', function() {
  const volume = this.value / 100;
  audios.forEach(function(audio) {
    audio.volume = volume;
  });
});
