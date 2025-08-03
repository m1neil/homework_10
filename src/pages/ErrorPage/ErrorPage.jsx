import frontRoutes from '@/routes/frontRoutes'
import { Link } from 'react-router'
import styles from './ErrorPage.module.scss'

function ErrorPage() {
	return (
		<section className={styles['error-page']}>
			<div className={styles['error-page__container']}>
				<h1 className={`${styles['error-page__title']} title title--fz-64`}>
					What went wrong :/
				</h1>
				<Link to={frontRoutes.navigate.home} className="button">
					<span>Home page</span>
				</Link>
			</div>
		</section>
	)
}

export default ErrorPage
