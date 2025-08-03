import { useToggleThemeContext } from '@/context/ToggleThemeContext/useToggleThemeContext'
import frontRoutes from '@/routes/frontRoutes'
import backgroundImgDark from '@img/promo-dark.webp'
import backgroundImg from '@img/promo.webp'
import { Link } from 'react-router'
import styles from './Promo.module.scss'

function Promo() {
	const { isDark } = useToggleThemeContext()
	return (
		<section className={`${styles['promo']} ${isDark ? styles['--dark'] : ''}`}>
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
			<div className={styles['promo__bg']}>
				<img
					className={`${styles['promo__img']} ${styles['promo__img--light']}`}
					src={backgroundImg}
					alt="background image"
					aria-hidden="true"
				/>
				<img
					className={`${styles['promo__img']} ${styles['promo__img--dark']}`}
					src={backgroundImgDark}
					alt="background image"
					aria-hidden="true"
				/>
			</div>
		</section>
	)
}

export default Promo
