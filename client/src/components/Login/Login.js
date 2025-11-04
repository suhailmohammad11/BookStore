import { useState } from "react";
import "./LoginStyles.css";
import { useLogin } from "../../Hooks/useLogin";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("customer");
  const [errors, setErrors] = useState({});

  const { login } = useLogin();

  const validations = () => {
    let tempErrors = {};
    let isValid = true;
    // Email Validation
    if (!email) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      tempErrors.email = "Invalid format";
      isValid = false;
    }

    //password validation

    if (!password) {
      tempErrors.password = "Password is required!!";
      isValid = false;
    } else if (password.length < 7) {
      tempErrors.password = "Minimum length of password is 8";
      isValid=false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    if(!validations()){
      return ;
    }

    const result = await login(email, password, type);
    if (result) {
      alert("Logged in Successfully");
      setEmail("");
      setPassword("");
    } else {
      alert("Error Logged in...!!");
      return;
    }
  };

  return (
    <>
      <div className="login">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Login Form</h2>
          <div className="form-elements">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            { errors.email && <p style={{color:"red"}}>{errors.email}</p>}
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            { errors.password && <p style={{color:"red"}}>{errors.password}</p>}

            <label>Type</label>
            <select value={type} onChange={(e) => setType(e.target.value)}>
              <option value="customer">Customer</option>
              <option value="admin">Admin</option>
            </select>
            <div className="btns">
              <button id="login-submit"> Submit</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
