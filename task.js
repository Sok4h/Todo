const task = (taskInfo) => {

    
    const container = document.createElement("div");
    container.classList.add("todo")
    container.innerHTML = `
        <input class="checkbox" type="checkbox" name="" id="">
        <label for="" class="todo__label">${taskInfo.text}</label>
        <input type="text" value ="${taskInfo.text}" class="todo__input"></input>
        <a class="deleteTodo">X</a> `
    let deleteTodo = container.querySelector(".deleteTodo");
    let label = container.querySelector(".todo__label");
    let todoInput = container.querySelector(".todo__input");
    let checkbox = container.querySelector(".checkbox");


    checkbox.addEventListener("click", () =>{

        taskInfo.setState(taskInfo.id);

    });
    deleteTodo.addEventListener("click", () => {

        taskInfo.deleteTodo(taskInfo.id);
    });

    if(taskInfo.state === "completed"){

        label.classList.add("checked");
        checkbox.checked = true;
    }
    return container;
}


