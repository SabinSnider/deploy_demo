import React from 'react'
import axios from 'axios'
import { BASE_URL, API_KEY } from '../../config';
import MovieCard from '../MovieCard';

const NowPlaying = () => {

    const [playingNow, setPlayingNow] = React.useState([]);

    React.useEffect(() => {
        getPlayingNowMovies();
    }, []);

    const getPlayingNowMovies = async () => {
        const res = await axios.get(`${BASE_URL}/movie/now_playing`, { params:{ api_key: API_KEY }});
        setPlayingNow(res.data.results.splice(0,6));
            //  console.log(res);
    
      }
      return (
        <div>
           
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

      </div>
      )
    }

    export default NowPlaying;