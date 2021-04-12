import { useState } from "react";
import "../App.css";
import { nanoid } from "nanoid";

import TaskItem from "./TaskItem";
import TaskForm from "./TaskForm";
import EditableField from "./EditableField";

function TodoList(props) {
	const [todolist, setTodolist] = useState(props.todolist);

	function changeListTitle(newTitle) {
		todolist.title = newTitle;
		setTodolist({ ...todolist });
	}

	function updateTask(initialTask, updates) {
		let pos = todolist.tasks.indexOf(initialTask);
		if (pos > -1) {
			let taskUpdated = { ...initialTask, ...updates };
			todolist.tasks.splice(pos, 1, taskUpdated);
			setTodolist({ ...todolist });
		}
	}

	function onAddTask(title) {
		todolist.tasks.push({
			id: nanoid(),
			title: title,
			isDone: false,
		});

		setTodolist({ ...todolist });
	}

	function removeTask(task) {
		let pos = todolist.tasks.indexOf(task);
		if (pos > -1) {
			todolist.tasks.splice(pos, 1);
			setTodolist({ ...todolist });
		}
	}

	function onRemove() {
		props.superFonctionDeDeclenchement(todolist);
	}

	const nbDone = todolist.tasks.filter((task) => task.isDone).length;

	return (
		<div className="TodoApp">
			<button title="supprimer cette liste" className="button-icon" onClick={onRemove}>
				❌
			</button>
			<h1>
				<EditableField value={todolist.title} editMode={false} onValueChange={changeListTitle} />
			</h1>

			<TaskForm onAddTask={onAddTask} />
			<p>
				{nbDone}/{todolist.tasks.length} effectuées
			</p>
			<ul>
				{todolist.tasks.map((task) => (
					<TaskItem key={task.id} task={task} onRemove={removeTask} onUpdate={updateTask} />
				))}
			</ul>
		</div>
	);
}

export default TodoList;
