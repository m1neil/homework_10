export const CART_ACTION_TYPES = {
	ADD: 'add_element',
	REMOVE: 'remove_element',
}

export const CART_KEYS = {
	BUSES: 'buses',
	HOTELS: 'hotels',
}

export const initStateReducer = {
	[CART_KEYS.BUSES]: [],
	[CART_KEYS.HOTELS]: [],
}

export const cartReducer = (currentState, action) => {
	let newState
	switch (action.type) {
		case CART_ACTION_TYPES.ADD:
			{
				const { idItem, key } = action.payload
				newState = {
					...currentState,
					[key]: [...currentState[key], idItem],
				}
			}
			break
		case CART_ACTION_TYPES.REMOVE:
			{
				const { idItem, key } = action.payload
				newState = {
					...currentState,
					[key]: currentState[key].filter(id => id !== idItem),
				}
			}
			break
		default:
			throw new Error(`Unknown action ${action.type}`)
	}
	return newState
}
