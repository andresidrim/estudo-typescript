import { ReactNode, useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from '../services/firebaseConnection';
import { onAuthStateChanged } from 'firebase/auth';

type PrivateProps = {
	children: ReactNode;
};

const Private = ({ children }: PrivateProps): any => {
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [isSignedIn, setIsSignedIn] = useState<boolean>(false);

	useEffect(() => {
		const unsub = onAuthStateChanged(auth, (user) => {
			if (user) {
				const userData = {
					uid: user.uid,
					email: user.email
				};

				localStorage.setItem('@reactlinks', JSON.stringify(userData));
				setIsLoading(false);
				setIsSignedIn(true);
			} else {
				setIsLoading(false);
				setIsSignedIn(false);
			}
		});

		// Funcao de cleanup
		return () => {
			unsub();
		};
	}, []);

	if (isLoading) {
		return <div></div>;
	}

	if (!isSignedIn) {
		return <Navigate to='/login' />;
	}

	return children;
};

export default Private;
