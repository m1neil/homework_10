import Rating from '@/components/Rating/Rating'
import { CartContext } from '@/context/CartContext'
import { CART_ACTION_TYPES, CART_KEYS } from '@/reducers/cartReducer'
import { useContext } from 'react'
import styles from './HotelCard.module.scss'

function HotelCard({ hotel }) {
	const { cartState, dispatch } = useContext(CartContext)
	const { id, name, city, stars, pricePerNight, image, description } = hotel

	const onAddHotel = () => {
		if (cartState[CART_KEYS.HOTELS].includes(id)) return
		dispatch({
			type: CART_ACTION_TYPES.ADD,
			payload: { idItem: id, key: CART_KEYS.HOTELS },
		})
	}

	return (
		<article className={styles['hotel-card']}>
			<a className={styles['hotel-card__img']} href="#">
				<img className="ibg" src={image} alt="preview hotel" />
			</a>
			<div className={styles['hotel-card__body']}>
				<h3 className={styles['hotel-card__title']}>{name}</h3>
				<div className={styles['hotel-card__info']}>
					<div className={styles['hotel-card__city']}>{city}</div>
					<div className={styles['hotel-card__price']}>
						${pricePerNight.toFixed(2)}/1days
					</div>
				</div>
				<div className={`${styles['hotel-card__text']} text`}>
					<p>{description}</p>
				</div>
				<div className={styles['hotel-card__bottom']}>
					<Rating
						classSuffix={styles['hotel-card__rating']}
						curRating={stars}
					/>
					<button
						type="button"
						className={`${styles['hotel-card__button']} button`}
						onClick={onAddHotel}
					>
						<span>Booking now</span>
					</button>
				</div>
			</div>
		</article>
	)
}

export default HotelCard
