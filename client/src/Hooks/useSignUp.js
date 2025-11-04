import { useState } from "react";
import { useAuthContext } from "./useAuthContext"

export const useSignUp =()=>{
     const [error, setError] = useState(null);
     const { dispatch } = useAuthContext();
   
     const signup = async (name, email, password, type) => {
       try {
         const response = await fetch("http://localhost:4000/api/users/signup", {
           method: "POST",
           headers: { "content-type": "application/json" },
           body: JSON.stringify({ name, email, password,type }),
         });
         const data = await response.json();
   
         if (!response.ok) {
           setError(data.error);
           return false;
         } else if (response.ok) {
          //  localStorage.setItem("user", JSON.stringify(data));
   
          //  dispatch({ type: "LOGIN", payload: data });
           return true;
         }
       } catch (err) {
         setError(err.message);
         return false;
       }
     };
     return {signup, error};
}