'use client';

import {
	MenuIcon,
	ShoppingCartIcon,
	LogInIcon,
	PercentIcon,
	ListIcon,
	HomeIcon,
	LogOutIcon
} from 'lucide-react';
import { Card } from './card';
import { Button } from './button';
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from './sheet';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { signIn, signOut, useSession } from 'next-auth/react';
import { Separator } from '@radix-ui/react-separator';

const Header = () => {
	const { status, data } = useSession();

	const handleLoginClick = async () => {
		await signIn();
	};

	const handleLogoutClick = async () => {
		await signOut();
	};

	return (
		<Card className='flex items-center justify-between p-[1.875rem]'>
			<Sheet>
				<SheetTrigger asChild>
					<Button size='icon' variant='outline'>
						<MenuIcon />
					</Button>
				</SheetTrigger>

				<SheetContent side='left'>
					<SheetHeader className='text-left text-lg font-semibold'>
						Menu
					</SheetHeader>

					{status === 'authenticated' && data?.user && (
						<div className='flex flex-col'>
							<div className='py-4 flex items-center gap-2'>
								<Avatar>
									<AvatarFallback>
										{data.user.name?.[0].toUpperCase()}
									</AvatarFallback>

									{data.user.image && (
										<AvatarImage src={data.user.image} />
									)}
								</Avatar>

								<p className='font-medium'>{data.user.name}</p>
							</div>
							<Separator />
						</div>
					)}

					<div className='mt-4 flex flex-col gap-2'>
						{status === 'unauthenticated' && (
							<Button
								onClick={handleLoginClick}
								className='w-full justify-start gap-3'
								variant='outline'
							>
								<LogInIcon size={18} />
								Fazer Login
							</Button>
						)}

						{status === 'authenticated' && (
							<Button
								onClick={handleLogoutClick}
								className='w-full justify-start gap-3'
								variant='outline'
							>
								<LogOutIcon size={18} />
								Fazer Logout
							</Button>
						)}

						<Button
							className='w-full justify-start gap-3'
							variant='outline'
						>
							<HomeIcon size={18} />
							Inicio
						</Button>

						<Button
							className='w-full justify-start gap-3'
							variant='outline'
						>
							<PercentIcon size={18} />
							Ofertas
						</Button>

						<Button
							className='w-full justify-start gap-3'
							variant='outline'
						>
							<ListIcon size={18} />
							Catalogo
						</Button>
					</div>
				</SheetContent>
			</Sheet>

			<h1 className='text-lg font-semibold'>
				<span className='text-primary'>Online</span> Store
			</h1>
			<Button size='icon' variant='outline'>
				<ShoppingCartIcon />
			</Button>
		</Card>
	);
};

export default Header;
