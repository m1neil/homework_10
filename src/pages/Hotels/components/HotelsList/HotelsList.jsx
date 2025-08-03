import CardService from '@/components/CardService/CardService'
import stylesCardService from '@/components/CardService/CardService.module.scss'
import HeadBlockSection from '@/components/HeadBlockSection/HeadBlockSection'
import { HotelsContext } from '@/context/HotelsContext'
import { CART_KEYS } from '@/reducers/cartReducer'
import { useContext } from 'react'
import styles from './HotelsList.module.scss'
import { CartContext } from '@/context/CartContext'

function HotelsList() {
	const { cartState } = useContext(CartContext)
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
						{hotels.map(hotel => {
							const { id, name, city, stars, pricePerNight } = hotel
							return (
								<CardService
									key={id}
									keyCartService={CART_KEYS.HOTELS}
									title={name}
									rating={stars}
									isOrdered={cartState[CART_KEYS.HOTELS].includes(id)}
									{...hotel}
								>
									<div
										className={`${stylesCardService['card__sub-head']} ${stylesCardService['sub-head']}`}
									>
										<div className={stylesCardService['sub-head__city']}>
											{city}
										</div>
										<div className={stylesCardService['sub-head__price']}>
											${pricePerNight.toFixed(2)}/1days
										</div>
									</div>
								</CardService>
							)
						})}
					</div>
				) : (
					<div>The list of free hotels is empty!</div>
				)}
			</div>
		</section>
	)
}

export default HotelsList
