function displayCurrentTime() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Add leading zeros for single-digit minutes and seconds
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  const currentTime = `${hours}:${minutes}:${seconds}`;
  console.log(currentTime); 
  // You can also update an HTML element:
  // document.getElementById('timeDisplay').textContent = currentTime;
}

// Call the function to display the time once
displayCurrentTime();

// To update the time every second, use setInterval
setInterval(displayCurrentTime, 1000); 


var x = document.getElementById("myAudio");

function playAudio() {
  x.play();
}

function pauseAudio() {
  x.pause();
}