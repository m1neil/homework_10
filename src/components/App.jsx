import router from '@/routes/router'
import { RouterProvider } from 'react-router'
import ScrollToTop from './ScrollToTop'

function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	)
}

export default App
