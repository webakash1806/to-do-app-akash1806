

function cls() {
    document.getElementById("todoList").value = ""
}

function sub() {
    let todoList = document.getElementById("todoList").value
    if (todoList == "") {
        alert("Blank Data should not be added")
    }

    else if (todoList.length >= 90) {
        alert("no")
    }

    else {
        document.getElementById("res").innerHTML += `
        <div class="res">
        <div class="top">
        <p id="done">PENDING</p>
        </div>
        <button class="btn-done-class" id="btn-done" onclick="taskDone()">
        <i class="fa-sharp fa-solid fa-check"></i>
        </button>
        <button class="btn-remove" id="btn-remove">
        <i class="fa-solid fa-trash"></i>
        </button>
        
        <p class="main-task-p" id="main-task">
        ${todoList}
        </p>
        
        </div>
        `

        let taskDone = document.getElementsByClassName("btn-done-class");
        console.log(taskDone);
        for (let j = 0; j < taskDone.length; j++) {
            console.log(taskDone[j]);
            taskDone[j].addEventListener("click", function () {
                document.getElementById("done").innerHTML = "COMPLETED";
                document.getElementById("done").style.color = "green";
                document.getElementById("main-task").style.textDecorationLine = "line-through";
            });
        }

        console.log(taskDone);

        // taskDone.onclick = function () {

        // }

        let seTasks = document.getElementsByClassName("btn-remove")
        for (let i = 0; i < seTasks.length; i++) {
            seTasks[i].onclick = function () {
                this.parentElement.remove()
            }
        }
    }


}