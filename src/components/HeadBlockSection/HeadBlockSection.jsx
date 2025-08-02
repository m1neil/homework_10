import styles from './HeadBlockSection.module.scss'

function HeadBlockSection({ classSuffix, title, text }) {
	return (
		<div className={`${classSuffix} ${styles['head-block']}`}>
			<div className={styles['head-block__content']}>
				<h2 className={`${styles['head-block__title']} title`}>{title}</h2>
				<div className={`${styles['head-block__text']} text`}>
					{text ? text.map((paragraph, i) => <p key={i}>{paragraph}</p>) : null}
				</div>
			</div>
		</div>
	)
}

export default HeadBlockSection
