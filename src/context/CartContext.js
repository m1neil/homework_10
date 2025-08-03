import { initStateReducer } from '@/reducers/cartReducer'
import { createContext } from 'react'

export const CartContext = createContext(initStateReducer)
