import frontRoutes from '@/routes/frontRoutes'
import { routes } from '@/routes/router'
import logoSite from '@img/logo.png'
import { Link, NavLink } from 'react-router'
import ToggleTheme from './ToggleTheme/ToggleTheme'

function Header() {
	const links = routes[0].children
		.filter(route => route?.handle?.title)
		.map(route => ({ title: route.handle.title, path: route.path }))

	const getNavLinkClass = ({ isActive }) => {
		let className = 'menu__link'
		if (isActive) className += ' menu__link--active'
		return className
	}

	return (
		<div className="header">
			<div className="header__container">
				<Link
					className="header__logo"
					to={frontRoutes.navigate.home}
					aria-label="go to home page"
				>
					<img src={logoSite} alt="site rebel rover" />
				</Link>
				<nav className="header__menu menu">
					<ul className="menu__list">
						{links.map(({ title, path }, i) => (
							<li key={i} className="menu__item">
								<NavLink to={path} className={getNavLinkClass}>
									{title}
								</NavLink>
							</li>
						))}
					</ul>
				</nav>
				<ToggleTheme />
			</div>
		</div>
	)
}

export default Header
