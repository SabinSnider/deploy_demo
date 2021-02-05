import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Badge
} from 'reactstrap';
import { IMAGE_BASE_URL } from '../config';

const GenreCard = ({moviey}) => {     

  return (

    <Card className="mt-2">
    <CardTitle tag="h5">{moviey.name}</CardTitle>
   
    </Card>

  );
}

  export default GenreCard;