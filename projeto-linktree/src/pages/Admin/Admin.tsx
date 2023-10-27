import { FormEvent, useState, useEffect } from 'react';
import { FiTrash } from 'react-icons/fi';
import Header from '../../components/Header/Header';
import Input from '../../components/Input/Input';
import { LinkProps } from '../../types/LinkProps';
import { db } from '../../services/firebaseConnection';
import {
	addDoc,
	collection,
	onSnapshot,
	query,
	orderBy,
	doc,
	deleteDoc
} from 'firebase/firestore';

const Admin = () => {
	const [nameInput, setNameInput] = useState<string>('');
	const [urlInput, setUrlInput] = useState<string>('');
	const [backgroundColorInput, setBackgroundColorInput] =
		useState<string>('#f1f1f1');
	const [textColorInput, setTextColorInput] = useState<string>('#121212');

	const [links, setLinks] = useState<LinkProps[]>([]);

	useEffect(() => {
		const linksRef = collection(db, 'links');
		const queryRef = query(linksRef, orderBy('created', 'asc'));

		const unsub = onSnapshot(queryRef, (snapshot) => {
			let list: LinkProps[] = [];

			// On snapshot verifica o banco em tempo real
			snapshot.forEach((doc) => {
				list.push({
					id: doc.id,
					name: doc.data().name,
					url: doc.data().url,
					bg: doc.data().bg,
					color: doc.data().color
				});
			});

			setLinks(list);
		});

		return () => {
			unsub();
		};
	}, []);

	const addToDatabase = async () => {
		try {
			await addDoc(collection(db, 'links'), {
				name: nameInput,
				url: urlInput,
				bg: backgroundColorInput,
				color: textColorInput,
				created: new Date()
			});

			console.log('CADASTRADO COM SUCESSO');

			setNameInput('');
			setUrlInput('');
			setBackgroundColorInput('#f1f1f1');
			setTextColorInput('#121212');
		} catch (error) {
			console.log('ERRO AO CADASTRAR NO BANCO\n' + error);
		}
	};

	const handleRegister = (e: FormEvent) => {
		e.preventDefault();

		if (nameInput === '' || urlInput === '') {
			alert('Preencha todos os campos');
			return;
		}

		addToDatabase();
	};

	const handleDeletion = async (id: string) => {
		const docRef = doc(db, 'links', id);
		await deleteDoc(docRef);
	};

	return (
		<div className='flex flex-col items-center min-h-screen pb-7 px-2'>
			<Header />

			<form
				onSubmit={handleRegister}
				className='flex flex-col mt-8 mb-3 w-full max-w-xl'
			>
				<label className='text-white font-medium mt-2 mb-2'>Nome do link</label>
				<Input
					placeholder='Digite o nome do link'
					value={nameInput}
					onChange={(e) => setNameInput(e.target.value)}
				/>
				<label className='text-white font-medium mt-2 mb-2'>URL do link</label>
				<Input
					type='url'
					placeholder='Digite a URL'
					value={urlInput}
					onChange={(e) => setUrlInput(e.target.value)}
				/>

				<section className='flex my-4 gap-5'>
					<div className='flex gap-2'>
						<label className='text-white font-medium mt-2 mb-2'>
							Fundo do link
						</label>
						<input
							type='color'
							value={backgroundColorInput}
							onChange={(e) => setBackgroundColorInput(e.target.value)}
						/>
					</div>
					<div className='flex gap-2'>
						<label className='text-white font-medium mt-2 mb-2'>
							Cor do link
						</label>
						<input
							type='color'
							value={textColorInput}
							onChange={(e) => setTextColorInput(e.target.value)}
						/>
					</div>
				</section>

				{nameInput !== '' && (
					<div className='flex flex-col items-center justify-center mb-7 p-1 border-gray-100/25 border rounded-md'>
						<label className='text-white font-medium mb-3'>Preview</label>
						<article
							className='w-11/12 max-w-lg flex flex-col items-center justify-between bg-zinc-900 rounded px-1 py-3'
							style={{
								marginBottom: 8,
								marginTop: 8,
								backgroundColor: backgroundColorInput
							}}
						>
							<p className='font-medium' style={{ color: textColorInput }}>
								{nameInput}
							</p>
						</article>
					</div>
				)}

				<button
					className='bg-blue-600 h-9 rounded-md text-white font-medium gap-4 flex justify-center items-center mb-7'
					type='submit'
				>
					Cadastrar
				</button>
			</form>

			{links.length > 0 && (
				<h2 className='font-bold text-white mb-4 text-2xl'>Meus Links</h2>
			)}
			{links.map((link) => (
				<article
					key={link.id}
					className='flex items-center justify-between w-11/12 max-w-xl rounded py-3 px-2 mb-2 select-none'
					style={{ backgroundColor: link.bg, color: link.color }}
				>
					<p>{link.name}</p>
					<div>
						<button
							className='border border-dashed p-1 rounded'
							onClick={() => handleDeletion(link.id)}
						>
							<FiTrash size={18} color='white' />
						</button>
					</div>
				</article>
			))}
		</div>
	);
};

export default Admin;
