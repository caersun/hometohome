import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from "reactstrap";
import API from "../../utils/API";

const CookListingCard = ({ listing }) => {
    const history = useHistory();
    // const [listingInfo, setListingInfo] = useState({});
    const [editModal, setEditModal] = useState(false);
    const editToggle = () => setEditModal(!editModal);
    const [listingEdits, setListingEdits] = useState({});
    const [imageModal, setImageModal] = useState(false);
    const imageToggle = () => setImageModal(!imageModal);
    const [updatedImageURL, setUpdatedImageURL] = useState("");
    const [updatedImageFile, setUpdatedImageFile] = useState();
    // const [currListingImage, setCurrListingImage] = useState(listing.imgURL);

    const handleImageURL = () => {
        // TODO: Validate image URL 
        // console.log("handleImageURL ~ updatedImageURL", updatedImageURL);
        API.updateListing(listing.id, { imgURL: updatedImageURL })
            .then(res => console.log("updating listing.imgURL with direct URL", res))
            // .then(() => setCurrListingImage(updatedImageURL))
            .catch(err => console.log(err));
        
    };

    const handleImageFile = (formData) => {
        API.uploadImage(formData)
            .then(res => {
                console.log("handleImageFile ~ cloudinary URL", res.data.secure_url);
                API.updateListing(listing.id, { imgURL: res.data.secure_url })
                    .then(res => console.log("updating listing.imgURL with cloudinary link", res))
                    // .then(() => setCurrListingImage(res.data.secure_url))
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    };

    const handleImageUpdate = async event => {
        event.preventDefault();

        if (updatedImageURL) {
            console.log("updatedImageURL", updatedImageURL);
            await handleImageURL();
        } else if (updatedImageFile) {
            console.log("updatedImageFile object", updatedImageFile);
            const formData = new FormData();

            formData.append("file", updatedImageFile[0]);
            formData.append("upload_preset", "dalcz0np");

            await handleImageFile(formData);
        } else {
            return;
        };

        setUpdatedImageURL("");
        setUpdatedImageFile();

        imageToggle();

        history.replace("/");
        history.replace("/dash");
    };

    const handleInputChange = event => {
        const { name, value } = event.target;
        setListingEdits({ ...listingEdits, [name]: value });
    };

    const updateListing = () => {
        if (listingEdits.food) {
            API.updateListing(listing.id, { food: listingEdits.food })
                .then(res => console.log("API.updateListing food res", res))
                .catch(err => console.log(err));
        };

        if (listingEdits.price) {
            API.updateListing(listing.id, { price: +listingEdits.price })
                .then(res => console.log("API.updateListing price ~ res", res))
                .catch(err => console.log(err));
        };

        if (listingEdits.description) {
            API.updateListing(listing.id, { description: listingEdits.description })
                .then(res => console.log("API.updateListing description ~ res", res))
                .catch(err => console.log(err));
        };
    };

    const handleListingUpdate = async event => {
        event.preventDefault();

        await updateListing();

        editToggle();
        history.replace("/");
        history.replace("/dash");
    };

    return (
        <div>
            <Card>
                <CardImg top width="100%" src={listing.imgURL} alt={listing.food} />
                <Button onClick={imageToggle}>Edit Listing Image</Button>
                <CardBody>
                    <CardTitle tag="h5">
                        <span className="float-left">{listing.food}</span>
                        <span className="float-right">${listing.price}</span>
                    </CardTitle>
                    <br />
                    <CardText>{listing.description}</CardText>
                    <Button onClick={editToggle}>Edit</Button>
                </CardBody>
            </Card>
            <Modal isOpen={imageModal} toggle={imageToggle}>
                <ModalHeader toggle={imageToggle}>Update Listing Image</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="listingImageURL">Image URL</Label>
                            <Input 
                                type="url"
                                name="listingImageURL"
                                id="listingImageURL"
                                onChange={(e => setUpdatedImageURL(e.target.value))}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="listingImg">Or Upload Image (.jpg, .jpeg)</Label>
                            <input 
                                className="form-control text-center"
                                type="file"
                                name="listingImg"
                                id="listingImg"
                                onChange={(e => setUpdatedImageFile(e.target.files))}
                            />
                        </FormGroup>
                        <Button className="btn btn-primary btn-block mt-5"
                            // type="submit"
                            onClick={handleImageUpdate}>
                                Update Listing Image
                        </Button>
                    </Form>
                </ModalBody>
            </Modal>
            <Modal isOpen={editModal} toggle={editToggle}>
                <ModalHeader toggle={editToggle}>Update Listing Description</ModalHeader>
                <ModalBody>
                    <Form>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label for="food">Food</Label>
                                    <Input 
                                        className="form-control text-center"
                                        type="text"
                                        name="food"
                                        id="food"
                                        placeholder={listing.food}
                                        onChange={handleInputChange}
                                    />
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label for="price">Price</Label>
                                    <Input 
                                        className="form-control text-center"
                                        type="number"
                                        name="price"
                                        id="price"
                                        placeholder={listing.price}
                                        onChange={handleInputChange}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup>
                            <Label for="description">Description</Label>
                            <Input 
                                className="form-control text-center"
                                type="text"
                                name="description"
                                id="description"
                                placeholder={listing.description}
                                onChange={handleInputChange}
                            />
                        </FormGroup>
                        <Button
                            className="btn btn-primary btn-block mt-5"
                            type="submit"
                            onClick={handleListingUpdate}
                        >Save</Button>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    );
};

export default CookListingCard;