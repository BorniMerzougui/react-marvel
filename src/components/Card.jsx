import React from 'react';
// import PropTypes from 'prop-types';
import { Card, Image } from 'semantic-ui-react';

const CardUser = (props) => {
  return (
    <Card>
      <Card.Content>
        <Image floated="right" size="medium" src={`${props.img}.${props.extension}`}/>
        <Card.Header>{props.name}</Card.Header>
      </Card.Content>
    </Card>
  );
};

export default CardUser;