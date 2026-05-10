import { createContext, useContext, useState } from "react";
import useProduct from "../hooks/UseProduct";

export const ProdContext = createContext();

export const ProductContext = ({ children }) => {
  const initialValue = {
    image: "",
    title: "",
    desc: "",
    price: "",
    orgPrice: "",
    discount: "",
  };

  const [form, setForm] = useState(initialValue);

  const { data, postData, updateData, deleteData } = useProduct(
    "http://localhost:5000/products",
  );

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await postData(form);

    setForm(initialValue);
  };

  return (
    <ProdContext.Provider
      value={{
        form,
        data,
        postData,
        updateData,
        deleteData,
        handleChange,
        handleSubmit,
      }}
    >
      {children}
    </ProdContext.Provider>
  );
};

export const MyProduct = () => useContext(ProdContext);
