import { createContext, useCallback, useState } from "react";

import axios from "axios";
import { useAuthContext } from "../Hooks/useAuthContext";

export const Data = createContext();

export const BookContextProvider = ({ children }) => {
  const { user } = useAuthContext();
  const [books, setBooks] = useState([]);

  //get Books
const getBooks = useCallback(async () => {
  if (!user?.token) return; // make sure token exists

  try {
    const response = await axios.get("http://localhost:4000/api/books", {
      headers: {
        Authorization: `Bearer ${user.token}`,   
      },
    });
    setBooks(response.data);
  } catch (err) {
    console.log("Error fetching books", err);
  }
}, [user]);
  const removeBook = async (_id) => {
    try {
      await axios.delete(`http://localhost:4000/api/books/${_id}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      getBooks();
    } catch (err) {
      console.log("Error deleting book", err);
    }
  };
  const [form, setForm] = useState({
    title: "",
    author:"",
    price:"",
    desc: "",
  });

  // creata new book
  const addBook = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/books",
        form,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      setBooks([...books, response.data]);
      setForm({
        title: "",
        author:"",
        price: "",
        desc: "",
      });
    } catch (err) {
      console.log("Error creating Book ", err);
    }
  };

  const [updateForm, setUpdateForm] = useState({
    _id: null,
    title: "",
    author:"",
    price: "",
    desc: "",
  });

  const toggleUpdate = (item) => {
    setUpdateForm({
      _id: item._id,
      title: item.title,
      author:item.author,
      price: item.price,
      desc: item.desc,
    });
  };

  //edit book
const editBook = async (e) => {
  e.preventDefault(); // Prevent page reload

  try {
    const { _id, title, author, price, desc } = updateForm;
    await axios.patch(
      `http://localhost:4000/api/books/${_id}`,
      { title, author, price, desc },
      {
        headers: { Authorization: `Bearer ${user.token}` },
      }
    );
    getBooks(); 
    setUpdateForm({ _id: null, title: "", author:"", price: "", desc: "" });
  } catch (err) {
    console.log("Error updating data", err);
  }
};

  return (
    <Data.Provider
      value={{
        books,
        form,
        setForm,
        updateForm,
        setUpdateForm,
        setBooks,
        getBooks,
        removeBook,
        editBook,
        addBook,
        toggleUpdate,
      }}
    >
      {children}
    </Data.Provider>
  );
};
