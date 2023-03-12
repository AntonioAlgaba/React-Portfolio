import React from 'react'
import {Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faInstagram} from '@fortawesome/free-brands-svg-icons';
import './style.css'

function footer() {
    return (
        <footer >
           <Container>
            <Row>
                <Col className='text-center py-3'>
                    <div className='social-container'>
                        
                        <a href='https://github.com/AntonioAlgaba' className='social' target='_blank'>
                            <FontAwesomeIcon icon={faGithub} size='2x' />
                        </a>
                        <a href='https://www.linkedin.com/in/antonio-algaba-osuna-448bb43b/' className='social' target='_blank'>
                            <FontAwesomeIcon icon={faLinkedin} size='2x' />
                        </a>
                        <a href='https://www.instagram.com/' className='social' target='_blank'>
                            <FontAwesomeIcon icon={faInstagram} size='2x' />
                        </a>
                    </div>
                    <div>
                    Copyright &copy; Antonio Algaba
                    </div>
                   
                </Col>
            </Row>
           </Container>
        </footer>
    )

}


export default footer;