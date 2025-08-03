import { useToggleThemeContext } from '@/context/ToggleThemeContext/useToggleThemeContext'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs'
import styles from './PromoSection.module.scss'

function PromoSection({ title = 'Title', imageBg, imageBgDark }) {
	const { isDark } = useToggleThemeContext()
	return (
		<div className={`${styles['promo']} ${isDark ? styles['--dark'] : ''}`}>
			<div className={styles['promo__container']}>
				<h1
					className={`${styles['promo__title']} title title--fz-64 title--white`}
				>
					{title}
				</h1>
				<Breadcrumbs />
			</div>
			<div className={styles['promo__bg']}>
				<img
					className={`${styles['promo__img']} ${styles['promo__img--light']} ibg`}
					src={imageBg}
					alt="background image"
					aria-hidden="true"
				/>
				<img
					className={`${styles['promo__img']} ${styles['promo__img--dark']} ibg`}
					src={imageBgDark}
					alt="background image"
					aria-hidden="true"
				/>
			</div>
		</div>
	)
}

export default PromoSection
