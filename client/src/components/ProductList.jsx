import styled from "styled-components"

import { useQuery, gql } from "@apollo/client";
import Product from "./Product";

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

const ProductList = () => {

    const { loading, error, data } = useQuery(GET_PRODDUCTS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    if (data) {

        console.log(data);
    }
    return (
        <Container>
          <Wrapper>
            <Title>Products</Title>
          </Wrapper>
              {data.products.products.map(product => (
                  <Product key={product.id} product={product} />
              ))}
        </Container>
    )
}

const GET_PRODDUCTS = gql`
  query {
    products(limit: 10, index: 10) {
      count
      products {
        id
        description1
        catalogCode
      }
    }
  }
`

export default ProductList