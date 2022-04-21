export interface UnsplashImage {
  id: number
  url: string
  author: string
  description: string
}

export interface DefaultRootState {
  images: UnsplashImage[]
}
