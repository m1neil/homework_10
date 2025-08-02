import PromoSection from '@/components/PromoSection/PromoSection'
import busesBg from '@img/buses-bg.webp'
import BusesList from './components/BusesList/BusesList'
function Buses() {
	return (
		<>
			<PromoSection title="Travel Buses" imageBg={busesBg} />
			<BusesList />
		</>
	)
}

export default Buses
