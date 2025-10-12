function currentTime() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Add leading zeros for single-digit minutes and seconds
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;


  // You can also update an HTML element:
  document.getElementById('timeDisplay').textContent = currentTime;
}

// Call the function to display the time once
displayCurrentTime();

// To update the time every second, use setInterval
setInterval(displayCurrentTime, 1000); w


var x = document.getElementById("myAudio");

function playAudio() {
  x.play();
}

function pauseAudio() {
  x.pause();
}


document.getElementById('toggleButton').addEventListener('click', function() {
  var textElement = document.getElementById('hiddenText');
  if (textElement.classList.contains('hidden1')) {
    textElement.classList.remove('hidden1');
    this.textContent = 'Hide Day 1/intro'; // Update button text
  } else {
    textElement.classList.add('hidden1');
    this.textContent = 'Show Day 1/intro'; // Update button text
  }
});


document.getElementById('toggle2').addEventListener('click', function() {
  var textElement = document.getElementById('hiddenText2');
  if (textElement.classList.contains('hidden2')) {
    textElement.classList.remove('hidden2');
    this.textContent = 'Hide Day 2/Update'; // Update button text
  } else {
    textElement.classList.add('hidden2');
    this.textContent = 'Show Day 2/Update'; // Update button text
  }
});
