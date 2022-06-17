import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";

const CampsiteCard = ({ campsite }) => {
  const { id, image, name, home } = campsite;

  return (
    <Link to={`${id}`}>
      <Card>
        <CardImg width="100%" src={image} alt={home} />
        <CardImgOverlay>
          <CardTitle>{name}</CardTitle>
        </CardImgOverlay>
      </Card>
    </Link>
  );
};

export default CampsiteCard;
