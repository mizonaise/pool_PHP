const local = window.localStorage;
const todos = local.getItem('list') ? local.getItem('list').split(',') : [];

fill(todos);

String.prototype.isEmpty = function () {
	return (this.length === 0 || !this.trim());
};

function fill(arr) {
	let str = '<h1 id="title">To do list</h1>';
	arr.forEach(cur => str += `<div class="todo">${cur}</div>`);
	$('#ft_list').html(`${str}<button id="new" name="new">New</button>`);
}

$('#new').click(e => {
	let todo = prompt('Nouveau TO_DO');
	if (!todo.isEmpty()) {
		$('#title').after(`<div class="todo">${todo}</div>`);
		todos.unshift(todo);
		local.setItem('list', todos);
	}
});

$('#ft_list').click(e => {
	console.log(e.target)
	if (e.target.classList.contains('todo'))
		if (confirm(`Delete !?`)) {
			todos.forEach((cur, i, arr) => cur == e.target.textContent ? arr.splice(i, 1) : 1);
			local.setItem('list', todos);
			e.target.remove();
		}
});