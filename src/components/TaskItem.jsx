import React from "react";
import EditableField from "./EditableField";
import "../App.css";

const TaskItem = (props) => {
	const { title, isDone } = props.task;

	function onRemove() {
		props.onRemove(props.task);
	}

	function onCheck(task) {
		props.onUpdate(props.task, { isDone: !isDone });
	}

	function onValueChange(text) {
		props.onUpdate(props.task, { title: text });
	}

	return (
		<li>
			<label>
				<input type="checkbox" className="taskName" checked={isDone} onChange={onCheck} />
				<EditableField value={title} editMode={false} onValueChange={onValueChange} />
				<button title="Supprimer" className="button-icon" onClick={onRemove}>
					❌
				</button>
			</label>
		</li>
	);
};

export default TaskItem;
