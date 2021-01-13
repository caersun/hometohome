import Component from "react";
import { Card, CardImg, CardBody, CardTitle, CardText, Button } from "reactstrap";

class Order extends Component {
    render() {
        return <Card>
            <CardBody><CardTitle>A proteced route</CardTitle></CardBody>
            {/* <CardImg top width="100%" src={this.props.img} alt={this.props.title}></CardImg>
            <CardBody>
                <CardTitle tag="h5">{this.props.title}</CardTitle>
                <CardText>{this.props.description}</CardText>
                <Button>Add to Order</Button>
            </CardBody> */}
        </Card>
    }
};

export default Order;