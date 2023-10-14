let container = document.querySelector("#container");
let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");
let reset = document.querySelector("#reset");

let myTimer;
let myCounter = 0;
let mySecond = 0;
let myMinutes = 0;

start.addEventListener("click", function () {
    start.disabled = true;
    stop.disabled = false;
    reset.disabled = false;
  myTimer = setInterval(function () {
    myCounter++;
    mySecond = myCounter;

    sec.innerHTML = mySecond;

    // Start Counting Seconds
    if (mySecond > 59) {
      myCounter = 0;
      mySecond = 0;
      myMinutes++;

      if (myMinutes > 9) {
        min.innerHTML = myMinutes;
      } else {
        min.innerHTML = "0" + myMinutes;
      }
    }

    if (mySecond > 9) {
      sec.innerHTML = mySecond;
    } else {
      sec.innerHTML = "0" + mySecond;
    }
  }, 1000);
});

stop.addEventListener("click", function () {
    start.disabled = false;
    stop.disabled = true;
  clearInterval(myTimer);
});

reset.addEventListener("click", function () {
    start.disabled = false ;
    reset.disabled = true;
    stop.disabled = true;

  clearInterval(myTimer);
  myCounter = 0;
  mySecond = 0;
  myMinutes = 0;
  min.innerHTML = "00";
  sec.innerHTML = "00";
});