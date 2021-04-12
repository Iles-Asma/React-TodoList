import React, { useRef } from "react";

const TaskForm = (props) => {
	const input = useRef();

	function onFormSubmit(event) {
		event.preventDefault();

		let newTaskTitle = input.current.value.trim();

		if (newTaskTitle === "") return;

		props.onAddTask(newTaskTitle);

		input.current.value = "";
	}

	return (
		<form action="#" onSubmit={onFormSubmit} id="test">
			<input type="text" placeholder="Nouvelle tâche ..." ref={input} />

			<button type="submit">Ajouter</button>
		</form>
	);
};

export default TaskForm;
