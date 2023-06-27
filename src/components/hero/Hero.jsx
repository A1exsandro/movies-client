import React from 'react'
import './styles.css'
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'

const Hero = ({movies}) => {
 
  return (
    <div>
      <Carousel>
        {
          movies.map((movie, i) => {
            return (
              <Paper key={i}>
                <div className='movie-card-container'>
                  <div className='movie-card'>
                    <div className="movie-detail">
                      <div className="movvie-poster">
                        <img src={movie.poster} alt="" />
                      </div>
                      <div className="movie-title">
                        <h4>{movie.title}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </Paper>
            )
          })
        }
      </Carousel>
    </div>
  )
}

export default Hero