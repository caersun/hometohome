import React, { useState } from "react";
import { Card, CardImg, CardBody, CardTitle, CardText, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from "reactstrap";
import API from "../../utils/API";

const CookListingCard = ({ listing }) => {
    const [imageModal, setImageModal] = useState(false);
    const imageToggle = () => setImageModal(!imageModal);
    const [updatedImageURL, setUpdatedImageURL] = useState("");
    const [updatedImageFile, setUpdatedImageFile] = useState();
    const [currListingImage, setCurrListingImage] = useState(listing.imgURL);

    const handleImageURL = () => {
        // TODO: Validate image URL 
        API.updateProfile(listing.id, { imgURL: updatedImageURL })
            .then(() => setCurrListingImage(updatedImageURL))
            .catch(err => console.log(err));
        setUpdatedImageURL("");
    };

    const handleImageFile = () => {
        const formData = new FormData();
        formData.append("file", updatedImageFile[0]);
        formData.append("upload_preset", "dalcz0np");
        API.uploadImage(formData)
            .then(res => {
                API.updateListing(listing.id, { imgURL: res.data.secure_url })
                .then(() => setCurrListingImage(res.data.secure_url))
                .catch(err => console.log(err));
        }).catch(err => console.log(err));
        setUpdatedImageFile();
    };

    const handleImageUpdate = () => {
        if (updatedImageURL) {
            console.log("updatedImageURL", updatedImageURL);
            handleImageURL();
        } else if (updatedImageFile) {
            console.log("updatedImageFile object", updatedImageFile);
            handleImageFile();
        };
        imageToggle();
    };

    return (
        <div>
            <Card>
                <CardImg top width="100%" src={currListingImage} alt={listing.food} />
                <Button onClick={imageToggle}>Edit Listing Image</Button>
                <CardBody>
                    <CardTitle tag="h5">
                        <span className="float-left">{listing.food}</span>
                        <span className="float-right">${listing.price}</span>
                    </CardTitle>
                    <br />
                    <CardText>{listing.description}</CardText>
                    {/* <Button>Edit</Button> */}
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
        </div>
    );
};

export default CookListingCard;