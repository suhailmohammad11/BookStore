import { useState } from "react";
import Books from "../../components/Books/Books";
import NewBook from "../../components/NewBook/NewBook";
import "./HomeStyles.css";
import { useAuthContext } from "../../Hooks/useAuthContext";
const Home = () => {
  const [toggleAdd, setToggleAdd] = useState(false);
  const { user } = useAuthContext();
  return (
    <div className="home">
      <div className="wallpaper">
        <img src="wallpaper1.jpg" alt="wallpaper" />
      </div>
      <div className="book-data">
        <Books />
        {user?.type === "admin" && (
          <div className="add-data">
            <button
              id="add-book-btn"
              onClick={() => setToggleAdd((prev) => !prev)}
            >
              {toggleAdd ? "Close Form" : "Add Book"}
            </button>

            {toggleAdd && <NewBook />}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
