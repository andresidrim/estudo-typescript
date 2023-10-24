import { Link } from 'react-router-dom';
import style from './Home.module.css';
import { BiSearch } from 'react-icons/bi';

const Home = () => {
	return (
		<main className={style.container}>
			<form className={style.form}>
				<input placeholder='Digite o simbolo da moeda (Ex: BTC)' />
				<button type='submit'>
					<BiSearch size={30} />
				</button>
			</form>

			<table>
				<thead>
					<tr>
						<th scope='col'>Moeda</th>
						<th scope='col'>Valor Mercado</th>
						<th scope='col'>Preço</th>
						<th scope='col'>Volume</th>
					</tr>
				</thead>

				<tbody id='tbody'>
					<tr className={style.tr}>
						<td className={style.tdlabel} data-label='Moeda'>
							<Link className={style.link} to='/detail/btc'>
								<span>Bitcoin</span> | BTC
							</Link>
						</td>
						<td className={style.tdlabel} data-label='Mercado'>
							R$ 1000,00
						</td>
						<td className={style.tdlabel} data-label='Preço'>
							R$ 40,20
						</td>
						<td className={style.tdprofit} data-label='Volume'>
							<span>-5.3</span>
						</td>
					</tr>
				</tbody>
			</table>
		</main>
	);
};

export default Home;
