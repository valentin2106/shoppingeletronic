import React from "react";
import { useCart } from "../CartContext/CartContext";
import { Container, Table } from "./style";

const Cart = () => {
  const cart = useCart();

  const removerItem = id => () =>{
      return(
        cart.removeCart(id)

      )
  }
  const changeQuantity = (id) => (e) =>{
      cart.changeQuantity(id, e.target.value)
  }
  return (
    <Container>
      <Table>
          <thead>
          <tr>
          <th>Produto</th>
          <th>Quantidade</th>
          <th>Preço</th>
          <th>Subtotal</th>
        </tr>
          </thead>
        
        {Object.keys(cart.cart).map((key) => {
          const { product, quantity } = cart.cart[key];

          return (
<tbody>
<tr>
    <td> {product.name}</td>
    <td>
    <input type="number" defaultValue={quantity} onClick={changeQuantity(key)}/>
    </td>
    <td>R$ {product.price}</td>
    <td>R$ {product.price * quantity}</td>
    <td> <button onClick={removerItem(key)}>Remover item</button></td>
</tr>
</tbody>
          );
        })}
      </Table>
      <div>
      <button>Fechar Pedido</button>
      </div>
    </Container>
    
  );
};
export default Cart;
