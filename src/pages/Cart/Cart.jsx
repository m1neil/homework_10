import PromoSection from '@/components/PromoSection/PromoSection'
import cartBgDark from '@img/cart-page-bg-dark.webp'
import cartBg from '@img/cart-page-bg.webp'
import CartList from './components/CartList/CartList'

function Cart() {
	return (
		<>
			<PromoSection
				title="User cart"
				imageBg={cartBg}
				imageBgDark={cartBgDark}
			/>
			<CartList />
		</>
	)
}

export default Cart
