import { createContext, useState } from "react";
import { useAuthContext } from "../Hooks/useAuthContext";
import axios from "axios";

export const cartData = createContext();

export const CartContextProvider = ({ children }) => {
  const { user } = useAuthContext();
  const [cartItems, setCartItems] = useState([]);

  // add to cart
  const addToCart = async (book) => {
    if (!user?.token) return;
    try {
      const response = await axios.post(
        "https://bookstore-backend-tpqs.onrender.com/api/cart/add",
        { bookId: book._id },
        { headers: { Authorization: `Bearer ${user.token}` } }
      );

      // update cartItems with the latest items array
      setCartItems(response.data.items || []);
    } catch (err) {
      console.log("Error adding to cart", err);
    }
  };

  // get cart
  const getCart = async () => {
    if (!user?.token) return;
    try {
      const response = await axios.get("https://bookstore-backend-tpqs.onrender.com/api/cart/", {
        headers: { Authorization: `Bearer ${user.token}` },
      });

      // set only the items array
      setCartItems(response.data.items || []);
    } catch (err) {
      console.log("Error displaying cart", err);
    }
  };

  const removeFromCart= async(bookId)=>{
      if (!user?.token) return;
    try{

      const response= await axios.delete(`https://bookstore-backend-tpqs.onrender.com/api/cart/${bookId}`,{
        headers:{
          Authorization:`Bearer ${user.token}`
        }
      })
        setCartItems(response.data.items || []);
    }catch(err){
      console.log("Error deleting the cart", err)
    }

  }
  return (
    <cartData.Provider value={{ getCart, cartItems, addToCart , removeFromCart}}>
      {children}
    </cartData.Provider>
  );
};
