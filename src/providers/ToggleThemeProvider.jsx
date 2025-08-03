import { ToggleThemeContext } from '@/context/ToggleThemeContext/ToggleThemeContext'
import { TOGGLE_THEME_KEY_STORAGE } from '@/context/ToggleThemeContext/useToggleThemeContext'
import { useState } from 'react'

function ToggleThemeProvider({ children }) {
	const [isDark, setIsDark] = useState(() => {
		let currentTheme = localStorage.getItem(TOGGLE_THEME_KEY_STORAGE)
		if (!currentTheme) {
			currentTheme = window.matchMedia('(prefers-color-scheme:dark)').matches
				? 'dark'
				: 'light'
		}
		return currentTheme === 'dark'
	})
	return (
		<ToggleThemeContext value={[isDark, setIsDark]}>
			{children}
		</ToggleThemeContext>
	)
}

export default ToggleThemeProvider
