import { createContext, ReactNode, useState } from 'react';
import { ProductProps } from '../pages/Home/Home';

type CartContextData = {
	cart: CartProps[];
	cartAmount: number;
	addItemToCart: (newItem: ProductProps) => void;
	removeItemFromCart: (product: CartProps) => void;
	total: string;
};

type CartProps = {
	id: number;
	title: string;
	description: string;
	price: number;
	cover: string;
	amount: number;
	total: number;
};

type CartProviderProps = {
	children: ReactNode;
};

const CartContext = createContext({} as CartContextData);

const CartProvider = ({ children }: CartProviderProps) => {
	const [cart, setCart] = useState<CartProps[]>([]);
	const [total, setTotal] = useState<string>('');

	const addItemToCart = (newItem: ProductProps) => {
		const itemIndex = cart.findIndex((item) => item.id === newItem.id);

		if (itemIndex !== -1) {
			const updatedCartList = cart;

			updatedCartList[itemIndex].amount += 1;
			updatedCartList[itemIndex].total =
				updatedCartList[itemIndex].amount * updatedCartList[itemIndex].price;

			setCart(updatedCartList);
			totalPrice(updatedCartList);
			return;
		}

		const data = {
			...newItem,
			amount: 1,
			total: newItem.price
		};

		setCart((products) => [...products, data]);
		totalPrice([...cart, data]);
	};

	const removeItemFromCart = (product: CartProps) => {
		const itemIndex = cart.findIndex((item) => item.id === product.id);

		if (cart[itemIndex].amount > 1) {
			const updatedCartList = cart;

			updatedCartList[itemIndex].amount -= 1;
			updatedCartList[itemIndex].total =
				updatedCartList[itemIndex].amount * updatedCartList[itemIndex].price;

			setCart(updatedCartList);
			totalPrice(updatedCartList);
			return;
		}

		const removeItem = cart.filter((item) => item.id !== product.id);

		setCart(removeItem);
		totalPrice(removeItem);
	};

	const totalPrice = (items: CartProps[]) => {
		const cart = items;
		const result = cart.reduce((acc, obj) => {
			return acc + obj.total;
		}, 0);

		const formatedResult = result.toLocaleString('pt-BR', {
			style: 'currency',
			currency: 'BRL'
		});

		setTotal(formatedResult);
	};

	return (
		<CartContext.Provider
			value={{
				cart,
				cartAmount: cart.length,
				addItemToCart,
				removeItemFromCart,
				total
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export { CartContext };
export default CartProvider;
