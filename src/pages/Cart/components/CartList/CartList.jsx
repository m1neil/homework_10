import HeadBlockSection from '@/components/HeadBlockSection/HeadBlockSection'
import { BasesContext } from '@/context/BasesContext'
import { CartContext } from '@/context/CartContext'
import { HotelsContext } from '@/context/HotelsContext'
import { CART_KEYS } from '@/reducers/cartReducer'
import { useContext } from 'react'

function CartList() {
	const { cartState, dispatch } = useContext(CartContext)
	const hotels = useContext(HotelsContext)
	const buses = useContext(BasesContext)

	const busesCart = buses.filter(bus =>
		cartState[CART_KEYS.BUSES].includes(bus.id)
	)
	const hotelsCart = hotels.filter(hotel =>
		cartState[CART_KEYS.HOTELS].includes(hotel.id)
	)

	console.log('busesCart', busesCart)
	console.log('hotelsCart', hotelsCart)

	return (
		<div className="cart-list">
			<div className="cart-list__container">
				<HeadBlockSection title="User hotels" />
				{/* {hotelsCart.length > 0 ? : <div>The hotel list is empty!</div>} */}
			</div>
		</div>
	)
}

export default CartList
