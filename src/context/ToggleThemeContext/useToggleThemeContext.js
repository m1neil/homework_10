import { useContext, useEffect } from 'react'
import { ToggleThemeContext } from './ToggleThemeContext'

export const TOGGLE_THEME_KEY_STORAGE = 'theme'

export const useToggleThemeContext = () => {
	const [isDark, setIsDark] = useContext(ToggleThemeContext)

	const toggleTheme = () => {
		setIsDark(prevIsDark => !prevIsDark)
	}

	useEffect(() => {
		localStorage.setItem(TOGGLE_THEME_KEY_STORAGE, isDark ? 'dark' : 'light')
		document.documentElement.classList.toggle('--dark', isDark)
	}, [isDark])

	return { isDark, toggleTheme }
}
