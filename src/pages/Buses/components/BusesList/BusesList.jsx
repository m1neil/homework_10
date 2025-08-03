import CardService from '@/components/CardService/CardService'
import stylesCardServices from '@/components/CardService/CardService.module.scss'
import HeadBlockSection from '@/components/HeadBlockSection/HeadBlockSection'
import { BasesContext } from '@/context/BasesContext'
import { CART_KEYS } from '@/reducers/cartReducer'
import { transformDate } from '@/utiles/transformData'
import { useContext } from 'react'
import styles from './BusesList.module.scss'

function BusesList() {
	const bases = useContext(BasesContext)

	return (
		<section className={styles['buses-list']}>
			<div className="buses-list__container">
				<HeadBlockSection
					classSuffix={styles['buses-list__head-block']}
					title="Available buses"
					text={'orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna'.split(
						'\n'
					)}
				/>
				{bases.length > 0 ? (
					<div className={styles['buses-list__items']}>
						{bases.map(bus => {
							const { id, name, price, seats, wifi, departureTime } = bus
							return (
								<CardService
									key={id}
									keyCartService={CART_KEYS.BUSES}
									title={name}
									{...bus}
								>
									<div className={stylesCardServices['card__price']}>
										${price.toFixed(2)}
									</div>
									<div className={stylesCardServices['card__date']}>
										<time dateTime="2025-08-05T08:00">
											📅 {transformDate(departureTime)}
										</time>{' '}
									</div>
									<div className={stylesCardServices['card__info']}>
										<span>🧍 Places: {seats}</span>
										<span>📶 Wi-Fi: {wifi ? 'Yes' : 'No'}</span>
									</div>
								</CardService>
							)
						})}
					</div>
				) : (
					<div>There are no available bus flights!</div>
				)}
			</div>
		</section>
	)
}

export default BusesList
