import { createContext, useContext } from "react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const MyContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [errors, setErrors] = useState({});
  const [showPass, setShowPass] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const store = JSON.parse(localStorage.getItem("user"));

    if (store) {
      setUser(store);
    }
  }, []);

  // Login
  const login = async (e) => {
    e.preventDefault();

    const res = await fetch(
      `http://localhost:5000/users?email=${email}&password=${pass}`,
    );
    const users = await res.json();

    if (users.length > 0) {
      localStorage.setItem("user", JSON.stringify(users[0]));
      setUser(users[0]);
      navigate("/my_profile");
    } else {
      alert("User not found!");
    }
  };

  // register

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is Required";
    }

    if (!formData.email) {
      newErrors.email = "Email is Required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "invalid Email Id";
    }

    if (!formData.password) {
      newErrors.password = "Password is Required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be atleast 8 characters";
    }

    return newErrors;
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    setTimeout(() => {
      setErrors({});
    }, 2000);

    const response = await fetch("http://localhost:5000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    console.log("user added", data);

    if (response.ok) {
      alert("Registration is Successfully");
      navigate("/login");
    } else {
      alert("Register failed!!");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  return (
    <MyContext.Provider
      value={{
        handleLogout,
        handleRegister,
        formData,
        setFormData,
        errors,
        setErrors,
        login,
        email,
        setEmail,
        pass,
        setPass,
        showPass,
        setShowPass,
        user,
        setUser,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export const MyAuth = ()=>useContext(MyContext);
