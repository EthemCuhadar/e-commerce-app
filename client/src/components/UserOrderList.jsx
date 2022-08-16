import styled from "styled-components"
import UserOrder from "./UserOrder"

const Container = styled.div`
    background-color: white;
    display: flex;
    padding: 20px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`

const Wrapper = styled.div`
    width: 95%;
    border-bottom: 1px solid #ccc;
    margin-bottom: 15px;
`

const Title = styled.h1`
    font-size: 24px;
    font-weight: 600;
    text-align: left;
    margin: 10px 0;
`

const UserOrders = () => {
    return (
        <Container>
            <Wrapper>
                <Title>User Orders</Title>
            </Wrapper>
            <UserOrder />
        </Container>
    )
}

export default UserOrders