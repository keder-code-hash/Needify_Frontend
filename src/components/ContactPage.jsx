import React from 'react';
import { useFormik } from 'formik';
import {Form,Button,Col} from "react-bootstrap"; 


const ContactForm = () => { 
  const formik = useFormik({
    initialValues: {
      email: '',
      password : '',
      name: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
    onReset : values =>{
        values.email=''
        values.name=''
        values.password=''
        
    }
  });
  return (
    <div id="contact" > 
        <br/>
        <br/>
        <br/>
        <div className='row' >
            <Col sm={2}/>
            <Col sm={8} >
                <Form onSubmit={formik.handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your Name</Form.Label> 
                        <Form.Control
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Enter name" 
                            onChange={formik.handleChange}
                            value={formik.values.name}
                        /> 
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label> 
                        <Form.Control
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Enter email" 
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Message</Form.Label>
                        <Form.Control
                            id="Message"
                            name="Message"
                            type="text"
                            placeholder="Enter Message" 
                            onChange={formik.handleChange}
                            value={formik.values.Message}
                        />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox"> 
                    </Form.Group>


                    <Button variant="primary" type="submit">
                    Submit
                    </Button>
                </Form>
            </Col>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
    </div>
    
  );
};

export default ContactForm