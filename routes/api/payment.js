const cors = require("cors");
const express = require("express");
const stripe = require("stripe")("sk_test_51I08ayILHVKLC4m6rnChTgdSb6zUw93PBRlMmezKbHoXbusoxyGV7gKAY1xOxmwVNoeEjt724tkf9CDQ5oMUkC8l00OO4NPr8y") // secret stripe key
const uuid = require("uuid");

const app = express();

//middleware

app.use(express.json());
app.use(cors());


//routes
app.get("/", (req, res) => {
    res.send("it works!!!");
});


app.post("/payment", (req, res) => {

    const {product, token} = req.body; //coming in json format
    console.log("product ", product);
    console.log("price", product.price);
    const idempontencykey = uuid() // making sure customer isn't charged twice

    return stripe.customers.create({
        email: token.email,
        source: token.id

    }).then(customer => { // if success we get a customer and we create a charge
        stripe.charges.create({ // what I pass on
        amount: product.price * 100, // stripe prices comes in cents
        currency: "usd",
        customer: customer.id,
        receipt_email: token.email,
        description: `purchase of product.name`,
        // shipping: {
        //     name: token.card.name,
        //     address: {
        //         country: token.card.address_country
        //     }
        // }
    }, {idempontencykey})
    })
    .then(result => res.status(200).json(result))
    
    .catch(err=> console.log(err))
})


//listen

app.listen(8282, () => console.log("listening at port 8282"))
