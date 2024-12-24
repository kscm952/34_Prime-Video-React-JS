// Write your code here
import MoviesSlider from '../MoviesSlider'

import './index.css'

const actionMovie = 'ACTION'
const comedyMovie = 'COMEDY'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionMoviesList = moviesList.filter(
    movie => movie.categoryId === actionMovie,
  )

  const comedyMoviesList = moviesList.filter(
    movie => movie.categoryId === comedyMovie,
  )

  return (
    <div className="app-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-video-img"
      />
      <div className="movies-container">
        <h1 className="heading">Action Movies</h1>
        <MoviesSlider movieDetails={actionMoviesList} />
        <h1 className="heading">Comedy Movies</h1>
        <MoviesSlider movieDetails={comedyMoviesList} />
      </div>
    </div>
  )
}

export default PrimeVideo
