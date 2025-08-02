import Header from '@/components/Header'
import BasesProvider from '@/providers/BasesProvider'
import { Outlet } from 'react-router'
function Layout() {
	return (
		<div className="wrapper">
			<Header />
			<main className="page">
				<BasesProvider>
					<Outlet />
				</BasesProvider>
			</main>
		</div>
	)
}

export default Layout
