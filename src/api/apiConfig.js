const apiConfig = {
  baseUrl: 'https://api.themoviedb.org/3/',
  apiKey: '2b41c6a84cb7a2ba0c09c7e7852708a7',
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;