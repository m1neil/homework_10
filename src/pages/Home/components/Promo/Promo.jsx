import frontRoutes from '@/routes/frontRoutes'
import backgroundImg from '@img/promo.webp'
import { Link } from 'react-router'
import styles from './Promo.module.scss'

function Promo() {
	return (
		<section className={styles['promo']}>
			<div className={styles['promo__container']}>
				<div className={styles['promo__content']}>
					<h1
						className={`${styles['promo__title']} title title--white title--big`}
					>
						Make in your journey.
					</h1>
					<div className={`${styles['promo__text']} text text--light`}>
						<p>
							Explore the world with what you love beautiful natural beauty.
						</p>
					</div>
					<Link className="button" to={frontRoutes.navigate.hotels}>
						<span>Explore now</span>
					</Link>
				</div>
			</div>
			<img
				className={`${styles['promo__bg']} ibg`}
				src={backgroundImg}
				alt="background image"
				aria-hidden="true"
			/>
		</section>
	)
}

export default Promo
