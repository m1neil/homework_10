import Rating from '@/components/Rating/Rating'
import testImg from '@img/test-image-card.jpg'
import styles from './HotelCard.module.scss'

function HotelCard() {
	return (
		<article className={styles['hotel-card']}>
			<a className={styles['hotel-card__img']} href="#">
				<img src={testImg} alt="Image" />
			</a>
			<div className="hotel-card__body">
				<h3 className="hotel-card__title">Name Hotel</h3>
				<div className="hotel-card__info">
					<div className="hotel-card__city">Paris</div>
					<div className="hotel-card__price">$299.00/2days</div>
				</div>
				<div className="hotel-card__text text">
					<p>
						Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore incididunt ut labore et dolore
					</p>
				</div>
				<div className="hotel-card__bottom">
					<Rating curRating={3} />
					<button type="button" className="hotel-card__button button">
						<span>Booking now</span>
					</button>
				</div>
			</div>
		</article>
	)
}

export default HotelCard
