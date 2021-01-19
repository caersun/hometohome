import React, {useState} from 'react';
import StripeCheckout from "react-stripe-checkout"
import { CardFooter, Button } from "reactstrap";


function StripePayment(props) {

    const completePayment = () => {
        alert("thanks for your payement");
    };

  const [product, setProduct] = useState({
    name: "Payment on Stripe",
    price: 0,
    productBy: "hometohome"
    })

const makePayment = token => {
  const body = {
    token, 
    product
  }
  const headers = {
    "Content-Type": "application/json"
  }
  return fetch(`http://localhost:8282/payment`, {
    method: "POST",
    headers,
    body: JSON.stringify(body)
  }).then(response => {
    console.log("RESPONSE", response)
    const {status} = response; 
    console.log("STATUS ", status)
  })
  .catch(error => console.log(error));
}


  return (
    <CardFooter>
        <StripeCheckout 
        stripeKey= "pk_test_51I08ayILHVKLC4m6Ci2lCVxPV3UjnWVnZFgknF50dTXqhgqCY93QSbMP4IqmORI6rAvHf2xDtp4ufBzeySIcEAcX00SWH63wkC" // {process.env.REACT_APP_KEY} 
        token= "makePayment" 
        name="Credit Card Information" 
        amount={props.totalPrice * 100}
        >
          <Button>Buy Now</Button> 
        </StripeCheckout>
    </CardFooter>
  );

}

export default StripePayment;
