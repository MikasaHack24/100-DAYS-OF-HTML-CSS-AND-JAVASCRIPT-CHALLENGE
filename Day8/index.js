let clockButtons = document.querySelectorAll(".myClock");
let stopwatchButtons = document.querySelectorAll(".myStopwatch");

// Function to hide intro and show the selected section
function fadeToSection(showId, hideId) {
  const showEl = document.getElementById(showId);
  const hideEl = document.getElementById(hideId);

  // Fade out the currently visible one
  hideEl.classList.add("fade-out");

  setTimeout(() => {
    hideEl.style.display = "none";
    showEl.style.display = "block";
    showEl.classList.remove("fade-out");
    showEl.classList.add("fade-in");
  }, 600);
}

clockButtons.forEach(btn => {
  btn.addEventListener("click", function () {
    const wrappers = document.querySelectorAll(".content-wrapper");
    const showClock = document.getElementById("showClock");
    const showStopwatch = document.getElementById("showStopwatch");

    if (wrappers[0].style.display !== "none") {
      // From intro → Clock
      wrappers.forEach(el => {
        el.classList.add("fade-out");
        setTimeout(() => {
          el.style.display = "none";
          showClock.style.display = "block";
          showClock.classList.add("fade-in");
        }, 600);
      });
    } else if (showStopwatch.style.display === "block") {
      // From Stopwatch → Clock
      fadeToSection("showClock", "showStopwatch");
    }

    enterDarkMode();
  });
});

stopwatchButtons.forEach(btn => {
  btn.addEventListener("click", function () {
    const wrappers = document.querySelectorAll(".content-wrapper");
    const showStopwatch = document.getElementById("showStopwatch");
    const showClock = document.getElementById("showClock");

    if (wrappers[0].style.display !== "none") {
      // From intro → Stopwatch
      wrappers.forEach(el => {
        el.classList.add("fade-out");
        setTimeout(() => {
          el.style.display = "none";
          showStopwatch.style.display = "block";
          showStopwatch.classList.add("fade-in");
        }, 600);
      });
    } else if (showClock.style.display === "block") {
      // From Clock → Stopwatch
      fadeToSection("showStopwatch", "showClock");
    }

    enterDarkMode();
  });
});


function enterDarkMode() {
  document.body.style.transition = "background 0.6s ease, color 0.6s ease";
  document.body.style.background = "black";
  document.documentElement.style.background = "black";

  document.querySelectorAll('.content-wrapper').forEach(el => {
    el.style.background = 'transparent';
    el.style.boxShadow = 'none';
    el.style.color = 'inherit';
  });
}












function displayTime(){
    let now = new Date();

    let hours = now.getHours();
    

    let minutes = now.getMinutes();
    

    let seconds = now.getSeconds();
    

    if(hours < 10)hours ="0" + hours;
    


    if (minutes < 10) minutes = "0" + minutes;

    if (seconds < 10) seconds = "0" + seconds;
    

   

    document.getElementById("hours").textContent = hours+":";
     document.getElementById("minutes").textContent = minutes+":";
      document.getElementById("seconds").textContent = seconds;

    

}

function displayDate(){

    let now = new Date();

    let day = now.getDate();
    let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    monthName = month[now.getMonth()];

    let year = now.getFullYear();

    if(day<10)day = "0"+day;

    document.getElementById("day").textContent = day+",";
    document.getElementById("monthName").textContent = monthName;
    document.getElementById("year").textContent = year;


}
displayDate();

setInterval(displayTime, 1000);


let hours = 0;
let minutes = 0;
let seconds = 0;

let timer;

document.getElementById("start").addEventListener('click', function(){
    // clearInterval(timer);

    timer = setInterval(updateStopwatch, 1000);

})



    function updateStopwatch() {
  seconds++;

  if (seconds === 60) {
    minutes++;
    seconds = 0;
  }

  if (minutes === 60) {
    hours++;
    minutes = 0;
  }

  let displayHours = hours < 10 ? "0" + hours : hours;
  let displayMinutes = minutes < 10 ? "0" + minutes : minutes;
  let displaySeconds = seconds < 10 ? "0" + seconds : seconds;

  document.getElementById("sw-hours").textContent = displayHours + ":";
  document.getElementById("sw-minutes").textContent = displayMinutes + ":";
  document.getElementById("sw-seconds").textContent = displaySeconds;
}

     
    
    
   
   



document.getElementById("reset").onclick = function(){
   clearInterval(timer);
   hours = 0;
   minutes = 0;
   seconds = 0;

   document.getElementById("sw-hours").textContent = "00:";
   document.getElementById("sw-minutes").textContent = "00:";
   document.getElementById("sw-seconds").textContent = "00";
   
}

document.getElementById("pause").onclick = function(){
    clearInterval(timer);
}