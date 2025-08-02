import HeadBlockSection from '@/components/HeadBlockSection/HeadBlockSection'
import { HotelsContext } from '@/context/HotelsContext'
import { useContext } from 'react'
import HotelCard from '../HotelCard/HotelCard'
import styles from './HotelsList.module.scss'

function HotelsList() {
	const hotels = useContext(HotelsContext)

	return (
		<section className={styles['hotel']}>
			<div className="hotel__container">
				<HeadBlockSection
					classSuffix={styles['hotel__head']}
					title="Available hotels"
					text={'orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna'.split(
						'\n'
					)}
				/>
				{hotels.length > 0 ? (
					<div className={styles['hotel__items']}>
						{hotels.map(hotel => (
							<HotelCard key={hotel.id} hotel={hotel} />
						))}
					</div>
				) : (
					<div>The list of free hotels is empty!</div>
				)}
			</div>
		</section>
	)
}

export default HotelsList
