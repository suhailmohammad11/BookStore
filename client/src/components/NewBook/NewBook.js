import { useContext } from "react";
import { Data } from "../../context/bookContext";
import "./NewBookStyles.css";

const NewBook = () => {
  const { form, setForm, updateForm, setUpdateForm, addBook, editBook } =
    useContext(Data);
  const addField = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleUpdateField = (e) => {
    const { name, value } = e.target;
    setUpdateForm({
      ...updateForm,
      [name]: value,
    });
  };
  return (
    <div>
      {!updateForm._id && (
        <form className="book-form" onSubmit={addBook}>
          <h1> Add New Book </h1>
          <div className="form-data">
            <label>Title</label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={addField}
            />
            <label>Author</label>
            <input
              type="text"
              name="author"
              value={form.author}
              onChange={addField}
            />
            <label>Price</label>
            <input
              type="number"
              name="price"
              value={form.price}
              onChange={addField}
            />

            <label>Desc</label>
            <input
              type="text"
              name="desc"
              value={form.desc}
              onChange={addField}
            />

            <button id="submit-btn">submit</button>
          </div>
        </form>
      )}

      {updateForm._id && (
        <form className="book-form">
          <h1> Edit Book</h1>
          <div className="form-data">
            <label>Title</label>
            <input
              type="text"
              name="title"
              value={updateForm.title}
              onChange={handleUpdateField}
            />
            <label>Author</label>
            <input
              type="text"
              name="author"
              value={updateForm.author}
              onChange={handleUpdateField}
            />

            <label>Price</label>
            <input
              type="number"
              name="price"
              value={updateForm.price}
              onChange={handleUpdateField}
            />

            <label>Desc</label>
            <input
              type="text"
              name="desc"
              value={updateForm.desc}
              onChange={handleUpdateField}
            />

            <button id="update-btn" onClick={(e) => editBook(e)}>
              update{" "}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
export default NewBook;
