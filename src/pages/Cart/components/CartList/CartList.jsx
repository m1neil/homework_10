import HeadBlockSection from '@/components/HeadBlockSection/HeadBlockSection'
import { BasesContext } from '@/context/BasesContext'
import { CartContext } from '@/context/CartContext'
import { HotelsContext } from '@/context/HotelsContext'
import { CART_ACTION_TYPES, CART_KEYS } from '@/reducers/cartReducer'
import { useContext } from 'react'
import CartItem from '../CartItem/CartItem'
import styles from './CartList.module.scss'

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

	const onDeleteItem = (idElement, keyCart) => {
		dispatch({
			type: CART_ACTION_TYPES.REMOVE,
			payload: { idItem: idElement, key: keyCart },
		})
	}

	return (
		<div className={styles['cart-list']}>
			<div className="cart-list__container">
				<section className={styles['cart-list__section']}>
					<HeadBlockSection
						title="User hotels"
						classSuffix={styles['cart-list__head']}
					/>
					{hotelsCart.length > 0 ? (
						<div className={styles['cart-list__items']}>
							{hotelsCart.map(itemCart => (
								<CartItem
									key={itemCart.id}
									keyCartService={CART_KEYS.HOTELS}
									price={itemCart.pricePerNight.toFixed(2)}
									rating={itemCart.stars}
									onDelete={onDeleteItem}
									{...itemCart}
								/>
							))}
						</div>
					) : (
						<div>The hotel list is empty!</div>
					)}
				</section>
				<section className={styles['cart-list__section']}>
					<HeadBlockSection
						title="User bases"
						classSuffix={styles['cart-list__head']}
					/>
					{busesCart.length > 0 ? (
						<div className={styles['cart-list__items']}>
							{busesCart.map(itemCart => (
								<CartItem
									key={itemCart.id}
									keyCartService={CART_KEYS.BUSES}
									price={itemCart.price.toFixed(2)}
									onDelete={onDeleteItem}
									{...itemCart}
								/>
							))}
						</div>
					) : (
						<div>The bases list is empty!</div>
					)}
				</section>
			</div>
		</div>
	)
}

export default CartList
