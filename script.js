let addTaskButton = document.querySelector(".add-task-button");
let tasksContainer = document.querySelector(".tasks-container");
let taskImput = document.querySelector(".task-input");


let addTaskFunction = () => {
    let taskValue = taskImput.value.trim();
    if(taskValue === ""){
        alert("This field is required");
        return;
    }
    let newTask = document.createElement("li");
    let p = document.createElement("p");
    p.innerText = taskImput.value;
    let img = document.createElement("img");
    img.setAttribute("src", "./imagini/delete.svg");

    img.addEventListener("click", () => {
        tasksContainer.removeChild(newTask)
    });

    newTask.appendChild(p);
    newTask.appendChild(img);

    // newTask.innerHTML = `
    // <p>${taskImput.value}</p>
    // <img src="./imagini/delete.svg" alt="">
    // `;
    tasksContainer.appendChild(newTask);


    let allParagraphs = document.querySelectorAll(".tasks-container li p");
    allParagraphs.forEach(( p) => {
        p.style.cursor = "pointer";
        p.addEventListener("click", () =>{
            p.style.textDecoration = "line-through"
        });
      
    });

   
};


addTaskButton.addEventListener("click", addTaskFunction );