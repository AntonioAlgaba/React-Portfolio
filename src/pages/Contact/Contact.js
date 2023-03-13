
import { Card, Form, Col, Row, Button } from 'react-bootstrap';
import React, {Component} from "react";
import './Contact.css'
import CV from './CV.pdf'

class Contact extends Component {
    state = {
        name: "",
        email: "",
        text: ""
    };
    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = event.target;
    
        // Updating the input's state
        this.setState({
          [name]: value
        });
      };
      handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();
    
        // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
        alert(`Hello ${this.state.name}\n${this.state.email}\n${this.state.text}`);
        this.setState({
          name: "",
          email: "",
          text: ""
        });
      };

      handlePdf = () => {
        window.open(CV, '_blank')
      };

      render() {
        return (

    <Row style={{marginTop: '100px'}}>
        <Col md={7} >
         <Card border="primary" style={{ width: '25rem', margin: '0 auto', height: '12rem', backgroundColor: '#e8dedeeb' }}>
          <Card.Body>
            <Card.Title style={{textAlign: 'center', color: 'black' }}>My CV</Card.Title>
            <Card.Text style={{color: 'black'}}>
            You can see my CV clicking the button and send me an email.
            </Card.Text>
            <Button type="submit" variant="primary" onClick={this.handlePdf} style={{ marginLeft: '150px'}}>
        CV
       </Button>
          </Card.Body>
         </Card>
        </Col>
        <Col md={5} style={{margin: '0 auto' }}>
         <Form style={{marginRight: '50px'}}>
          <Form.Group className="mb-3" controlId="formBasicName">
           <Form.Control 
            value={this.state.name}
            name="name"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Name" 
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
           <Form.Control 
            value={this.state.email}
            name="email"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Email"  />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
         <Form.Control as="textarea" rows={3} 
           value={this.state.text}
           name="text"
           onChange={this.handleInputChange}
           type="text"
           placeholder="Comment" 
           />
        </Form.Group>
       <Button onClick={this.handleFormSubmit} variant="primary" type="submit">
        Submit
       </Button>
    </Form>
    </Col>
    </Row>
        )
      }
}


export default Contact;