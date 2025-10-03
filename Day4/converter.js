const temperature = document.getElementById('temperature');
const toFahrenheit = document.getElementById('toFahrenheit');
const toCelsius = document.getElementById('toCelsius');
const result = document.getElementById('result');

let temp;



function convert() {
    temp = parseFloat(temperature.value);

    if (isNaN(temp)) {
        result.textContent = "Please enter a valid number.";
        return;
    }
     if (toFahrenheit.checked) {
        let fahrenheit = (temp * 9/5) + 32;
        result.innerText = `${temp}°C is ${fahrenheit.toFixed(2)}°F`;
    }

    else if (toCelsius.checked) {
        let celsius = (temp - 32) * 5 / 9;
        result.innerText = `${temp}°F is ${celsius.toFixed(2)}°C`;
    }

    else {
        result.textContent = "Please select a conversion type.";
    }
}

document.getElementById('convertBtn').addEventListener('click', convert);

document.getElementById('resetBtn').addEventListener('click', () => {
    temperature.value = '';
    toFahrenheit.checked = false;
    toCelsius.checked = false;
    result.textContent = '';
});

const darkModeBtn = document.getElementById('darkModeBtn');
darkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});  

// Optional: Add some basic styles for dark mode in your CSS file
// .dark-mode {
//     background-color: #121212;
//     color: #ffffff;
// }

