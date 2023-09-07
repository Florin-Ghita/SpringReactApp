import React  from 'react';
import { Avatar, Button } from 'antd';
import Container from './Container';
import './Footer.css';

    const Footer = (props) => (
        <div className='footer'>
            <Container>
                { props.numberOfStudents ?
                    <Avatar
                        style={{backgroundColor: '#f56a00', marginRight: '5px'}}
                        size='large'>{props.numberOfStudents}</Avatar> : null
                }
                 <Button onClick={() => props.handleAddStudentClickEvent()} type ='primary'> Add new student + </Button>
            </Container>
        </div>
    );

export default Footer;
