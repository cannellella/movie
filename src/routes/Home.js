import React, { Component } from 'react'
import Movie from '../components/Movie'
import axios from 'axios'
import '../styles/Home.css'

export class Home extends Component {
  
  state = {
    isLoading: true,
    movies:[],
    
  }

  getMovies = async () =>{
    const {
      data:{
        data:{movies}
      }
  } = await axios.get('https://yts-proxy.now.sh/list_movies.json?genre=animation&sort_by=like_count')
    console.log('movies',movies)
    this.setState({isLoading:false,movies})//키 키값이름이 동일하면
} 

componentDidMount(){
  this.getMovies();
}

  render() {
    const {isLoading,movies} = this.state;

    return (
      <section className='container'>
      {isLoading ?
      <div className='loader'>
        <span className='loader_text'>'Loading...'</span>
      </div>

      :
      
      <div className='movies'>

        {movies.map(movie => (
          <Movie
          key ={movie.index}
          id ={movie.id}
          year = {movie.year}
          title = {movie.title}
          summary = {movie.summary}
          poster = {movie.medium_cover_image}
          genres = {movie.genres}/>
        ))}

      </div>
      }
    </section>
    )
  }
}

export default Home;