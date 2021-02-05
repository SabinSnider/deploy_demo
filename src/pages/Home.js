import React from 'react'
import axios from 'axios'
import { BASE_URL, API_KEY } from '../config'
import MovieCard from '../components/MovieCard';
import GenreCard from '../components/GenreCard';
import CompanyCard from '../components/CompanyCard';
import CarouselSlider from '../components/CarouselSlider';
const Home = () => {

  const [trendings, setTrendings] = React.useState([]);
  const [playingNow, setPlayingNow] = React.useState([]);
  const [genres, setGenres] = React.useState([]);
   //console.log(playingNow);


  React.useEffect(() => {
    getTrendingMovies();
    getPlayingNowMovies();
    getGenres();
  }, []);

  const getTrendingMovies = async () => {
    const res = await axios.get(`${BASE_URL}/trending/tv/day`, { params:{ api_key: API_KEY }});
    setTrendings(res.data.results);

  }

  const getPlayingNowMovies = async () => {
    const res = await axios.get(`${BASE_URL}/movie/now_playing`, { params:{ api_key: API_KEY }});
    setPlayingNow(res.data.results.splice(0,6));
        //  console.log(res);

  }

  const getGenres = async () => {
    const res = await axios.get(`${BASE_URL}/genre/tv/list`, { params:{ api_key: API_KEY }});
    setGenres(res.data.genres);
    // console.log(res);

  }




  return (
    <div>
        {/* Slider */}
      <div className="movie_carousel">
        <CarouselSlider movies={playingNow}/>
      </div>


        {/* Now Playing */}
      <div className="mt-2 text-light card bg-info p-2">
        <h3>Now Playing</h3>
      </div>
      <div className="row">
        {
          playingNow.map(movie => {
            return <div className="col-md-2"><MovieCard moviey={movie} /></div>
          })
        }
      </div>

          {/* Trending */}
      <div className="mt-4 text-light card bg-info p-2">
        <h3>Trending Now</h3>
      </div>
      <div className="row">
        {
          trendings.map(movie => {
            return <div className="col-md-2"><MovieCard moviey={movie} /></div>
          })
        }
      </div>
          {/* Genres */}
      <div className="mt-2 text-light card bg-info p-2">
        <h3>Showing Genres </h3>
      </div>
      <div className="row">
        {
          genres.map(name => {
            return <div className="col-md-2"><GenreCard moviey={name} /></div>
          })
        }
      </div>


    </div>
  )
}

export default Home;