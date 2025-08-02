import { BasesContext } from '@/context/BasesContext'
import { BUSES } from '@/data'
import { useState } from 'react'

function BasesProvider({ children }) {
	const [bases, setBases] = useState([])

	useState(() => {
		setBases(BUSES)
	}, [])

	return <BasesContext value={bases}>{children}</BasesContext>
}

export default BasesProvider
