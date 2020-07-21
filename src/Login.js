import React, { useEffect, useState } from 'react';
import {Form, Button} from 'react-bootstrap';
import md5 from 'md5';

export const Login = (props) => {
    const usernameRef = React.useRef();
    const passwordRef = React.useRef();
    const [users, setUsers] = useState([]);
    
    useEffect(()=>{
            fetch("http://localhost:8001/user")
                .then(res => res.json())
                .then(
                    (result) => {
                        console.log('useEffect fetch result', result);
                        setUsers(result);
                    },
                    (error) => {
                        console.log(error);
                        alert('Error: Connection to the backend Symfony server lost! Make sure to reload this page after backend server starts running');
                    }
                )
        }, []);

        const getEmployee = async (fk_empId) => {
            const employeesInfo = await fetch("http://localhost:8001/employee")
                .then(res => res.json());
            console.log('employees', employeesInfo);
            let filteredEmployee = employeesInfo.filter((employee)=>{
                return (employee.empId===fk_empId);
            });
            console.log('filteredEmployee', filteredEmployee);
            props.history.push('/MyInfo', { employee : filteredEmployee[0] });
        };

        const onClickSubmit = () => {
             console.log('use state users:', users);
             console.log('typed username:', usernameRef.current.value);
             let hashedPw = md5(passwordRef.current.value);
             console.log(hashedPw);
             console.log('props', props);
             let filteredUser = users.filter((user)=>{
                return (user.username===usernameRef.current.value && user.password===hashedPw);
             });
             console.log('filtered user:', filteredUser);
             if(filteredUser && filteredUser.length>0){ 
                getEmployee(filteredUser[0].fk_empId);
             }
             else{
                console.log('no user');
                alert('Invalid username password combination!')
            }
            // fetch("http://localhost:8001/product")
            //     .then(res => res.json())
            //     .then(
            //         (result) => {
            //             console.log('result', result);
            //         },
            //         (error) => {
            //             console.log(error);
            //         }
            //     )
        };



        return (<div className="d-flex justify-content-center" >
                    <div style={{height:'100px', paddingTop:'50px'}}> </div>
                        <Form>
                            <Form.Group controlId="formBasicUsername">
                                <Form.Label>Login Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Username" ref={usernameRef}/>
                                <Form.Text className="text-muted">
                                
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" ref={passwordRef} />
                            </Form.Group>

                            <Button onClick={()=>onClickSubmit()} variant="secondary" >
                                Submit
                            </Button>
                        </Form>
                </div>);
}