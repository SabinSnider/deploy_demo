import React from 'react';
import {
  Card, 
  CardTitle, 
} from 'reactstrap';

const CompanyCard = ({moviey}) => {     

  return (

    <Card className="mt-2">
    <CardTitle tag="h5">{moviey.name}</CardTitle>
   
    </Card>

  );
}

  export default CompanyCard;