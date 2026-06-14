let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const list = document.getElementById("taskList");
const count = document.getElementById("count");


function saveTasks(){
    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );
}


function displayTasks(){

    list.innerHTML = "";

    tasks.forEach((task,index)=>{

        let li = document.createElement("li");


        li.innerHTML = `
        <span class="${task.done ? "completed" : ""}">
        ${task.text}
        </span>

        <div class="actions">
            <button onclick="toggleTask(${index})">
            ✔
            </button>

            <button onclick="editTask(${index})">
            ✏
            </button>

            <button onclick="deleteTask(${index})">
            🗑
            </button>
        </div>
        `;


        list.appendChild(li);

    });

    count.innerText = tasks.length;

    saveTasks();

}



function addTask(){

let input = document.getElementById("taskInput");


if(input.value.trim()==""){
    alert("Please enter a task");
    return;
}


tasks.push({
    text: input.value,
    done:false
});


input.value="";


displayTasks();

}




function deleteTask(index){

tasks.splice(index,1);

displayTasks();

}



function toggleTask(index){

tasks[index].done =
!tasks[index].done;

displayTasks();

}



function editTask(index){

let newTask = prompt(
"Edit your task",
tasks[index].text
);


if(newTask !== null && newTask.trim()!=""){

tasks[index].text = newTask;

displayTasks();

}

}



displayTasks();