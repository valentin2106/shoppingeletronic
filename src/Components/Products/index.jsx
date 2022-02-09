import React, { useState, useEffect } from "react";
import { useCart } from "../CartContext/CartContext";
import {
  ButtonCart,
  Card,
  Container,
  ContainerDescription,
  ContainerName,
  Description,
  ImageProduct,
  ListCard,
  NameProduct,
  PriceProduct,
  Title,
} from "./style";
const Products = () => {
  const [products, setProducts] = useState([]);

  const cart = useCart();

  const add = (product) => () => {
    cart.addToCart(product);
  };
  useEffect(() => {
    const fethProducts = async () => {
      try {
        const response = await fetch("http://localhost:3000/products");

        const data = await response.json();

        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fethProducts();
  }, []);
  return (
    <>
      <Title>Confira Nossas Ofertas</Title>
      <Container>
        <ListCard>
          {products.map((product, index) => {
            return (
              <Card key={product.id}>
                <ImageProduct src={product.image} alt="image" />
                <ContainerName>
                  <NameProduct>{product.name}</NameProduct>
                </ContainerName>
                <ContainerDescription>
                  <Description>{product.description}</Description>
                </ContainerDescription>
                <PriceProduct>{product.price}</PriceProduct>
                <ButtonCart onClick={add(product)}>
                  Adicionar ao Carrinho
                </ButtonCart>
              </Card>
            );
          })}
        </ListCard>
      </Container>
    </>
  );
};
export default Products;
