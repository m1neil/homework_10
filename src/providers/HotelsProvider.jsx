import { HotelsContext } from '@/context/HotelsContext'
import { HOTELS } from '@/data'
import { useState } from 'react'

function HotelsProvider({ children }) {
	const [hotels, setHotels] = useState([])

	useState(() => {
		setHotels(HOTELS)
	}, [])

	return <HotelsContext value={hotels}>{children}</HotelsContext>
}

export default HotelsProvider
