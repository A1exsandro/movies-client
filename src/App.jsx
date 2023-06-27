import { useState, useEffect } from 'react'
import './App.css'
import api from './api/axiosConfig'
import Layout from './components/Layout'
import { Routes, Route } from 'react-router-dom'
import Home from './home/Home'
import Header from './components/header/Header'
import Trailer from './components/trailer/Trailer'
import Reviews from './components/reviews/Reviews'

const App = () => {
  const [movies, setMovies] = useState()
  const [movie, setMovie] = useState()
  const [reviews, setReviews] = useState([]) 
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getMovies()

    setTimeout(() => {
      setLoading(true)
    },4000)
  },[])

  const getMovies = async () => {
    try {
      const response = await api.get("/api/v1/movies") 
      setMovies(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const getMovieData = async (movieId) => {
    try {
      const response = await api.get(`/api/v1/movies/${movieId}`)
      const singleMovie = response.data 
      setMovie(singleMovie) 
      setReviews(singleMovie.reviewIds)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          {loading && <Route path='/' element={<Home movies={movies}/>} /> }
          <Route path="Trailer/:ytTrailerId" element={<Trailer />} />
          <Route 
            path='/Reviews/:movieId'
            element={
              <Reviews 
                getMovieData={getMovieData}
                movie={movie}
                reviews={reviews}
                setReviews={setReviews}
              />
            }
          />
        </Route> 
      </Routes>
    </div>
  )
}

export default App
