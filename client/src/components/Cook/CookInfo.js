import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button, Modal, ModalHeader, ModalBody, Form, Row, Col, FormGroup, Label, Input, FormText } from "reactstrap";
import { useAuthState } from "../../utils/AuthContext";
import API from "../../utils/API";

const CookInfo = () => {
    const [cookInfo, setCookInfo] = useState({});
    const [profileInfo, setProfileInfo] = useState({});
    const [updateInfo, setUpdateInfo] = useState({});
    const [modal, setModal] = useState(false);
    const history = useHistory();
    const userDetails = useAuthState();
    const toggle = () => setModal(!modal);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setUpdateInfo({ ...updateInfo, [name]: value });
    };

    const updateConditions = () => {
        if (updateInfo.firstName) {
            API.updateCook(cookInfo.id, { firstName: updateInfo.firstName }).catch(err => console.log(err));
            setCookInfo({ ...cookInfo, firstName: updateInfo.firstName });
        };

        if (updateInfo.lastName) {
            API.updateCook(cookInfo.id, { lastName: updateInfo.lastName }).catch(err => console.log(err));
            setCookInfo({ ...cookInfo, lastName: updateInfo.lastName });
        };

        if (updateInfo.email) {
            API.updateCook(cookInfo.id, { email: updateInfo.email }).catch(err => console.log(err));
            setCookInfo({ ...cookInfo, email: updateInfo.email });
        };

        if (updateInfo.bio) {
            API.updateProfile(profileInfo.id, { bio: updateInfo.bio }).catch(err => console.log(err));
            setProfileInfo({ ...profileInfo, bio: updateInfo.bio });
        };

        if (updateInfo.specialties) {
            API.updateProfile(profileInfo.id, { specialties: updateInfo.specialties }).catch(err => console.log(err));
            setProfileInfo({ ...profileInfo, specialties: updateInfo.specialties });
        };

        if (updateInfo.location) {
            API.updateProfile(profileInfo.id, { location: updateInfo.location }).catch(err => console.log(err));
            setProfileInfo({ ...profileInfo, location: updateInfo.location });
        };
    }

    const handleCookUpdate =  async (event) => {
        event.preventDefault();

        // TODO: How to get all these to resolve before we can get to getCookInfo()?
        await updateConditions();

        // loadCook();
        toggle();
        history.replace("/");
        history.replace("/dash");        
    };

    useEffect(() => {
        API.getCook(userDetails.user.id)
            .then(res => {
                setCookInfo(res.data);
                setProfileInfo(res.data.Profile);
                // console.log("in CookInfo ~ useEffect ~ after getCook ~ cookInfo", cookInfo);
            })
            .catch(err => console.log(err));
    }, [userDetails.user.id]); 

    return (
        <div>
            <Card>
                <CardImg top width="100%" src={profileInfo.cookImgURL} alt={cookInfo.firstName} />
                <CardBody>
                    <CardTitle tag="h5">{cookInfo.firstName} {cookInfo.lastName}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">{profileInfo.specialties}</CardSubtitle>
                    <CardText>{profileInfo.bio}</CardText>
                    <CardText>{profileInfo.location}</CardText>
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