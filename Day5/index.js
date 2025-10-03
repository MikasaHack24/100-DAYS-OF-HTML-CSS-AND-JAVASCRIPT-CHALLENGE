const display = document.getElementById("display");

const darkModeBtn = document.getElementById('darkModeBtn');
darkModeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});


const buttons = document.querySelectorAll(".buttons button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.dataset.val

        

        if (button.id === "operator-equals"){

             return display.value = eval(display.value);
            

        }

        if (button.id === "clear") {
            display.value = "";
        }
        else{
            display.value += value;
        }

       
       
    });
});





