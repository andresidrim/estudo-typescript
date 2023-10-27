import { useState, FormEvent, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Input from '../../components/Input/Input';
import { db } from '../../services/firebaseConnection';
import { setDoc, doc, getDoc } from 'firebase/firestore';

const SocialMedia = () => {
	const [facebook, setFacebook] = useState<string>('');
	const [instagram, setInstagram] = useState<string>('');
	const [youtube, setYoutube] = useState<string>('');

	const loadLinks = async () => {
		const docRef = doc(db, 'social', 'link');
		const snapshot = await getDoc(docRef);

		if (snapshot.data() !== undefined) {
			setFacebook(snapshot.data()?.facebook);
			setInstagram(snapshot.data()?.instagram);
			setYoutube(snapshot.data()?.youtube);
		}
	};

	useEffect(() => {
		loadLinks();
	}, []);

	const addToDatabase = async () => {
		try {
			await setDoc(doc(db, 'social', 'link'), {
				facebook: facebook,
				instagram: instagram,
				youtube: youtube
			});

			console.log('CADASTRADOS COM SUCESSO');
		} catch (error) {
			console.log('ERRO AO CADASTRAR\n' + error);
		}
	};

	const handleRegister = (e: FormEvent) => {
		e.preventDefault();

		addToDatabase();
	};

	return (
		<div className='flex flex-col items-center min-h-screen pb-7 px-2'>
			<Header />

			<h1 className='text-white text-2xl font-medium mt-8 mb-4'>
				Minhas redes sociais
			</h1>

			<form onSubmit={handleRegister} className='flex flex-col max-w-xl w-full'>
				<label className='text-white font-medium mt-2 mb-2'>
					Link do Facebook
				</label>
				<Input
					type='url'
					placeholder='Digite a URL do Facebook'
					value={facebook}
					onChange={(e) => setFacebook(e.target.value)}
				/>

				<label className='text-white font-medium mt-2 mb-2'>
					Link do Instagram
				</label>
				<Input
					type='url'
					placeholder='Digite a URL do Instagram'
					value={instagram}
					onChange={(e) => setInstagram(e.target.value)}
				/>

				<label className='text-white font-medium mt-2 mb-2'>
					Link do Youtube
				</label>
				<Input
					type='url'
					placeholder='Digite a URL do Youtube'
					value={youtube}
					onChange={(e) => setYoutube(e.target.value)}
				/>

				<button
					type='submit'
					className='text-white bg-blue-600 h-9 rounded-md items-center justify-center flex mb-7 font-medium'
				>
					Salvar Links
				</button>
			</form>
		</div>
	);
};

export default SocialMedia;
