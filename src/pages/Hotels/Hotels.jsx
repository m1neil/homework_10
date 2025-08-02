import PromoSection from '@/components/PromoSection/PromoSection'
import hotelsBg from '@img/hotels-page-bg.webp'
import HotelsList from './components/HotelsList/HotelsList'

function Hotels() {
	return (
		<>
			<PromoSection
				title="Travel Stories For Now and the Future"
				imageBg={hotelsBg}
			/>
			<HotelsList />
		</>
	)
}

export default Hotels
