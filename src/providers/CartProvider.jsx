import { CartContext } from '@/context/CartContext'
import { cartReducer, initStateReducer } from '@/reducers/cartReducer'
import { useReducer } from 'react'

function CartProvider({ children }) {
	const [cartState, dispatch] = useReducer(cartReducer, initStateReducer)
	return <CartContext value={{ cartState, dispatch }}>{children}</CartContext>
}

export default CartProvider
