

// let username;

// document.getElementById("myButton").onclick = function() {
//     username = document.getElementById("MyText").value;
//     console.log(username);
//     document.getElementById("MyH1").innerText = `Hello, ${username}! How are you today?`;

// }


// const PI = 3.14;
// let radius;
// let circumference;

// document.getElementById("myCircumferenceButton").onclick = function() {
//     radius = document.getElementById("MyRadius").value;
//     circumference = 2 * PI * radius;
//     console.log(`The circumference is ${circumference}`);


//     document.getElementById("myCircumference").textContent = `The circumference is ${circumference}`;
// }

// let area;

// document.getElementById("myAreaButton").onclick = function() {
//     radius = document.getElementById("MyRadius").value;
//     area = PI * radius * radius;
//     console.log(`The area is ${area}`);
//     document.getElementById("myArea").textContent = `The Area is ${area}`;
// }


let count = 0;
document.getElementById("increaseButton").onclick = function() {
    count++;

    document.getElementById("countLabel").textContent = count;
}

document.getElementById("resetButton").onclick = function() {
    count = 0;

    document.getElementById("countLabel").textContent = count;
}




document.getElementById("decreaseButton").onclick = function() {
    count--;

    document.getElementById("countLabel").textContent = count;
}
