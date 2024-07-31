function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const todoText = todoInput.value.trim();

    if (todoText !== '') {
        const todoList = document.getElementById('todo-list');

        const li = document.createElement('li');
        li.appendChild(document.createTextNode(todoText));

        const completeButton = document.createElement('button');
        completeButton.appendChild(document.createTextNode('Complete'));
        completeButton.onclick = () => toggleComplete(li);

        const deleteButton = document.createElement('button');
        deleteButton.appendChild(document.createTextNode('Delete'));
        deleteButton.onclick = () => deleteTodo(li);

        li.appendChild(completeButton);
        li.appendChild(deleteButton);

        todoList.appendChild(li);
        todoInput.value = '';
    }
}

function toggleComplete(todoItem) {
    todoItem.classList.toggle('completed');
}

function deleteTodo(todoItem) {
    todoItem.remove();
}
