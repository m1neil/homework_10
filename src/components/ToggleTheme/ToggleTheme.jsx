import { useToggleThemeContext } from '@/context/ToggleThemeContext/useToggleThemeContext'
import darkBg from '@img/toggleTheme/background-dark.svg'
import lightBg from '@img/toggleTheme/background-light.svg'
import moon from '@img/toggleTheme/moon.svg'
import sun from '@img/toggleTheme/sun.svg'
import styles from './ToggleTheme.module.scss'

function ToggleTheme() {
	const { isDark, toggleTheme } = useToggleThemeContext()

	return (
		<button
			onClick={toggleTheme}
			type="button"
			className={`${styles['toggle-theme']} ${isDark ? styles['--dark'] : ''}`}
		>
			<span className={styles['toggle-theme__handler']}>
				<img src={sun} alt="icon sun" className={styles['toggle-theme__sun']} />
				<img
					src={moon}
					alt="icon moon"
					className={styles['toggle-theme__moon']}
				/>
			</span>
			<img
				className={`${styles['toggle-theme__bg']} ${styles['toggle-theme__bg--light']}`}
				src={lightBg}
				alt="background light"
			/>
			<img
				className={`${styles['toggle-theme__bg']} ${styles['toggle-theme__bg--dark']}`}
				src={darkBg}
				alt="background dark"
			/>
		</button>
	)
}

export default ToggleTheme
