import Layout from '@/layouts/Layout'
import Buses from '@/pages/Buses/Buses'
import Cart from '@/pages/Cart/Cart'
import Home from '@/pages/Home/Home'
import Hotels from '@/pages/Hotels/Hotels'
import { createBrowserRouter } from 'react-router'
import frontRoutes from './frontRoutes'

export const routes = [
	{
		element: <Layout />,
		path: frontRoutes.pages.home,
		handle: {
			title: 'Home',
			crumbLink: frontRoutes.navigate.home,
		},
		children: [
			{
				path: '',
				index: true,
				Component: Home,
				handle: {
					title: 'Home',
				},
			},
			{
				path: frontRoutes.pages.buses,
				Component: Buses,
				handle: {
					title: 'Buses',
					crumbLink: frontRoutes.navigate.buses,
				},
			},
			{
				path: frontRoutes.pages.hotels,
				Component: Hotels,
				handle: {
					title: 'Hotels',
					crumbLink: frontRoutes.navigate.hotels,
				},
			},
			{
				path: frontRoutes.pages.cart,
				Component: Cart,
				handle: {
					title: 'Cart',
					crumbLink: frontRoutes.navigate.cart,
				},
			},
		],
	},
]

const router = createBrowserRouter(routes)
export default router
