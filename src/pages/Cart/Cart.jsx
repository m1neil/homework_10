import PromoSection from '@/components/PromoSection/PromoSection'
import cartBg from '@img/cart-page-bg.webp'

function Cart() {
	return (
		<>
			<PromoSection title="User cart" imageBg={cartBg} />
		</>
	)
}

export default Cart
