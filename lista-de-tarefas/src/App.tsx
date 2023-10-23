import {
	useState,
	useEffect,
	useRef,
	useMemo,
	useCallback,
	KeyboardEvent
} from 'react';
import './App.css';

type TaskProps = {
	id: number;
	taskName: string;
};

let addButtonClassName = 'add-button-add';

function App() {
	const inputRef = useRef<HTMLInputElement>(null);
	const firstRender = useRef<boolean>(true);

	const [tasks, setTasks] = useState<TaskProps[]>([]);
	const [input, setInput] = useState<string>('');
	const [editTask, setEditTask] = useState({
		enabled: false,
		tasks: ''
	});

	useEffect(() => {
		console.log('entrou');

		const savedTasks = localStorage.getItem('@cursoreact');
		console.log(savedTasks);

		if (savedTasks) {
			setTasks(JSON.parse(savedTasks));
		}
	}, []);

	useEffect(() => {
		if (firstRender.current) {
			firstRender.current = false;
			return;
		}

		localStorage.setItem('@cursoreact', JSON.stringify(tasks));
	}, [tasks]);

	const handleInput = useCallback(() => {
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
	}, [input, tasks]);

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
		inputRef.current?.focus();
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

	const totalTasks = useMemo<number>(() => {
		return tasks.length;
	}, [tasks]);

	return (
		<div className='App'>
			<h1 className='title'>Lista de tarefas</h1>
			<input
				className='input'
				placeholder='Digite o nome da tarefa'
				value={input}
				onChange={(e) => setInput(e.target.value)}
				onKeyDown={handleEnterPress}
				ref={inputRef}
			/>
			<button className={addButtonClassName} onClick={handleInput}>
				{editTask.enabled ? 'Editar tarefa' : 'Adicionar tarefa'}
			</button>
			<hr />

			<strong className='task-counter'>Você tem {totalTasks} tarefas</strong>

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
