import Rating from '@/components/Rating/Rating'
import { transformDate } from '@/utils/transformData'
import styles from './CartItem.module.scss'

function CartItem({
	id,
	keyCartService,
	name,
	departureTime,
	price,
	seats,
	wifi,
	image,
	rating,
	onDelete,
}) {
	return (
		<article className={styles['card-cart']}>
			<a href="#" className={styles['card-cart__img']}>
				<img className="img" src={image} alt="Image" />
			</a>
			<div className={styles['card-cart__content']}>
				<h3 className={styles['card-cart__title']}>{name}</h3>
				<div className={styles['card-cart__price']}>${price}</div>
				{departureTime && (
					<time
						className={styles['card-cart__date']}
						dateTime="2025-08-05T08:00"
					>
						📅 {transformDate(departureTime)}
					</time>
				)}
				{seats && (
					<div className={styles['card-cart__info']}>
						<span>🧍 Places: {seats}</span>
						<span>📶 Wi-Fi: {wifi ? 'Yes' : 'No'}</span>
					</div>
				)}
				<Rating classSuffix={styles['card-cart__rating']} curRating={rating} />
				<button
					type="button"
					className={`${styles['card-cart__button']} button button--small button--red`}
					onClick={() => onDelete(id, keyCartService)}
				>
					<span>Cancel order</span>
				</button>
			</div>
		</article>
	)
}

export default CartItem
