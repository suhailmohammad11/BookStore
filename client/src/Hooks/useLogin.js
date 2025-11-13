import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  const login = async (email, password, type) => {
    try {
      const response = await fetch("https://bookstore-backend-tpqs.onrender.com/api/users/login", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email, password , type}),
      });
      const data = await response.json();

      if (!response.ok) {
        setError(data.error);
        return false;
      } else if (response.ok) {
        localStorage.setItem("user", JSON.stringify(data));

        dispatch({ type: "LOGIN", payload: data });
        return true;
      }
    } catch (err) {
      setError(err.message);
      return false;
    }
  };
  return {login, error};
};
