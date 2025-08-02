import HeadBlockSection from '@/components/HeadBlockSection/HeadBlockSection'
import { BasesContext } from '@/context/BasesContext'
import { useContext } from 'react'
import BusCard from '../BusCard/BusCard'
import styles from './BusesList.module.scss'

function BusesList() {
	const bases = useContext(BasesContext)

	return (
		<section className={styles['buses-list']}>
			<div className="buses-list__container">
				<HeadBlockSection
					classSuffix={styles['buses-list__head-block']}
					title={'Popular Destination'}
					text={'orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna'.split(
						'\n'
					)}
				/>
				{bases.length > 0 ? (
					<div className={styles['buses-list__items']}>
						{bases.map(bus => (
							<BusCard key={bus.id} bus={bus} />
						))}
					</div>
				) : (
					<div>There are no available bus flights!</div>
				)}
			</div>
		</section>
	)
}

export default BusesList
