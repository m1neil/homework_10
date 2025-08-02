import Rating from '@/components/Rating/Rating'
import { transformDate } from '@/utiles/transformData'
import styles from './BusCard.module.scss'

function BusCard({ bus }) {
	const {
		image,
		name,
		price,
		seats,
		wifi,
		departureTime,
		rating,
		description,
	} = bus
	return (
		<article className={styles['bus-card']}>
			<a href="#" className={styles['bus-card__img']}>
				<img className="ibg" src={image} alt="Image" />
			</a>
			<div className={styles['bus-card__body']}>
				<h3 className={styles['bus-card__title']}>{name}</h3>
				<div className={styles['bus-card__price']}>${price.toFixed(2)}</div>
				<div className={styles['bus-card__date']}>
					<time dateTime="2025-08-05T08:00">
						📅 {transformDate(departureTime)}
					</time>{' '}
				</div>
				<div className={styles['bus-card__info']}>
					<span>🧍 Places: {seats}</span>
					<span>📶 Wi-Fi: {wifi ? 'Yes' : 'No'}</span>
				</div>
				<div className={`${styles['bus-card__text']} text`}>
					<p>{description}</p>
				</div>
				<div className={styles['bus-card__bottom']}>
					<Rating classSuffix={styles['bus-card__rating']} curRating={rating} />
					<button
						type="button"
						className={`${styles['bus-card__button']} button`}
					>
						<span>Booking now</span>
					</button>
				</div>
			</div>
		</article>
	)
}

export default BusCard
