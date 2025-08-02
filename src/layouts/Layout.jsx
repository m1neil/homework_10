import Header from '@/components/Header'
import BasesProvider from '@/providers/BasesProvider'
import HotelsProvider from '@/providers/HotelsProvider'
import { Outlet } from 'react-router'
function Layout() {
	return (
		<div className="wrapper">
			<Header />
			<main className="page">
				<HotelsProvider>
					<BasesProvider>
						<Outlet />
					</BasesProvider>
				</HotelsProvider>
			</main>
		</div>
	)
}

export default Layout
