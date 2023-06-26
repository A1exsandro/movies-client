import { useState, useEffect } from 'react'
import './App.css'
import api from './api/axiosConfig'
import Layout from './components/Layout'
import { Routes, Route } from 'react-router-dom'
import Home from './home/Home'

const App = () => {
  const [movies, setMovies] = useState()

  const getMovies = async () => {
    try {
      const response = await api.get("/api/v1/movies")
      setMovies(response.data)
      console.log(response.data)
      
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getMovies()
  },[])

  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> 
        </Route> 
      </Routes>
    </div>
  )
}

export default App
