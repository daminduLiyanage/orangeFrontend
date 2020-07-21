import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .navbar {
        background-color: #f7f7f7;
    }

    .navbar-brand, .navbar-nav .nav-link {
        color: #bbb;

        &:hover {
            color: black;
        }
    }

`;

export const NavigationBar = () => (
    <Styles>
        <Navbar  expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav >
                    <Nav.Item><Nav.Link href="/myinfo">My Info</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/employeedata">Employee Data</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/leave">Leave</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)