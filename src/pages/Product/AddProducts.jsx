import { useState } from "react";

const AddProducts = () => {
  const [formData, setFormData] = useState({
    image: "",
    name: "",
    desc: "",
    org: "",
    price: "",
    discount: "",
  });

  const [preview, setPreview] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = await fetch("http://localhost:5000/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    setFormData({
      image: "",
      name: "",
      desc: "",
      org: "",
      price: "",
      discount: "",
    });

    if (product.ok) {
      alert("Product Added Successfully!!!");
    } else {
      alert("Product Added Failed");
    }
  };

  const handleImage = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = (e) => {
      setPreview(reader.result);

      setFormData((prev) => ({ ...prev, preview: reader.result }));
    };
  };

  return (
    <div className="h-screen flex flex-col gap-2 items-center justify-center">
      <h1 className="text-2xl">Add Products</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 w-1/2 p-5 shadow-sm shadow-black rounded-md"
      >
        <div className="flex items-end justify-between flex-row-reverse">
          <input
            className="py-3 px-2 shadow-sm shadow-gray-300 rounded-md "
            type="file"
            onChange={handleImage}
          />
          {formData.preview ? (
            <img
              src={formData.preview}
              alt="preview"
              className="h-40 w-40 rounded-md border-2 border-gray-300 flex items-center justify-center"
            />
          ) : (
            <p className="h-40 w-40 rounded-md border-2 border-gray-300 flex items-center justify-center text-xl text-gray-500">
              No Image
            </p>
          )}
        </div>
        <input
          className="py-3 px-2 shadow-sm shadow-black rounded-md "
          type="text"
          placeholder="Product Name"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <input
          className="py-3 px-2 shadow-sm shadow-black rounded-md "
          type="text"
          placeholder="Product Desc"
          onChange={(e) => setFormData({ ...formData, desc: e.target.value })}
          required
        />
        <input
          className="py-3 px-2 shadow-sm shadow-black rounded-md "
          type="text"
          placeholder="Product Original Price"
          onChange={(e) => setFormData({ ...formData, org: e.target.value })}
          required
        />
        <input
          className="py-3 px-2 shadow-sm shadow-black rounded-md "
          type="text"
          placeholder="Product Price"
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
          required
        />
        <input
          className="py-3 px-2 shadow-sm shadow-black rounded-md "
          type="text"
          placeholder="Product Discount"
          onChange={(e) =>
            setFormData({ ...formData, discount: e.target.value })
          }
          required
        />
        <button
          className="bg-cyan-500 w-52 m-auto py-3 text-xl rounded-md shadow-lg hover:translate-y-1 shadow-black hover:bg-cyan-400 hover:text-white"
          type="submit"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProducts;
