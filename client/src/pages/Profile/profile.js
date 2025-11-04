import Login from "../../components/Login/Login";
import SignUp from "../../components/SignUp/SignUp";
import Account from "../../components/Account/Account";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./ProfileStyles.css";
const Profile = () => {
  const [showLogin, setShowLogin] = useState(true);
  const { user } = useContext(AuthContext);

  return (
    <div className="profile">
      {user ? (
        <Account />
      ) : (
        <>
          <div className="auth-toggle-btns">
            {!showLogin && (
              <div className="auth-section">
                <h3>Already a user?</h3>
                <button onClick={() => setShowLogin(true)}>Login</button>
              </div>
            )}

            {showLogin && (
              <div className="auth-section">
                <h3>New to BookStore?</h3>
                <button onClick={() => setShowLogin(false)}>Signup</button>
              </div>
            )}
          </div>
          {showLogin ? <Login /> : <SignUp />}
        </>
      )}
    </div>
  );
};

export default Profile;
