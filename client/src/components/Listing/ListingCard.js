import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";

const ListingCard = props => {
    return (
        <Card>
            <CardImg top width="100%" src={props.previewImage} alt={props.food} />
            <CardBody className="text-center">
                <CardTitle tag="h5" >{props.food}</CardTitle>
                <div>
                    {/* <CardSubtitle tag="h6">Made with love by Cook</CardSubtitle> */}
                    <CardSubtitle tag="h6" className="mb-2 text-muted float-end">${props.price}</CardSubtitle>
                </div>
                <CardText>{props.description}</CardText>
                <Button>Add to Cart</Button>
            </CardBody>
        </Card>
    )
};

export default ListingCard;