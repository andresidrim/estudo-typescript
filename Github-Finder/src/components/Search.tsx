import { BsSearch } from 'react-icons/bs';
import { useState, KeyboardEvent } from 'react';
import classes from './Search.module.css';

type SearchProps = {
	loadUser: (username: string) => Promise<void>;
};

const Search = ({ loadUser }: SearchProps) => {
	const [userName, setUserName] = useState<string>('');

	const handleKeyDown = (e: KeyboardEvent) => {
		if (e.key === 'Enter') {
			loadUser(userName);
		}
	};

	return (
		<div className={classes.search}>
			<h2>Search user:</h2>
			<p>Find their best repositories</p>
			<div className={classes.search_container}>
				<input
					type='text'
					placeholder='Type a users name'
					onChange={(e) => setUserName(e.target.value)}
					onKeyDown={handleKeyDown}
				/>
				<button onClick={() => loadUser(userName)}>
					<BsSearch />
				</button>
			</div>
		</div>
	);
};

export default Search;
