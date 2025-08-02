import Rating from '@/components/Rating/Rating'
import styles from './HotelCard.module.scss'

function HotelCard({ hotel }) {
	const { id, name, city, stars, pricePerNight, image, description } = hotel
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
					>
						<span>Booking now</span>
					</button>
				</div>
			</div>
		</article>
	)
}

export default HotelCard
