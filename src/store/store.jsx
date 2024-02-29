import { configureStore } from '@reduxjs/toolkit'
import weatherReducer from '../reducer/weatherSlice'
import newsReducer from '../reducer/newsSlice'
import currentNewsReducer from '../reducer/currentNewsSlice'

export const store = configureStore({
    reducer: {
        weather: weatherReducer,
        news: newsReducer,
        currentNews: currentNewsReducer,
    },
})