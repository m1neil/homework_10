import PromoSection from '@/components/PromoSection/PromoSection'
import cartBg from '@img/cart-page-bg.webp'
import CartList from './components/CartList/CartList'

function Cart() {
	return (
		<>
			<PromoSection title="User cart" imageBg={cartBg} />
			<CartList />
		</>
	)
}

export default Cart
