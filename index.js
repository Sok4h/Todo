const input = document.querySelector(".inputTodo");
const todoContainer = document.querySelector(".todos__container");
let todosArray = [];
let items_left = document.querySelector(".items_left");
let currentFilter="all";
let clear__completed = document.querySelector(".clear__completed");
const filters = document.querySelector(".filters").querySelectorAll(".btn")

clear__completed.addEventListener("click",()=>{

    for (const todo of todosArray.filter(todo=>todo.state=="completed")) {
        todosArray.splice(todosArray.findIndex(todo=>todo.state==="completed"),1)   
    }

renderTodo();

});
filters.forEach(filter => {

    filter.addEventListener("click", () =>{

       for (const i of filters) {
           
        i.classList.remove("btn--active");
        
       }

       filter.classList.add("btn--active");

       currentFilter =filter.name
       renderTodo();
       
      
    });

});


const filter= ()=>{

    if(currentFilter=="all"){

        return todosArray;
    }

    else if(currentFilter=="active"){

        return todosArray.filter(todo => todo.state=="active");
        
    }

    else if(currentFilter=="completed"){
      
        return todosArray.filter(todo => todo.state=="completed");
        

    }  

    return todosArray;

}

input.addEventListener("keypress", (e) => {

    if (e.keyCode === 13) {

        CreateTodo();
    }
});

const CreateTodo = () => {

    if (input.value === "") {

        //está vacio
    }
    else {

        let taskInfo = {
            id: Math.random().toString(),
            text: input.value,
            state: "active",
            deleteTodo: deleteTodo,
            setState:setState
        }

        //todosArray=[taskInfo,...todosArray];
        todosArray.push(taskInfo);
        renderTodo();

        input.value = "";
    }
}

const deleteTodo = (id) => {

    const current = todosArray.findIndex(e => e.id === id);
    todosArray.splice(current, 1);
    renderTodo();
}

const renderTodo = () => {
    
    let tempArray = filter();
    console.log(tempArray);
    todoContainer.innerHTML = ""
    items_left.innerHTML=todosArray.filter(todo => todo.state === "active").length +" items left";
    tempArray.forEach(todo=> {

        todoContainer.appendChild(task(todo));

    })

}

const setState = (id)=> {

    const current = todosArray.findIndex(e => e.id === id);

    if(todosArray[current].state=="active"){

        todosArray[current].state="completed"

    }
    else{
        todosArray[current].state="active"
    }
    
    renderTodo();
}
