import { useState, ReactNode, createContext } from 'react';

type UserProviderProps = {
	children: ReactNode;
};

type UserContextData = {
	aluno: string;
	qtdAluno: number;
	changeName: (name: string) => void;
	addStudent: () => void;
};

export const UserContext = createContext({} as UserContextData);

const UserProvider = ({ children }: UserProviderProps) => {
	const [aluno, setAluno] = useState<string>('Maria Silva');
	const [qtdAluno, setQtdAluno] = useState<number>(1);

	const changeName = (name: string) => {
		setAluno(name);
	};

	const addStudent = () => {
		setQtdAluno((prevState) => prevState + 1);
	};

	return (
		<UserContext.Provider value={{ aluno, qtdAluno, changeName, addStudent }}>
			{children}
		</UserContext.Provider>
	);
};

export default UserProvider;
