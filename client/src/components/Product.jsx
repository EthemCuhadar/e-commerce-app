import styled from "styled-components"


const Container = styled.div`
    width: 95%;
    height: 100px;
    border: 1px solid #ccc;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    background-color: Gainsboro;
    border-radius: 5px;
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: left;
    height: 40px;
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    height: 40px;
`

const ProductTitle = styled.h1`
    flex: 1;
    font-size: 18px;
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

const ProductDetails = styled.h3`
    flex: 1;
    font-size: 16px;
    font-weight: 500;
    text-align: left;
    margin-left: 20px;
    display: flex;
    align-items: center;
    margin-right: 20px;
    text-decoration: none;
    color: black;
`

const Product = ( {product} ) => {
  return (
    <Container>
        <ProductTitle>Product ID: {product.id}</ProductTitle>
        <ProductDetails>Catalog code: {product.catalogCode}</ProductDetails>
        <ProductDetails>Description: {product.description1}</ProductDetails>
    </Container>
  )
}

export default Product