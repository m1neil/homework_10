import HeadBlockSection from '@/components/HeadBlockSection/HeadBlockSection'

function HotelsList() {
	return (
		<section className="hotel">
			<div className="hotel__container">
				<HeadBlockSection classSuffix={'hotel__head'} />
				<div className="hotel__items"></div>
			</div>
		</section>
	)
}

export default HotelsList
