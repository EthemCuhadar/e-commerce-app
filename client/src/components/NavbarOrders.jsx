import styled from "styled-components"
import { useNavigate } from "react-router-dom"

const Container = styled.div`
    height: 80px;
    background-color: "white";
    display: flex;
    align-items: top;
    justify-content: center;
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    height: 60%;
    background-color: Gainsboro;
    border-radius: 5px;
    margin-top: 10px;
`

const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: row;
    margin-right: 20px;
    height: 20%;
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    height: 20%;
    
`

const Title = styled.h1`
    font-size: 24px;
    font-weight: 600;
    text-align: left;
    muted: true;
    margin-left: 20px;
    display: flex;
    align-items: center;
    margin-right: 20px;
    text-decoration: none;
    color: black;
`

const LinkItem = styled.a`
    text-decoration: none;
    color: black;
    font-size: 18px;
    font-weight: 500;
    margin-left: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover {
        color: red;
    }
`

const NavbarWelcome = () => {
    const nav = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem("token")
        nav("/")
    }

  return (
    <Container>
        <Wrapper>
            <Left>
                <Title>E-commerce</Title>
            </Left>
            <Right>
                <LinkItem href="/">Home</LinkItem>
                <LinkItem href="/products">Products</LinkItem>
                <LinkItem href="/user">Profile</LinkItem>
                <LinkItem onClick={handleLogout}>Logout</LinkItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default NavbarWelcome