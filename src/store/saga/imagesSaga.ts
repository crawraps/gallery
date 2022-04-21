import { debugMode } from '../../index'
import { UnsplashImage } from '../../types'
import { FETCH_IMAGES } from './../imagesReducer'
import { call, put, takeEvery } from 'redux-saga/effects'
import { setImages } from '../imagesReducer'

const fetchImages = async () =>
  fetch('https://api.unsplash.com/photos/random/?count=24&client_id=it8n1VGS6H8gj-O49QZ437AeL1TE-vdqkAT2_57KYQI')

function* fetchImagesWorker(): Generator<any, any, any> {
  const localStorageData = localStorage.getItem('images')

  if (localStorageData && debugMode) {
    // Get images from local storage if provided
    yield put(setImages(JSON.parse(localStorageData)))
  } else {
    const data = yield call(fetchImages)
    if (data.ok) {
      // Put images to storage if no errors
      const json = yield call(() => new Promise(res => res(data.json())))
      const formattedJson = json.map(
        (img: any, index: number) =>
          ({
            id: index,
            url: img.urls.regular as string,
            author: img.user.name as string,
            description: img.description as string,
          } as UnsplashImage)
      )
      localStorage.setItem('images', JSON.stringify(formattedJson))
      yield put(setImages(formattedJson))
    } else {
      console.error(`An error oqqured while fetching data. Status: ${data.statusText}`)
    }
  }
}

export function* imagesWatcher() {
  yield takeEvery(FETCH_IMAGES, fetchImagesWorker)
}
