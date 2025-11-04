import { useContext, useEffect } from "react";
import { useAuthContext } from "../../Hooks/useAuthContext";
import { cartData } from "../../context/cartContext";
import "./CartStyles.css"

const Cart = () => {
  const { user } = useAuthContext();
  const { getCart, cartItems, removeFromCart } = useContext(cartData);

  useEffect(() => {
    if(!user) return;
    if (user.type==="customer") {
      getCart();
    }
    else{
     console.log("No cart for Admin")
    }
  }, [user, getCart]);

    if (!user) {
    return <h1>Loading...</h1>;  
  }

  if (user.type !== "customer") {
    return <h1 style={{textAlign:"center"}}>You are an admin, You do not have a cart..!!!</h1>;
  }

  return (
    <>
    <h1 id="cart-h1">Your cart</h1>
      <div className="cart">
        
        {cartItems &&
          cartItems.map((item) => (

            <div className="cart-item" key={item._id}>
              
              <h2>{item.bookId.title}</h2>
              <h4>{item.bookId.author}</h4>
              <h4>{item.bookId.price}</h4>
              <h6>{item.bookId.desc}</h6>
              <div className="cart-btns">
               
                <button id="cart-del" onClick={()=>removeFromCart(item.bookId._id)}>delete</button>
                <button id="cart-buy" onClick={()=>alert("Order placed...!! Thank you for Shopping with BookStore..!")}>Buy now</button>
                </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Cart;
