import { CartContext } from '@/context/CartContext'
import { useToggleThemeContext } from '@/context/ToggleThemeContext/useToggleThemeContext'
import { CART_ACTION_TYPES } from '@/reducers/cartReducer'
import { useContext } from 'react'
import Rating from '../Rating/Rating'
import styles from './CardService.module.scss'

function CardService({
	id,
	keyCartService,
	image,
	title,
	rating,
	description,
	isOrdered,
	children,
}) {
	const { dispatch } = useContext(CartContext)
	const { isDark } = useToggleThemeContext()

	const onAddServiceToCart = () => {
		if (isOrdered) {
			dispatch({
				type: CART_ACTION_TYPES.REMOVE,
				payload: { idItem: id, key: keyCartService },
			})
		} else {
			dispatch({
				type: CART_ACTION_TYPES.ADD,
				payload: { idItem: id, key: keyCartService },
			})
		}
	}

	return (
		<article className={`${styles['card']} ${isDark ? styles['--dark'] : ''}`}>
			<a href="#" className={styles['card__img']}>
				<img className="ibg" src={image} alt="Image" />
			</a>
			<div className={styles['card__body']}>
				<h3 className={styles['card__title']}>{title}</h3>
				{children}
				<div className={`${styles['card__text']} text`}>
					<p>{description}</p>
				</div>
				<div className={styles['card__bottom']}>
					<Rating classSuffix={styles['card__rating']} curRating={rating} />
					<button
						type="button"
						className={`${styles['card__button']} button ${
							isOrdered ? 'button--green' : ''
						}`}
						onClick={onAddServiceToCart}
					>
						<span>{isOrdered ? 'Cancel order' : 'Booking now'} </span>
					</button>
				</div>
			</div>
		</article>
	)
}

export default CardService
