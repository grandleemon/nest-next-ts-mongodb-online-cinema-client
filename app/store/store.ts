import { configureStore } from '@reduxjs/toolkit'
import { reducers } from './rootReducer'
import { useDispatch } from 'react-redux'

export const store = configureStore({
	reducer: reducers,
	devTools: true,
})

export type AppDispatch = typeof store.dispatch
export type TypeRootState = ReturnType<typeof store.getState>
export const useAppDispatch: () => AppDispatch = useDispatch
