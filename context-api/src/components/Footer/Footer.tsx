import { useContext, useState } from 'react';
import { UserContext } from '../../contexts/user';

const Footer = () => {
	const { qtdAluno, addStudent } = useContext(UserContext);

	return (
		<footer>
			<hr />
			<h3>Footer</h3>
			<h4>Alunos online: {qtdAluno}</h4>
			<button
				onClick={() => {
					addStudent();
				}}
			>
				Novo Aluno
			</button>
		</footer>
	);
};

export default Footer;
