import starActive from '@img/icons/star-active.svg'
import star from '@img/icons/star.svg'
import styles from './Rating.module.scss'

function Rating({ classSuffix, curRating = 0, maximumStars = 5 }) {
	const createStars = () => {
		const stars = []
		for (let indexStar = 0; indexStar < maximumStars; indexStar++) {
			stars.push(
				<div key={indexStar} className={styles['rating__star']}>
					<img src={star} alt="icon star" className={styles['rating__icon']} />
					{indexStar < curRating ? (
						<img
							src={starActive}
							alt="icon active star"
							className={`${styles['rating__icon']} ${styles['rating__icon--active']}`}
						/>
					) : null}
				</div>
			)
		}
		return stars
	}

	return (
		<div className={`${classSuffix} ${styles['rating']}`}>
			<div className={styles['rating__row']}>{createStars()}</div>
		</div>
	)
}

export default Rating
