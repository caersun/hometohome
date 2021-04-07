import { Col, Row, Card, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../../utils/Redux/Shopping/shopping-actions";

const ProductCard = ({ productData }) => {
    const dispatch = useDispatch();

   return (
    
        <Card>
            <Row>
                <Col xs={{ size: 3, order: 1 }}>
                    <img 
                        src={productData.imgURL} 
                        alt={productData.food} 
                        style={{ 
                            maxWidth: `64px`, 
                            maxHeight: `64px`,
                            borderRadius: `50%`
                        }}
                    />
                </Col>
                <Col xs={{ size: 6, order: 2 }}>
                    <CardTitle tag="h5">{productData.food}</CardTitle>
                    <CardSubtitle tag="h6">{productData.description}</CardSubtitle>
                    <CardText className="mb-2 text-muted float-end">${productData.price}</CardText>
                </Col>
                <Col xs={{ size: 3, order: 3 }}>
                    <Button onClick={() => dispatch(addToCart(productData.id))}>Add to Cart</Button>
                </Col>
            </Row>
            {/* <CardImg top width="100%" src={productData.imgURL} alt={productData.food} />
            <CardBody className="text-center">
                <CardTitle tag="h5" >{productData.food}</CardTitle>
                <div>
                    <CardSubtitle tag="h6" className="mb-2 text-muted float-end">${productData.price}</CardSubtitle>
                </div>
                <CardText>{productData.description}</CardText>
                <Button onClick={() => dispatch(addToCart(productData.id))}>Add to Cart</Button>
            </CardBody> */}
        </Card>
    )
};
export default ProductCard;