import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

const CampsiteCard = ({ campsite }) => {
  const { image, name } = campsite;
  return (
    <Card>
      <CardImg width="100%" src={image} alt={home} />
      <CardImgOverlay>
        <CardTitle>{name}</CardTitle>
      </CardImgOverlay>
    </Card>
  );
};

export default CampsiteCard;
