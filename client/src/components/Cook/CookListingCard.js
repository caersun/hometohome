import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";

const CookListingCard = ({ listing }) => {
    return (
        <Card>
            <CardImg top width="100%" src={listing.img} alt={listing.food} />
            <CardBody>
                <CardTitle tag="h5">
                    <span className="float-left">{listing.food}</span>
                    <span className="float-right">{listing.price}</span>
                </CardTitle>
                <br />
                <CardText>{listing.description}</CardText>
                {/* <Button>Edit</Button> */}
            </CardBody>
        </Card>
    );
};

export default CookListingCard;