import { useState, KeyboardEvent } from 'react';
import './App.css';

type TaskProps = {
	id: number;
	taskName: string;
};

let addButtonClassName = 'add-button-add';

function App() {
	const [tasks, setTasks] = useState<TaskProps[]>([]);
	const [input, setInput] = useState<string>('');
	const [editTask, setEditTask] = useState({
		enabled: false,
		tasks: ''
	});

	const handleInput = () => {
		addButtonClassName = 'add-button-add';

		if (!input) {
			alert('Campo de tarefas vazio');
			return;
		}

		if (editTask.enabled) {
			handleSaveEdit();
			editTask.enabled = false;
			setInput('');
			return;
		}

		const newTask: TaskProps = {
			id: tasks.length,
			taskName: input
		};

		setTasks((prevState) => [...prevState, newTask]);
		setInput('');
	};

	const handleSaveEdit = () => {
		const itemIndex = tasks.findIndex(
			(task) => task.taskName === editTask.tasks
		);

		const allTasks = [...tasks];

		const editedTask: TaskProps = {
			id: itemIndex,
			taskName: input
		};

		allTasks[itemIndex] = editedTask;
		setTasks(allTasks);
	};

	const handleDeletions = (itemIndex: number) => {
		const removeTask = tasks.filter((taskIndex) => taskIndex.id !== itemIndex);
		setTasks(removeTask);
	};

	const editTaskName = (itemName: string) => {
		addButtonClassName = 'add-button-edit';
		setInput(itemName);
		setEditTask({
			enabled: true,
			tasks: itemName
		});
	};

	const handleEnterPress = (e: KeyboardEvent) => {
		if (e.key === 'Enter') {
			handleInput();
		}
	};

	return (
		<div className='App'>
			<h1 className='title'>Lista de tarefas</h1>
			<input
				className='input'
				placeholder='Digite o nome da tarefa'
				value={input}
				onChange={(e) => setInput(e.target.value)}
				onKeyDown={handleEnterPress}
			/>
			<button className={addButtonClassName} onClick={handleInput}>
				{editTask.enabled ? 'Editar tarefa' : 'Adicionar tarefa'}
			</button>
			<hr />
			{tasks.map(({ taskName, id }: TaskProps) => (
				<section className='result' key={id}>
					<span>{taskName}</span>
					{
						<button
							className='edit-button'
							onClick={() => editTaskName(taskName)}
						>
							Editar
						</button>
					}
					<button className='delete-button' onClick={() => handleDeletions(id)}>
						Excluir
					</button>
				</section>
			))}
		</div>
	);
}

export default App;