import React, { useState, useRef } from "react";
import "../App.css";

const EditableField = (props) => {
	const [editMode, setEditMode] = useState(props.editMode);
	const value = props.value;

	const input = useRef();

	function onEdit() {
		setEditMode((prevMode) => !prevMode);
	}

	function finishEdit() {
		setEditMode(false);
		props.onValueChange(input.current.value);
	}

	function onKeyDown(event) {
		if (event.key === "Enter") {
			finishEdit();
		}
	}
	return (
		<>
			{editMode ? <input className="checkBox" type="text" id="edited" defaultValue={value} ref={input} onBlur={finishEdit} onKeyDown={onKeyDown} /> : value}

			<button title="Modifier" className="button-icon" onClick={onEdit}>
				{!editMode ? "✏" : "✔"}
			</button>
		</>
	);
};

export default EditableField;
