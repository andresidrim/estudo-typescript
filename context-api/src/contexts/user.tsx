import { useState, ReactNode, createContext } from 'react';

type UserProviderProps = {
	children: ReactNode;
};

type UserContextData = {
	aluno: string;
	qtdAluno: number;
};

export const UserContext = createContext({} as UserContextData);

const UserProvider = ({ children }: UserProviderProps) => {
	const [aluno, setAluno] = useState<string>('Maria Silva');
	const [qtdAluno, setQtdAluno] = useState<number>(1);

	return (
		<UserContext.Provider value={{ aluno, qtdAluno }}>
			{children}
		</UserContext.Provider>
	);
};

export default UserProvider;
