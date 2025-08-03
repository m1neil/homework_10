import PromoSection from '@/components/PromoSection/PromoSection'
import busesBg from '@img/buses-page-bg.webp'
import busesBgDark from '@img/buses-page-bg-dark.webp'
import BusesList from './components/BusesList/BusesList'
function Buses() {
	return (
		<>
			<PromoSection
				title="Travel Buses"
				imageBg={busesBg}
				imageBgDark={busesBgDark}
			/>
			<BusesList />
		</>
	)
}

export default Buses
