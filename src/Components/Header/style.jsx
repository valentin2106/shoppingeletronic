import styled from "styled-components";
import IconSearch from "../Header/Icons/search.svg";
import IconCart from "../Header/Icons/cart.svg";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  h1 {
    font-size: 1rem;
    width: 85px;
    color: #6d8ee9e3;
    cursor: pointer;
    :hover {
      color: #134be4e2;
    }
  }
  .icons{
      align-items:center;
  }
`;
export const Logo = styled.img`
  width: 100px;
  height: 100px;
`;
export const Search = styled.input`
  width: 700px;
  height: 40px;
  background: no-repeat url(${IconSearch});
  background-position: right center;
  background-size: 25px;
  border-radius: 10px 10px 10px 10px;
  border-color: #f2cfb2;
`;
export const ButtonCart = styled.button`
  display:flex;
  background: no-repeat url(${IconCart});
  background-position: left center;
  background-size: 25px;
  border-radius: 10px 10px 10px 10px;
  align-items:center;
  justify-content:end;
  width: 50px;
  height:30px;
  cursor:pointer;
  
`
