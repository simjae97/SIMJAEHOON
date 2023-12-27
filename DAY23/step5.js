document.addEventListener("DOMContentLoaded",function(){
    const input = document.querySelector("#todo")
    const todoList = document.querySelector("#todo-list")
    const addButton = document.querySelector("#add-button")

    let keyCount = 0;

    const addTodo = function(){
        if(input.value.trim()===""){
            alert("할 일을 선택해 주세요");
            return;
        }


        const item = document.createElement("div")
        const checkbox = document.createElement("input")
        const text = document.createElement("span");
        const button = document.createElement("buttton");

        const key = keyCount;
        keyCount++;
        item.setAttribute("data-key",key)
        item.appendChild(checkbox);
        item.appendChild(text);
        item.appendChild(button);
        todoList.appendChild(item);

        checkbox.type = "checkbox";
        checkbox.addEventListener("change", function(event){
            item.style.textDecoration = event.target.checked? "line-through" : ""
        })

        text.textContent = input.value;

        button.textContent="제거하기"
        button.addEventListener("click", function(){
            removeTodo(key)
        })
        input.value=""
    }
    const removeTodo = function(key){
        const item = document.querySelector(`[data-key="${key}"]`)
        todoList.removeChild(item)
    }
    addButton.addEventListener("click", addTodo)
    input.addEventListener("keyup", function(event){
        const ENTER = 13
        if (event.keyCode === ENTER){
            addTodo();
        }
    })

})