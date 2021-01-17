import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { FormText, Container, Card, CardBody, Form, FormGroup, Label, Input, Button, Row, Col } from "reactstrap"
import API from "../utils/API";

// TODO: Need logic to compare passwords within form
// TODO: Show frontend error if a user attempts to signup twice
// TODO: Now showing full register info? Probably in register thing
function Register() {
    const [registerUser, setRegisterUser] = useState({});
    // const [profileInfo, setProfileInfo] = useState({});
    const history = useHistory();

    const handleRegistrationInputChange = (event) => {
        const { name, value } = event.target;
        setRegisterUser({ ...registerUser, [name]: value });
    };



    // image upload info source https://dev.to/asimdahall/client-side-image-upload-in-react-5ffc
    const uploadedImage = React.useRef(null);
    const imageUploader = React.useRef(null);
    

    // access the image file in the handleImageUpload method attached with onChange event
    const handleImageUpload = e => {
      const [file] = e.target.files; // gives access to the list of files uploaded via the file input we created (only one because we restricted # to one)
      if (file) {
        const reader = new FileReader();  // using the FileReader constructor in order to read the content of the file
        const { current } = uploadedImage; // what does it do?
        current.file = file;
        reader.onload = e => {  //Attaching an onload event listener to the reader we created which when loaded will attach the file url it will read to the img element
          current.src = e.target.result;
        };
        reader.readAsDataURL(file); // Read the file as URL and passs the file selected in it
      }
    };


    // needs to pass on the info of the file image


    // const handleProfileInputChange = (event) => {
    //     const { name, value } = event.target;
    //     setProfileInfo({ ...profileInfo, [name]: value });
    // }


    const handleRegistration = (event) => {
        event.preventDefault();
        if (registerUser.firstName && registerUser.lastName && registerUser.email && registerUser.password) {
            API.register({
                firstName: registerUser.firstName,
                lastName: registerUser.lastName,
                email: registerUser.email,
                password: registerUser.password,
            }).then((res) => {
                API.createProfile({ CookId: res.data.id, specialties: registerUser.specialties,
                bio: registerUser.bio, cookImg: {imageUploader} });
                setRegisterUser({});
                history.push("/login");
            }).catch(err => console.log(err));
        }
    };

    return <Container>
        <Card>
            <CardBody>
                <h2 className="text-center mb-3">Become a Homecook</h2>
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
                                    placeholder="First Name"
                                    onChange={handleRegistrationInputChange}
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
                                    placeholder="Last Name"
                                    onChange={handleRegistrationInputChange}
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
                            placeholder="Email"
                            onChange={handleRegistrationInputChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input 
                            className="form-control text-center" 
                            type="password"
                            name="password"
                            id="password" 
                            placeholder="Password"
                            onChange={handleRegistrationInputChange}
                        />
                    </FormGroup>
                    {/* <FormGroup>
                        <Label for="confirm">Confirm Password</Label>
                        <Input 
                            className="form-control text-center" 
                            type="password"
                            id="confirm" 
                            placeholder="Confirm Password"
                            onChange={e => setRegisterPassword(e.target.value)}
                        />
                    </FormGroup> */}
                    {/* <FormGroup>
                        <Label for="specialties">Your Cooking Specialties</Label>
                        <Input 
                            className="form-control text-center" 
                            type="text"
                            name="specialties"
                            id="specialties" 
                            placeholder="Southern, Comfort, Italian, Mexican, etc."
                            onChange={handleProfileInputChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="bio">Short Bio</Label>
                        <Input 
                            className="form-control text-center" 
                            type="text"
                            name="bio"
                            id="bio" 
                            placeholder="Write something for prospective buyers"
                            onChange={handleProfileInputChange}
                        />
                    </FormGroup>
*/}

                    <FormGroup>
                    <Col xs={4}>
                        <Label for="cookImg">Cook Profile Image</Label>
                        <Input 
                            
                            className="form-control text-center" 
                            type="file"
                            name="cookImg"

                            id="cookImg"
                            accept="image/*"  // accepts only image
                            multiple = "false" // accepts only one 
                            onChange={handleImageUpload}
                            ref={imageUploader}

                            id="cookImg" 
                            onChange={handleProfileInputChange}

                        />
                   {/* showing the uploaded picture user is registering  */}
                       <Col>
                        
                                <img 
                                    ref={uploadedImage} // can disply image thanks to the useRef hook
                                      style={{
                                    width: "1",
                                    height: "1",
                                    position: "relative",
                                    borderRadius: "50%"
                                    }}
                                />  

                                
                        </Col>
                        
                        <FormText color="muted">
                            Upload a profile image. Buyer's trust cooks they can see!
                        </FormText>
                  
                     
                    <Button 
                        className="btn btn-primary btn-block mt-5"
                        type="submit"
                        onClick={handleRegistration}
                    >
                        Register
                    </Button>
                </Form>
            </CardBody>
        </Card>
    </Container>
};

export default Register;