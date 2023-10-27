import { useContext } from 'react';
import { UserContext } from '../../contexts/user';
import Nome from '../Nome/Nome';

const Alunos = () => {
	const { qtdAluno } = useContext(UserContext);

	return (
		<div>
			<h3>Quantidade de alunos: {qtdAluno}</h3>

			<Nome />
		</div>
	);
};

export default Alunos;
