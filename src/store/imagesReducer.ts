import { DefaultRootState, UnsplashImage } from '../types'

const defaultState: DefaultRootState = {
  images: [],
}

export const SET_IMAGES = 'SET_IMAGES'
export const FETCH_IMAGES = 'FETCH_IMAGES'

export default function imagesReducer(state = defaultState, action: { type: string; value: UnsplashImage[] }) {
  switch (action.type) {
    case SET_IMAGES:
      return { ...state, images: action.value }
  }
  return state
}

export function setImages(value: UnsplashImage[]) {
  return {
    type: SET_IMAGES,
    value,
  }
}
export function fetchImages() {
  return {
    type: FETCH_IMAGES,
  }
}
