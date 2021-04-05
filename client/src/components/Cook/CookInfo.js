import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button, Modal, ModalHeader, ModalBody, Form, Row, Col, FormGroup, Label, Input } from "reactstrap";
import { useAuthState } from "../../utils/AuthContext";
import API from "../../utils/API";

const CookInfo = () => {
    const [cookInfo, setCookInfo] = useState({});
    const [profileInfo, setProfileInfo] = useState({});
    const [uploadedImageFile, setUploadedImageFile] = useState();
    const [updatedImageURL, setUpdatedImageURL] = useState("");
    const [updateInfo, setUpdateInfo] = useState({});
    const [modal, setModal] = useState(false);
    const history = useHistory();
    const userDetails = useAuthState();
    const toggle = () => setModal(!modal);
    const [imageModal, setImageModal] = useState(false);
    const imageToggle = () => setImageModal(!imageModal);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setUpdateInfo({ ...updateInfo, [name]: value });
    };

    const updateConditions = () => {
        if (updateInfo.firstName) {
            API.updateCook(cookInfo.id, { firstName: updateInfo.firstName })
                .then(() => setProfileInfo({ ...cookInfo, firstName: updateInfo.firstName }))
                .catch(err => console.log(err));
        };

        if (updateInfo.lastName) {
            API.updateCook(cookInfo.id, { lastName: updateInfo.lastName })
                .then(() => setProfileInfo({ ...cookInfo, lastName: updateInfo.lastName }))
                .catch(err => console.log(err));
        };

        if (updateInfo.email) {
            API.updateCook(cookInfo.id, { email: updateInfo.email })
                .then(() => setProfileInfo({ ...cookInfo, email: updateInfo.email }))
                .catch(err => console.log(err));
        };

        if (updateInfo.bio) {
            API.updateProfile(profileInfo.id, { bio: updateInfo.bio })
                .then(() => setProfileInfo({ ...profileInfo, bio: updateInfo.bio }))
                .catch(err => console.log(err));
        };

        if (updateInfo.specialties) {
            API.updateProfile(profileInfo.id, { specialties: updateInfo.specialties })
                .then(() => setProfileInfo({ ...profileInfo, specialties: updateInfo.specialties }))
                .catch(err => console.log(err));
        };

        if (updateInfo.location) {
            API.updateProfile(profileInfo.id, { location: updateInfo.location })
                .then(() => setProfileInfo({ ...profileInfo, location: updateInfo.location }))
                .catch(err => console.log(err));
        };
    };

    const handleCookUpdate = async (event) => {
        event.preventDefault();
        // handleImageUpload();
        // TODO: How to get all these to resolve before we can get to getCookInfo()?
        await updateConditions();

        // // loadCook();
        toggle();
        history.replace("/");
        history.replace("/dash");        
    };

    const handleImageFile = () => {
        const formData = new FormData();
        formData.append("file", uploadedImageFile[0]);
        formData.append("upload_preset", "dalcz0np");
        API.uploadImage(formData)
            .then(res => {
                API.updateProfile(profileInfo.id, { cookImgURL: res.data.secure_url })
                .then(() => setProfileInfo({ ...profileInfo, cookImgURL: res.data.secure_url }))
                .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
        setUploadedImageFile();
    };

    const handleImageURL = () => {
        // TODO: function validate if it is an image/type/size?
        API.updateProfile(profileInfo.id, { cookImgURL: updatedImageURL })
            .then(() => setProfileInfo({ ...profileInfo, cookImgURL: updatedImageURL }))
            .catch(err => console.log(err));
        setUpdatedImageURL("");
    };

    const handleImageUpdate = () => {
        if (updatedImageURL) {
            console.log("updatedImageURL", updatedImageURL);
            handleImageURL();
        } else if (uploadedImageFile) {
            console.log("uploadedImage object", uploadedImageFile);
            handleImageFile();
        };

        imageToggle();
    };


    

    useEffect(() => {
        API.getCook(userDetails.user.id)
            .then(res => {
                setCookInfo(res.data);
                setProfileInfo(res.data.Profile);
            })
            .catch(err => console.log(err));
    }, [userDetails.user.id]); 

    return (
        <div>
            <Card>
                <CardImg top width="100%" src={profileInfo.cookImgURL} alt={cookInfo.firstName} />
                <Button onClick={imageToggle}>Edit Profile Image</Button>
                <CardBody>
                    <CardTitle tag="h5">{cookInfo.firstName} {cookInfo.lastName}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">{profileInfo.specialties}</CardSubtitle>
                    <CardText>{profileInfo.bio}</CardText>
                    <CardText>{profileInfo.location}</CardText>
                    <Button onClick={toggle}>Edit</Button>
                </CardBody>
            </Card>
            <Modal isOpen={imageModal} toggle={imageToggle}>
                <ModalHeader toggle={imageToggle}>Update Profile Image</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="cookImgURL">Image URL</Label>
                            <Input 
                                type="url"
                                name="cookImgURL"
                                id="cookImgURL"
                                onChange={(e => setUpdatedImageURL(e.target.value))}
                            ></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="cookImg">Or Upload Image (.jpg, .jpeg)</Label>
                            <input 
                                className="form-control text-center"
                                type="file"
                                name="cookImg"
                                id="cookImg"
                                onChange={(e => setUploadedImageFile(e.target.files))}
                            />
                        </FormGroup>
                        <Button className="btn btn-primary btn-block mt-5"
                            // type="submit"
                            onClick={handleImageUpdate}>
                                Update Profile Image
                        </Button>
                    </Form>
                </ModalBody>
            </Modal>
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
                        <FormGroup>
                            <Label for="specialties">Specialties</Label>
                            <Input 
                                className="form-control text-center"
                                type="text"
                                name="specialties"
                                id="specialties"
                                placeholder={profileInfo.specialties}
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
                                placeholder={profileInfo.bio}
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
                                placeholder={profileInfo.location}
                                onChange={handleInputChange}
                            />
                        </FormGroup>
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