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