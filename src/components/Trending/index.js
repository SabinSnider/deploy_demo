import React from 'react'
import axios from 'axios'
import { BASE_URL, API_KEY } from '../../config';
import MovieCard from '../MovieCard';

const Trending = () => {

    const [trendings, setTrendings] = React.useState([]);

    React.useEffect(() => {
        getTrendingMovies();
    }, []);

    const getTrendingMovies = async () => {
        const res = await axios.get(`${BASE_URL}/trending/tv/day`, { params:{ api_key: API_KEY }});
        setTrendings(res.data.results);
    
      }

      return (
        <div>
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
      </div>
      )
    }

    export default Trending;