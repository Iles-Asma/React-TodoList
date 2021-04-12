import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import TodoList from "./components/TodoList";
import StorageService from "./StorageService";

const App = () => {
	const [lists, setLists] = useState([]);

	function addList() {
		lists.push({
			id: nanoid(),
			title: "Nouvelle liste …",
			tasks: [],
		});
		setLists([...lists]);
	}

	function supprimerTodolist(TodoList) {
		console.log(lists);
		let pos = lists.findIndex((list) => TodoList.id === list.id);

		if (pos > -1) {
			lists.splice(pos, 1);
			setLists([...lists]);
		}
	}

	return (
		<>
			<div className="mainContainer">
				<div class="addButtonContainer">
					<button class="addButton" onClick={addList}>
						➕ Ajouter une nouvelle liste
					</button>
				</div>

				<div className="container">
					{lists.map((todolist) => (
						<TodoList key={todolist.id} todolist={todolist} superFonctionDeDeclenchement={supprimerTodolist} />
					))}
				</div>
			</div>
		</>
	);
};

export default App;
