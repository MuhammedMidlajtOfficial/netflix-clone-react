import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../../axios'
import YouTube from 'react-youtube'
import {API_KEY, IMG_URL} from '../../Constants/constants'

function Rowpost(props) {
  const [post, setPost] = useState([])
  const [movieUrlId, setMovieUrlId] = useState()

  useEffect(()=>{
    axios.get(props.url).then(res=>{
      setPost(res.data.results)
    }).catch(err=>{
      console.log(err);
    })
  },[])

  const opts = {
    height: '390',
    width: '99%',
    playerVars: {
      autoplay: 1,
    },
  }

  const handleMovieClick = (id)=>{
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(res=>{
      console.log(res.data?.results[0]);
      if(res.data.results.length !== 0){
        setMovieUrlId(res.data?.results[0].key)
      }else{ console.log('Array empty');}
    })
  }

  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="posters">
        {post.map(obj=>{
          return(
            <img onClick={()=>{handleMovieClick(obj.id)}} className={props.isSmall ? 'small-poster' : 'poster'} key={obj.id} src={`${IMG_URL+ obj?.backdrop_path}`} alt="movie-img" />
            )
          })}
      </div>
      { movieUrlId && <YouTube videoId={movieUrlId} opts={opts}/>}
    </div>
  )
}

export default Rowpost
