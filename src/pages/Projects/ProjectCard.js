import React from 'react'
import { Card, Button} from 'react-bootstrap'



function ProjectCards (props) {
    return(
       
        <Card key={props.id} style={{ width: '18rem', margin: '20px', backgroundColor: '#e8dedeeb'}}>
                <Card.Img variant='top' src={props.image} style={{height: '170px', marginTop:'10px'}}/>
                <Card.Body>
                <Card.Title style={{color:'black', fontWeight:'bold'}}>{props.name}</Card.Title>
                <Button variant="primary" href={props.gitHub} target="_blank" style={{margin: '30px'}}>GitHub</Button>
                <Button variant="primary" href={props.deployed} target="_blank">Demo</Button>
                </Card.Body>
        </Card>  
        
    )
}

export default ProjectCards