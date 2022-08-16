import React from "react";
import styled from "styled-components"
import NavbarLogin from "../components/NavbarLogin"
import { useNavigate } from "react-router-dom"
import { useMutation, gql } from "@apollo/client";

const Container = styled.div`
    width: 100vw;
    height: 60vh;
    background-color: white;
    opacity: 0.9;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Wrapper = styled.div`
    padding: 20px;
    width: 30%;
    background-color: Gainsboro;
    border-radius: 5px;
`

const Title = styled.h1`
    font-size: 24px;
    font-weight: 600;
    text-align: center;
`

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    border-radius: 5px;
    border: 1px solid #ccc;
    padding: 5px;
    margin: 5px;
`

const Button = styled.button`
    flex: 1;
    min-width: 40%;
    border-radius: 5px;
    border: 1px solid #ccc;
    padding: 5px;
    margin: 5px;
    cursor: pointer;
    background-color: DodgerBlue;
`

const LoginPage = () => {

    const nav = useNavigate();
    
    const [formState, setFormState] = React.useState({
        email: '',
        password: ''
    });

    const [login, {data, loading, error}] = useMutation(LOGIN_USER, {
        onCompleted(data) {
            if (data) {
                localStorage.setItem('token', data.login);
                console.log(data);
                nav('/home');
            }
        }
    });

    const handleSubmit = e => {
        console.log(formState);
        e.preventDefault();
        login({ variables: formState });
    }

  return (
        <div>
            <NavbarLogin />
            <Container>
                <Wrapper>
                    <Title>LOGIN</Title>
                    <Form>
                        <Input type="email" placeholder="Email" value={formState.email} onChange={e => setFormState({ ...formState, email: e.target.value })} />
                        <Input type="password" placeholder="Password" value={formState.password} onChange={e => setFormState({ ...formState, password: e.target.value })} />  
                        <Button onClick={handleSubmit} >Login</Button>                    
                    </Form>               
                </Wrapper>
            </Container>
        </div>
  )
}

const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password)
    }
`

export default LoginPage