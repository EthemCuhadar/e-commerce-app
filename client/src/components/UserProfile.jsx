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

const UserDetails = styled.h3`
    font-size: 18px;
    font-weight: 500;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
`

const UserProfile = ( {user} ) => {
    return (
    <Container>
        <Wrapper>
            <Title>User Profile</Title>
            <UserDetails>
                <p>Name: {user.name} </p>
                <p>Email: {user.email} </p>
                <p>Contact: {user.contact} </p>
            </UserDetails>
        </Wrapper>
    </Container>
    )
}

export default UserProfile