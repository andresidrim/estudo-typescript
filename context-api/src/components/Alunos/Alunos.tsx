import { useContext } from 'react';
import { UserContext } from '../../contexts/user';
import Nome from '../Nome/Nome';

const Alunos = () => {
	const { qtdAluno, changeName } = useContext(UserContext);

	return (
		<div>
			<h3>Quantidade de alunos: {qtdAluno}</h3>
			<button onClick={() => changeName('André')}>mudar nome</button>
			<br /> <br />
			<Nome />
		</div>
	);
};

export default Alunos;
