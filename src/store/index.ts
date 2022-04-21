import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import imagesReducer from './imagesReducer'
import { imagesWatcher } from './saga/imagesSaga'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: imagesReducer,
  middleware: [sagaMiddleware],
})

sagaMiddleware.run(imagesWatcher)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
