import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button, Modal, ModalHeader, ModalBody, Form, Row, Col, FormGroup, Label, Input, FormText } from "reactstrap";
import { useAuthState } from "../../utils/AuthContext";
import API from "../../utils/API";
// import defaultUserImage from "../../assets/default-user.jpg";

const CookInfo = () => {
    const [cookInfo, setCookInfo] = useState({});
    const [updateInfo, setUpdateInfo] = useState({});
    // const [uploadImage, setUploadImage] = useState("../../assets/default-user.jpg");
    // const [multerImage, setMulterImage] = useState({});
    const [modal, setModal] = useState(false);
    const history = useHistory();
    const userDetails = useAuthState();
    const toggle = () => setModal(!modal);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setUpdateInfo({ ...updateInfo, [name]: value });
    };

    // const handleUploadImage = event => {
    //     // let imageObj = {};
    //     let imageFormObj = new FormData();

    //     imageFormObj.append("name", "TRYINGPLS");
    //     imageFormObj.append("img", event.target.files[0]);
    //     setMulterImage(URL.createObjectURL(event.target.files[0]));
    //     API.createCookImage(imageFormObj).then((data) => {
    //         if (data.data.success) {
    //             alert("Image has been successfully uploaded!");
    //             console.log("this says we did it!", data);
    //         }
    //     }).catch(err => console.log(err));
        // console.log("cookInfo ~ handleUploadImage ~ imageFormObj:", imageFormObj);
        // console.log("cookInfo ~ handleUploadImage ~ multerImage:", multerImage);
    // };

    const handleCookUpdate = event => {
        event.preventDefault();

        // TODO: How to get all these to resolve before we can get to getCookInfo()?

        if (updateInfo.firstName) {
            API.updateCook(userDetails.user.id, { firstName: updateInfo.firstName }).catch(err => console.log(err));
        };

        if (updateInfo.lastName) {
            API.updateCook(userDetails.user.id, { lastName: updateInfo.lastName }).catch(err => console.log(err));
        };

        if (updateInfo.email) {
            API.updateCook(userDetails.user.id, { email: updateInfo.email }).catch(err => console.log(err));
        };

        if (updateInfo.bio) {
            API.updateProfile(userDetails.user.id, { bio: updateInfo.bio }).catch(err => console.log(err));
        };

        if (updateInfo.specialties) {
            API.updateProfile(userDetails.user.id, { specialties: updateInfo.specialties }).catch(err => console.log(err));
        };

        if (updateInfo.location) {
            API.updateProfile(userDetails.user.id, { location: updateInfo.location }).catch(err => console.log(err));
        };

        toggle();
        history.replace("/");
        history.replace("/dash");        
    };

    useEffect(() => {
        API.getCook(userDetails.user.id)
            .then(res => setCookInfo(res.data))
            .catch(err => console.log(err));
    }, [userDetails.user, updateInfo]);

    return (
        <div>
            <Card>
                {/* <CardImg top width="100%" src={cookInfo.Profile.img} alt={cookInfo.firstName} /> */}
                <CardBody>
                    <CardTitle tag="h5">{cookInfo.firstName} {cookInfo.lastName}</CardTitle>
                    {/* <CardSubtitle tag="h6" className="mb-2 text-muted">{cookInfo.Profile.specialties}</CardSubtitle>
                    <CardText>{cookInfo.Profile.bio}</CardText> */}
                    <Button onClick={toggle}>Edit</Button>
                </CardBody>
            </Card>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Edit Cook Profile</ModalHeader>
                <ModalBody>
                    <Form>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label for="firstName">First Name</Label>
                                    <Input 
                                        className="form-control text-center"
                                        type="text"
                                        name="firstName"
                                        id="firstName"
                                        placeholder={cookInfo.firstName}
                                        onChange={handleInputChange}
                                    />
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label for="lastName">Last Name</Label>
                                    <Input 
                                        className="form-control text-center"
                                        type="text"
                                        name="lastName"
                                        id="lastName"
                                        placeholder={cookInfo.lastName}
                                        onChange={handleInputChange}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input 
                                className="form-control text-center"
                                type="email"
                                name="email"
                                id="email"
                                placeholder={cookInfo.email}
                                onChange={handleInputChange}
                            />
                        </FormGroup>
                        {/* specialties, bio, location, cookImg */}
                        {/* <FormGroup>
                            <Label for="specialties">Specialties</Label>
                            <Input 
                                className="form-control text-center"
                                type="text"
                                name="specialties"
                                id="specialties"
                                placeholder={cookInfo.Profile.specialties}
                                onChange={handleInputChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="bio">Cook Bio</Label>
                            <Input 
                                className="form-control text-center"
                                type="text"
                                name="bio"
                                id="bio"
                                placeholder={cookInfo.Profile.bio}
                                onChange={handleInputChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="location">Location</Label>
                            <Input 
                                className="form-control text-center"
                                type="text"
                                name="location"
                                id="location"
                                placeholder={cookInfo.Profile.location}
                                onChange={handleInputChange}
                            />
                        </FormGroup> */}
                        {/* <FormGroup>
                            <Label for="cookImg"/>
                            <Input 
                                className="form-control text-center"
                                type="file"
                                name="cookImg"
                                id="cookImg"
                                onChange={e => handleUploadImage(e)}
                            />
                            <FormText color="muted">Upload an image of your delicious homecooked meal to entice buyers</FormText>
                        </FormGroup> */}
                        <Button 
                            className="btn btn-primary btn-block mt-5"
                            type="submit"
                            onClick={handleCookUpdate}
                        >
                            Update
                        </Button>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    );
};

export default CookInfo;