import axios from "axios";
import { createContext, useContext } from "react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const MyContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
    const store = localStorage.getItem("user");

    if (store) {
      try {
        setUser(JSON.parse(store));
      } catch (err) {
        console.log("Invalid user in localStorage, removing...");
        localStorage.removeItem("user");
        setUser(null);
      }
    }
  }, []);

  // Login
  const login = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://e-commerce-backend-5q60.onrender.com/api/v1/user/login",
        {
          email,
          password,
        },
      );

      const userData = res.data;
      console.log("data", userData);

      localStorage.setItem("user", JSON.stringify(userData));

      setUser(userData);

      navigate("/");
    } catch (error) {
      console.log(error);

      alert(error.response?.data?.message || "Login failed");
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

    try {
      const response = await axios.post(
        "https://e-commerce-backend-5q60.onrender.com/api/v1/user/register",
        formData,
      );

      const data = response.data;

      console.log("user added", data);
      alert("Registration is Successfully");

      setFormData({ name: "", email: "", password: "" });

      navigate("/login");
    } catch (error) {
      console.log(error);
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
        email,
        setEmail,
        password,
        setPassword,
        login,
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

export const MyAuth = () => useContext(MyContext);
