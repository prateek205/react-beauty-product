// import { useState } from "react";
// import { MyProduct } from "../../context/ProductContext";

// const AddProducts = () => {
//   const { form, handleChange, handleSubmit } = MyProduct();

//   return (
//     <div className="h-screen flex flex-col gap-2 items-center justify-center">
//       <h1 className="text-2xl">Add Products</h1>
//       <form
//         onSubmit={handleSubmit}
//         className="flex flex-col gap-5 w-1/2 p-5 shadow-sm shadow-black rounded-md"
//       >
//         <input
//           className="py-3 px-2 shadow-sm shadow-black rounded-md "
//           type="text"
//           placeholder="Img URL"
//           name="image"
//           value={form.image}
//           onChange={handleChange}
//           required
//         />
//         <input
//           className="py-3 px-2 shadow-sm shadow-black rounded-md "
//           type="text"
//           placeholder="Product Name"
//           name="title"
//           value={form.title}
//           onChange={handleChange}
//           required
//         />
//         <input
//           className="py-3 px-2 shadow-sm shadow-black rounded-md "
//           type="text"
//           placeholder="Product Desc"
//           name="desc"
//           value={form.desc}
//           onChange={handleChange}
//           required
//         />
//         <input
//           className="py-3 px-2 shadow-sm shadow-black rounded-md "
//           type="text"
//           placeholder="Product Original Price"
//           name="orgPrice"
//           value={form.orgPrice}
//           onChange={handleChange}
//           required
//         />
//         <input
//           className="py-3 px-2 shadow-sm shadow-black rounded-md "
//           type="text"
//           placeholder="Product Price"
//           name="price"
//           value={form.price}
//           onChange={handleChange}
//           required
//         />
//         <input
//           className="py-3 px-2 shadow-sm shadow-black rounded-md "
//           type="text"
//           placeholder="Product Discount"
//           name="discount"
//           value={form.discount}
//           onChange={handleChange}
//           required
//         />
//         <button
//           className="bg-cyan-500 w-52 m-auto py-3 text-xl rounded-md shadow-lg hover:translate-y-1 shadow-black hover:bg-cyan-400 hover:text-white"
//           type="submit"
//         >
//           Add Product
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddProducts;
