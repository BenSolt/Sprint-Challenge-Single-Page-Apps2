import React from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

export default function CharacterCard(props) {
  return (
    <div>
    <Card>
      <CardImg src={props.char.image} alt="Card image cap" />
      <CardBody>
        <CardTitle>{props.char.name}</CardTitle>
        <CardSubtitle>{props.char.gender}</CardSubtitle>
        <CardSubtitle>{props.char.species}</CardSubtitle>
        <CardSubtitle>{props.char.status}</CardSubtitle>
      
      </CardBody>
    </Card>
  </div>


  )
}
