import React, { useState } from "react";
import { Container, Form, FormGroup, Label, Input, Button } from "reactstrap";
import axios from "axios";

function ImageUpload() {
    const [imageSelected, setImageSelected] = useState();

    const uploadImage = () => {
        const formData = new FormData();
        formData.append("file", imageSelected[0]);
        formData.append("upload_preset", "dalcz0np");

        axios.post('https://api.cloudinary.com/v1_1/dxpy2lt0i/image/upload', formData)
            .then(res => {
                console.log("imageupload ~ res ~", res);
                // console.log("res.json()", res.json());
                console.log("figured it out?????", res.data.secure_url);
            })
            .catch(err => console.log(err));
    };

    // const [values, setValues] = useState({
    //     imagePreviewUrl: "",
    //     picFile: null
    // });

    // let fileInput = React.createRef();

    // // activates user file input to set div
    // const editProfilePic = () => {
    //     fileInput.current.click();
    // };

    // // handles the image that was input by user
    // const handleimageChange = e => {
    //     e.preventDefault();
    //     let reader = new FileReader();
    //     let inFile = e.target.files[0];

    //     reader.onloadend = () => {
    //         setValues({ 
    //             ...values, 
    //             picFile: inFile,
    //             imagePreviewUrl: reader.result 
    //         });

    //     reader.readAsDataURL(inFile);
    //     };
    // };

    // // call api backend
    // const handleSubmit = async () => {
    //     // response stores the response back from the api
    //     response = await axios.post("/storage/upload", form_data).catch(error => {
    //         alert("Error occured while uploading image. Try to upload a smaller image size or try again later.");
    //         return;
    //     });
    // }

    return (
        <Container>
            <Form>
                <FormGroup>
                    {/* <div onClick={() => editProfilePic()}>
                        <input 
                            type="file"
                            accept="image/*"
                            onChange={handleimageChange}
                            ref={fileInput}
                        />
                        <img 
                            src={imagePreviewUrl}
                            alt="..."
                            style={{ objectFit: "cover" }}
                        />
                    </div> */}
                    {/* <Label /> */}
                    <Input 
                        type="file"
                        onChange={(event) => {
                            setImageSelected(event.target.files);
                        }}
                    />
                    <Button onClick={uploadImage}>Upload Image</Button>
                </FormGroup>
            </Form>
        </Container>
    )
};

export default ImageUpload;