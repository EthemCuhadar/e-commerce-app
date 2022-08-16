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

const UserOrderList = () => {
    return (
        <Container>
            <Wrapper>
                <Title>User Orders</Title>
            </Wrapper>
            <UserOrder />
        </Container>
    )
}

const GET_ORDERS = gql`
    query {
        orders(startDate: "15.06.2020", endDate: "15.06.2022") {
            id
            orderName
            total
            orderDate
            details {
                product {
                    id
                    price {
                        price {
                            priceId
                            price
                        }
                    }
                }
            }
        }
    }
`

export default UserOrderList