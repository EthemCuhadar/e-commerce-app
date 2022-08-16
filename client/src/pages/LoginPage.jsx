import styled from "styled-components"

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
  return (
    <div>LoginPage</div>
  )
}

export default LoginPage