import React, { useState } from "react";
import "./SignUpStyles.css";
import { useSignUp } from "../../Hooks/useSignUp";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [type, setType] = useState("");
  const { signup, error } = useSignUp();
  const [errors, setErrors] = useState({});

  const validations = () => {
    let tempErrors = {};
    let isValid = true;

    //name validation
    if (!name) {
      tempErrors.name = "Name is required!!";
      isValid = false;
    }
    if (/[0-9]/.test(name)) {
      tempErrors.name = "Name should not have numbers";
      isValid = false;
    }

    //email validation
    if (!email) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      tempErrors.email = "Invalid format";
      isValid = false;
    }

    //password
    if (!password) {
      tempErrors.password = "Password is required!!";
      isValid = false;
    } else if (password.length < 7) {
      tempErrors.password = "Minimum length of password is 8";
      isValid = false;
    } else if (!/[A-Z]/.test(password)) {
      tempErrors.password("Password should contain atleast one Capital Letter");
      isValid = false;
    } else if (!/[0-9]/.test(password)) {
      tempErrors.password("Password should contain atleast one number");
      isValid = false;
    } else if (!/[@#!&%*+]/.test(password)) {
      tempErrors.password(
        "Password should contain atleast one Special character"
      );
      isValid = false;
    }

    //confirm password
    if (password !== confirmPassword) {
      tempErrors.confirmPassword = "Passwords donot match";
      isValid = false;
    }
    setErrors(tempErrors);
    return isValid;
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!validations()) {
      return;
    }
    await signup(name, email, password, type);

    if (!error) {
      alert("Signup Successfull");
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setType("");
    } else {
      alert("Failed to signup..!!");
    }
  };

  return (
    <>
      <div className="signup">
        <form className="signup-form" onSubmit={handleSignUp}>
          <h2>Sign Up Form</h2>
          <div className="form-elements">
            <label>Name</label>
            <input
              type="userName"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            { errors.name && <p style={{color:"red"}}>{errors.name}</p>}
            <label>Email</label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            { errors.email && <p style={{color:"red"}}>{errors.email}</p>}

            <label>Password</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            { errors.password && <p style={{color:"red"}}>{errors.password}</p>}

            <label>Confirm Password</label>
            <input
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
            />
            { errors.confirmPassword && <p style={{color:"red"}}>{errors.confirmPassword}</p>}

            <label>Type</label>
            <select onChange={(e) => setType(e.target.value)} value={type}>
              <option value="" disabled>
                Select the type
              </option>
              <option value="customer">Customer</option>
              <option value="admin">Admin</option>
            </select>
            <button type="submit" id="signup-btn">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
