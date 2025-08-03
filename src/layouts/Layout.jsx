import Header from '@/components/Header'
import BasesProvider from '@/providers/BasesProvider'
import CartProvider from '@/providers/CartProvider'
import HotelsProvider from '@/providers/HotelsProvider'
import { Outlet } from 'react-router'
function Layout() {
	return (
		<div className="wrapper">
			<CartProvider>
				<Header />
				<main className="page">
					<HotelsProvider>
						<BasesProvider>
							<Outlet />
						</BasesProvider>
					</HotelsProvider>
				</main>
			</CartProvider>
		</div>
	)
}

export default Layout
