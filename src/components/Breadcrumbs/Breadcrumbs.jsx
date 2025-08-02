import { Link, useMatches } from 'react-router'
import styles from './Breadcrumbs.module.scss'

function Breadcrumbs() {
	const crumbs = useMatches()
		.filter(match => match?.handle?.crumbLink)
		.map(({ handle: { title, crumbLink } }) => ({ title, crumbLink }))
	const lastIndex = crumbs.length - 1

	return (
		<ul className={styles['breadcrumbs']}>
			{crumbs.map((crumb, index) => (
				<li key={index} className={styles['breadcrumbs__item']}>
					{index < lastIndex ? (
						<Link className={styles['breadcrumbs__link']} to={crumb.crumbLink}>
							{crumb.title}
						</Link>
					) : (
						<div className={styles['breadcrumbs__link']}>{crumb.title}</div>
					)}
				</li>
			))}
		</ul>
	)
}

export default Breadcrumbs
