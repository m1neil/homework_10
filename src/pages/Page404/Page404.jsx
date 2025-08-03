import frontRoutes from '@/routes/frontRoutes'
import { Link } from 'react-router'
import styles from './Page404.module.scss'

function Page404() {
	return (
		<section className={styles['page404']}>
			<div className={styles['page404__container']}>
				<h1 className={`${styles['page404__title']} title title--big`}>
					Page 404
				</h1>
				<Link to={frontRoutes.navigate.home} className="button">
					<span>Home page</span>
				</Link>
			</div>
		</section>
	)
}

export default Page404
