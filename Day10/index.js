const setup = document.getElementById("setup");

const punchline= document.getElementById("punchline");

const button = document.getElementById("jokeBtn");

button.addEventListener("click", getJoke);

function getJoke(){
    fetch("https://official-joke-api.appspot.com/random_joke")
    .then(response => response.json())
    .then(data=>{setup.textContent = data.setup;
               punchline.textContent = data.punchline;
    })
    .catch(error => console.error('Error fetching joke:', error));

}

