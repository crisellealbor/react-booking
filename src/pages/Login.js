import React,{useState,useEffect} from 'react';
import {Form,Button} from 'react-bootstrap';

export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isActive, setIsActive] = useState(false);

    function loginUser(e){
        e.preventDefault();

        setEmail('');
        setPassword('');

        console.log('successfully login')
    }

    useEffect(() => {
        if(email !== '' && password !== ''){
            setIsActive(true)
        }else {
            setIsActive(false)
        }
    }, [email, password])

    return(
        <Form onSubmit={(e) => loginUser(e)}>
            <Form.Group controlId="userEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                    type = "email"
                    placeholder = "Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group controlId="userPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    type = "password"
                    placeholder = "Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </Form.Group>
            { isActive ? 
                <Button variant="primary" type="submit" id="submitBtn">
                Submit
                </Button>
                :
                <Button variant="danger" type="submit" id="submitBtn" disabled>
                Submit
                </Button>
            }
        </Form>
    )
}