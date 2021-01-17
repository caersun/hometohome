import React from 'react';
import {Container,  Col, Row, Dropdown, DropdownButton, Image, Form,  Button } from "react-bootstrap";
import photo from "../components/images/MyPicture.jfif"; // need to be actual picture of user

function Profile() {


    return (

      <Container d-flex flex-row space-between>

        <Row>
          <Col md={{offset: 3}}>
              <h1>Home to Home Cook Profile</h1> 
          </Col>
        </Row>


        <Row>
          <Col md={{offset:4}}>
          <h2 className="displayuser">Welcome Emmanuel</h2>  {/* needs to be actual name of user {props.firstName}*/}
          </Col>
        </Row>
        
        <Row>
          <Col xs={11}>
            <h5 class="text-center">aaa@gmail.com</h5>  {/* needs to be actual email of user {props.email}*/}
          </Col>
        </Row>
        
        <Row className="justify-content-center">
          <Col xs={2}>
            <Image className="img" src={photo} alt="Emmanuel Durand"  width="50" height="50" roundedCircle /> {/* needs to be actual picture of user src={props.picture} */}
          </Col>
        </Row>
        
        <Row>

          <Col md={4}>
          <div class="d-flex align-items-start flex-column bd-highlight mb-3">
          <Row>
          <div class="mb-auto p-2 bd-highlight">
            <input
              type="file"
              className="custom-file-input"
              id="inputGroupFile01"
              aria-describedby="inputGroupFileAddon01"
            />
            <label className="custom-file-label" htmlFor="inputGroupFile01">
              Upload New Meal's Picture
            </label>
            </div>
            </Row>

            <Row>
            <div class="mb-auto p-2 bd-highlight">
              <DropdownButton id="dropdown-basic-button" title="Food Type Selection">  {/* needs to be a map of all types of food props.results.map(result => (*/}
              <Dropdown.Item href="#/action-1">American</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Asian</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </DropdownButton>
              </div>
              </Row>

              <Row>
                <div class="mb-auto p-2 bd-highlight">

                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Meal Description with price</Form.Label>
                    <Form.Control size="lg" as="textarea" rows={5} />
                  </Form.Group>

            </div>
            </Row>

            </div>
            </Col>

            

            <Col md={3}>
            </Col>

          <Col md={5}>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Cook History</Form.Label>
            <Form.Control as="textarea" rows={5} />
          </Form.Group>
          </Col>



        </Row>

        <Row>
          <Button variant="primary" size="lg" type="submit">
            Submit
          </Button>
        </Row>



  </Container>



        );

}

export default Profile;