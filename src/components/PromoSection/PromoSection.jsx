import Breadcrumbs from '../Breadcrumbs/Breadcrumbs'
import styles from './PromoSection.module.scss'

function PromoSection({ title = 'Title', imageBg }) {
	return (
		<div className={styles['promo']}>
			<div className={styles['promo__container']}>
				<h1
					className={`${styles['promo__title']} title title--fz-64 title--white`}
				>
					{title}
				</h1>
				<Breadcrumbs />
			</div>
			<img
				className={`${styles['promo__bg']} ibg`}
				src={imageBg}
				alt="background image"
				aria-hidden="true"
			/>
		</div>
	)
}

export default PromoSection
