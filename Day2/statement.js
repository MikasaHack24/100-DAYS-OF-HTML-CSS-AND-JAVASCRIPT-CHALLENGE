

let age;



document.getElementById("eligibilityButton").onclick = function() {
    age = document.getElementById("ageInput").value;
  

    if (age >= 16){


        if (document.getElementById("LicenseInput").checked) {
             document.getElementById("resultLabel").textContent = "You are old enough to drive!";
            document.getElementById("resultLabel2").textContent = "You have a license!";
        }

        else if(document.getElementById("noLicenseInput").checked){
            document.getElementById("resultLabel").textContent = "You are old enough to drive!";
            document.getElementById("resultLabel2").textContent = "You do not have a license!";


        }
        else {
             document.getElementById("resultLabel").textContent = "You are old enough to drive!";
            document.getElementById("resultLabel2").textContent = "You didn't select an option!";
        }
       
        

        
     }


     else if(age==null || age==""){
        document.getElementById("resultLabel").textContent = "Please enter your age!";
        document.getElementById("resultLabel2").textContent = "";
     }





    else {
        document.getElementById("resultLabel").textContent = "You are not old enough to drive!";
        document.getElementById("resultLabel2").textContent = "You do not have a license!";
    }
}
