import React, { useEffect, useState } from 'react';
import {Row, Col} from 'react-bootstrap';

export const MyInfo = (props) => {
    const [employee, setEmployee] = useState({});
    
    useEffect(()=>{
        if(props.location.state && props.location.state.employee){
            const {fname, lname, address} = props.location.state.employee;
            setEmployee({fname, lname, address});
        }
        else {
            props.history.push('/');
        }
        console.log('userInfo' , props.location.state);
    }, []);

    return (<div style={{paddingLeft:"10px"}}>
                <div style={{paddingTop:"30px"}}></div>
                <h2>My Info</h2>
                <div style={{paddingTop:"10px"}}></div>
                    <Row>
                        <Col lg={3}>Name</Col>
                        <Col lg={6}> {employee.fname} {employee.lname} </Col>
                    </Row>
                    <Row>
                        <Col lg={3}>Address</Col>
                        <Col lg={6}>{employee.address} </Col>
                    </Row>
            </div>);
}