import { HotelsContext } from '@/context/HotelsContext'
import { HOTELS } from '@/data'
import { useState } from 'react'

function HotelsProvider() {
	const [hotels, setHotels] = useState([])

	useState(() => {
		setHotels(HOTELS)
	}, [])

	return <HotelsContext value={hotels}></HotelsContext>
}

export default HotelsProvider
