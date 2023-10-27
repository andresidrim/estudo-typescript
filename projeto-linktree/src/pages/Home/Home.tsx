import { useState, useEffect } from 'react';
import Social from '../../components/Social/Social';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { LinkProps } from '../../types/LinkProps';
import { db } from '../../services/firebaseConnection';
import {
	getDocs,
	collection,
	orderBy,
	query,
	doc,
	getDoc
} from 'firebase/firestore';

type SocialProps = {
	facebook: string;
	instagram: string;
	youtube: string;
};

const Home = () => {
	const [links, setLinks] = useState<LinkProps[]>([]);
	const [socialLinks, setSocialLinks] = useState<SocialProps>();

	const loadLinks = async () => {
		const linksRef = collection(db, 'links');
		const queryRef = query(linksRef, orderBy('created', 'asc'));

		const snapshot = await getDocs(queryRef);
		let list: LinkProps[] = [];

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
	};

	useEffect(() => {
		loadLinks();
	}, []);

	const loadSocialLinks = async () => {
		const docRef = doc(db, 'social', 'link');
		const snapshot = await getDoc(docRef);

		if (snapshot.data() !== undefined) {
			setSocialLinks({
				facebook: snapshot.data()?.facebook,
				instagram: snapshot.data()?.instagram,
				youtube: snapshot.data()?.youtube
			});
		}
	};

	useEffect(() => {
		loadSocialLinks();
	}, []);

	return (
		<div className='flex flex-col w-full py-4 items-center justify-center'>
			<h1 className='md:text-4xl text-3xl font-bold text-white mt-20'>
				Sujeito Programador
			</h1>
			<span className='text-gray-50 mb-5 mt-3'>Veja meus links 👇</span>

			<main className='flex flex-col w-11/12 max-w-xl text-center'>
				{links.map((link) => (
					<section
						key={link.id}
						className='mb-4 w-full py-2 rounded-lg font-medium select-none cursor-pointer transition-transform hover:scale-x-105'
						style={{ backgroundColor: link.bg, color: link.color }}
					>
						<a href={link.url} target='_blank'>
							<p className='md:text-lg text-base'>{link.name}</p>
						</a>
					</section>
				))}

				{socialLinks && (
					<footer className='flex justify-center gap-3 my-4'>
						{socialLinks.facebook.length > 0 && (
							<Social url={socialLinks.facebook}>
								<FaFacebook size={35} color='white' />
							</Social>
						)}

						{socialLinks.youtube.length > 0 && (
							<Social url={socialLinks.youtube}>
								<FaYoutube size={35} color='white' />
							</Social>
						)}

						{socialLinks.instagram.length > 0 && (
							<Social url={socialLinks.instagram}>
								<FaInstagram size={35} color='white' />
							</Social>
						)}
					</footer>
				)}
			</main>
		</div>
	);
};

export default Home;
