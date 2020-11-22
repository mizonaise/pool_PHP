
const list = document.querySelector("#ft_list");
const local = window.localStorage;
const todos = local.getItem('list') ? local.getItem('list').split(',') : [];


fill(todos);

function fill(arr) {
    let str = '<h1 id="title">TO DO LIST</h1>';
    arr.forEach(function (elem) {
        str = str + `<div class="todo">${elem}</div>`;
    });
    list.innerHTML = `${str}<button id="new" name="new">New</button>`;
}

String.prototype.isEmpty = function () {
    return (this.length === 0 || !this.trim());
}

document.querySelector('#new').addEventListener('click', add_list)

function add_list(e) {
    let todo = prompt('Nouveau TO_DO');
    if (!todo.isEmpty()) {
        list.children[1].insertAdjacentHTML('beforebegin', `<div class="todo">${todo}</div>`);
        todos.unshift(todo);
        local.setItem('list', todos);
    }
};

list.addEventListener('click', remove_list);

function remove_list(e) {
    if (e.target.classList.contains('todo'))
        if (confirm(`Delete !?`)) {
            todos.forEach((cur, i, arr) => cur == e.target.textContent ? arr.splice(i, 1) : 1);
            local.setItem('list', todos);
            e.target.remove();
        }
};