import { useState, useEffect } from 'react'
import './App.css'
import api from './api/axiosConfig'
import Layout from './components/Layout'
import { Routes, Route } from 'react-router-dom'
import Home from './home/Home'

const App = () => {
  const [movies, setMovies] = useState()
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

  

  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Layout />}>
          {loading && <Route path='/' element={<Home movies={movies}/>} /> }
        </Route> 
      </Routes>
    </div>
  )
}

export default App
