import styled from "styled-components"
import NavbarWelcome from "../components/NavbarWelcome"

const Container = styled.div`
    width: 100vw;
    height: 60vh;
    background-color: "white";
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Title = styled.h1`
    font-size: 36px;
    font-weight: 600;
    text-align: center;
    padding: 20px 0;
`

const Explanation = styled.p`
    font-size: 18px;
    font-weight: 400;
    text-align: center;
    muted: true;
`

const WelcomePage = () => {
  return (
    <div>
        <NavbarWelcome />
        <Container>
            <Title>Welcome</Title>
            <Explanation>
                This is a simple web application that allows you to create and manage your own personal shopping list.
            </Explanation>
        </Container>
    </div>
  )
}

export default WelcomePage