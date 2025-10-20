const catImage = document.getElementById("cat");
const button = document.getElementById("ClickMe");
const loadingText = document.getElementById("loadingText");

button.addEventListener("click", getImage);

function getImage(){
     loadingText.textContent = "Loading....";

    fetch("https://api.thecatapi.com/v1/images/search")
    .then(response=> response.json())

    .then(data=>{
       
        const catUrl = data[0].url;
        catImage.src = catUrl;
        catImage.style.display = "block";
        loadingText.textContent = "Here is your cat!";
        
    })
    .catch(error=> console.log("Error fetching cat image:", error));
}
