import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from "reactstrap";

const ListingCard = props => {
    return (
        <Card>
            <CardImg top width="100%" src={props.listingImage} alt={props.listingTitle} />
            <CardBody>
                <CardTitle tag="h5">{props.listingTitle}</CardTitle>
                <div>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">{props.shortDescription}</CardSubtitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted float-end">{props.price}</CardSubtitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted float-end">{props.cook}</CardSubtitle>
                </div>
            </CardBody>
        </Card>
    )
};

export default ListingCard;