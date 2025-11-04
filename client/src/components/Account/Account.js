import { useLogout } from "../../Hooks/useLogout";
import "./AccountStyles.css";

const Account = () => {
  const { logout } = useLogout();
  const storedUser = localStorage.getItem("user");
  const currentUser = storedUser ? JSON.parse(storedUser) : null;

  const handleLogout = () => {
    logout();
  };
  return (
    <div className="active-user">
      {currentUser ? (
        <div className="user-panel">
          <div className="user">
            <div className="user-content">
              <h2>Name: {currentUser.name}</h2>
              <h2>Email: {currentUser.email}</h2>
              <h4>Type: {currentUser.type}</h4>
            </div>
            <div id="status">
              <img src="greenDot.png" alt="online icon" />
            </div>
          </div>
          <div className="b">
            <button id="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      ) : (
        <p>No active user</p>
      )}
    </div>
  );
};

export default Account;
