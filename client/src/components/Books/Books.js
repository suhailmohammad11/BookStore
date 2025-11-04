import { useContext, useEffect } from "react";
import { Data } from "../../context/bookContext";
import { useAuthContext } from "../../Hooks/useAuthContext";
import "./BookStyles.css";
import { cartData } from "../../context/cartContext";

const Books = () => {
  const { user } = useAuthContext();
  const { books, getBooks, removeBook, toggleUpdate } = useContext(Data);

  const { addToCart } = useContext(cartData);

  useEffect(() => {
    if (user) {
      getBooks();
    }
  }, [user, getBooks]);
  return (
    <>
      <div className="books">
        {books &&
          books.map((item) => {
            return (
              <div className="book" key={item._id}>
                <img id="cover" src="cover3.jpg" alt="image" />
                <h3> {item.title}</h3>
                <h5> Author: {item.author}</h5>
                <h5>Price: Rs.{item.price}</h5>
                <h6>{item.desc}</h6>
                <div className="book-btns">
                  {user.type === "admin" && (
                    <div className="btn">
                      <button id="edit" onClick={() => toggleUpdate(item)}>
                        edit
                      </button>
                      <button id="delete" onClick={() => removeBook(item._id)}>
                        delete
                      </button>
                    </div>
                  )}
                  {user.type === "customer" && (
                    <div className="cart-icon">
                      <img
                        src="cart.jpg"
                        id="cart-icon"
                        onClick={() => {
                          addToCart(item) && alert("added to cart");
                        }}
                      />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Books;
