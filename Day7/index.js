
let tasks = [];


function addTask(){
     const input = document.getElementById("task");
     const task = input.value.trim();
     input.value = ""
     if(task != ""){
           tasks.push(task);
            displayTask();
     }
     
}

function displayTask(){
     let tasklist = document.getElementById("tasklist");
     tasklist.innerHTML = "";
          tasks.forEach((task, index)=>{
          let checkbox = document.createElement("input");
          checkbox.type = "checkbox";

          checkbox.id = "task-" + index;

          let label = document.createElement("label");
          label.textContent = task;
          label.setAttribute("for", "task-" + index)
          let deleteBtn = document.createElement("Button")
          deleteBtn.textContent =  "❌"
          deleteBtn.classList.add("delete-btn");
          deleteBtn.addEventListener('click', () =>{

               removeTask(index);

          })
          

          let wrapper = document.createElement("div");
          wrapper.appendChild(checkbox);
          wrapper.appendChild(label);
          wrapper.appendChild(deleteBtn);
          

          tasklist.appendChild(wrapper);

          checkbox.addEventListener("change", () => {
     if(checkbox.checked){
          label.style.textDecoration = "line-through";
     }

     else{
          label.style.textDecoration = "none";
     }
})
     })
}

function removeTask(index){
      tasks.splice(index, 1);
     displayTask();
     

}

