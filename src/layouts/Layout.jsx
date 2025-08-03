import Header from '@/components/Header'
import BasesProvider from '@/providers/BasesProvider'
import CartProvider from '@/providers/CartProvider'
import HotelsProvider from '@/providers/HotelsProvider'
import ToggleThemeProvider from '@/providers/ToggleThemeProvider'
import { Outlet } from 'react-router'
function Layout() {
	return (
		<div className="wrapper">
			<ToggleThemeProvider>
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
			</ToggleThemeProvider>
		</div>
	)
}

export default Layout
