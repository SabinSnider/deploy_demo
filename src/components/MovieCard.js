import React from 'react';
import {
  Card, CardImg,  CardBody,
  CardTitle, CardSubtitle,  Badge
} from 'reactstrap';
import { IMAGE_BASE_URL } from '../config';
import {Link} from 'react-router-dom';

const MovieCard = ({moviey}) => {     

  return (<div>
  <Link key={moviey.id} to={`/nowplaying/${moviey.id}`}>{moviey.title}
    <Card className="mt-2">
        <CardImg top width="100%" src={`${IMAGE_BASE_URL}${moviey.poster_path}`} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{moviey.title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
          <div>
            Vote Count : { moviey.vote_count}
            </div>
          <div>
            Popularity : { moviey.popularity}
            </div>
          </CardSubtitle>
      <div>
        {moviey.adult && <Badge color="info">Adult</Badge>}
      </div>
      </CardBody>
      </Card>
  </Link>
   
      </div>
  )
}

export default MovieCard;