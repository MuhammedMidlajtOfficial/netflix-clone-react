import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import {API_KEY, IMG_URL} from '../../Constants/constants'

function Banner() {
  const [movie, setMovie] = useState()
  let randomNumber = Math.round(Math.random() * 19)
  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then(res=>{
      setMovie(res.data.results[randomNumber])
    })
  },[])

  return (
    <div style={{backgroundImage: `url(${movie ? IMG_URL+movie?.backdrop_path : ""})` }}
      className='banner'>
      <div className="content">
        <h1 className="title">{movie?.title || movie?.original_name}</h1>
        <div className="banner_btns">
          <div className="btn">Play</div>
          <div className="btn">My list</div>
        </div>
        <h1 className="discription">{movie?.overview}</h1>
      </div>
      <div className="fade-bottom"></div>
    </div>
  )
}

export default Banner
