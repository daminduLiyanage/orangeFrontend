import React from 'react';
import { Container } from 'react-bootstrap';

export const Layout = (props) => (
    <Container fluid style={{ paddingTop:'100px'}}>
        {props.children}
    </Container>
)