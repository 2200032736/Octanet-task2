function addTodo() {
    const todoInput = document.getElementById('todo-input').value;
    const todoDate = document.getElementById('todo-date').value;
    const todoDetails = document.getElementById('todo-details').value;

    if (todoInput === '') {
        alert('Please add a task');
        return;
    }

    const todoList = document.getElementById('todo-list');

    const li = document.createElement('li');
    const taskText = document.createTextNode(todoInput);
    li.appendChild(taskText);

    if (todoDate) {
        const dateSpan = document.createElement('span');
        dateSpan.textContent = ` (${todoDate})`;
        dateSpan.className = 'todo-details';
        li.appendChild(dateSpan);
    }

    if (todoDetails) {
        const detailsDiv = document.createElement('div');
        detailsDiv.textContent = todoDetails;
        detailsDiv.className = 'todo-details';
        li.appendChild(detailsDiv);
    }

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        todoList.removeChild(li);
    };
    li.appendChild(deleteButton);

    todoList.appendChild(li);

    document.getElementById('todo-input').value = '';
    document.getElementById('todo-date').value = '';
    document.getElementById('todo-details').value = '';
}
