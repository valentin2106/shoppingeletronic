import styled from "styled-components";

export const Title = styled.h1`
  text-align: center;
  color: #134be4e2;
`;
export const Container = styled.div`
  display: flex;
  justify-content: center;

  background: #ffffff;
`;
export const ListCard = styled.ul`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
`;
export const Card = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  height: 300px;
  margin: 10px;
  text-align: center;
  list-style: none;
  padding: 5px;
  box-shadow: 2px 2px 2px 2px #888888;
  border-radius: 10px 10px 10px 10px;
`;
export const ContainerName = styled.div`
  width: 100%;
  height: 50px;
`;
export const NameProduct = styled.h1`
  font-size: 12px;
  color: #686464e6;
`;
export const ImageProduct = styled.img`
  width: 100px;
  height: 100px;
`;
export const ContainerDescription = styled.div`
  width: 100%;
  height: 30px;
`;
export const Description = styled.h2`
  font-size: 9px;
  color: #686464e6;
`;
export const PriceProduct = styled.h1`
  display: flex;
  margin-top: 30px;
  font-size: 15px;
  color: #134be4e2;
  justify-self: end;
`;
export const ButtonCart = styled.button`
  width: 100%;
  height: 35px;
  color: #134be4e2;
  cursor: pointer;
`;
