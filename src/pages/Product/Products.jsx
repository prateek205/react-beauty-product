import React from "react";
import FilterSidebar from "../../components/FilterSidebar";
import SortingNavbar from "../../components/SortingNavbar";
import AllProducts from "../../components/AllProducts";
const Products = () => {
  return (
    <section className="relative h-screen flex w-full gap-5 overflow-hidden bg-black">
      <div className="absolute top-0 left-0 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl"></div>

      <div>
        <FilterSidebar />
      </div>
      <div className="flex flex-col gap-2">
        <div>
          <SortingNavbar />
        </div>
        <div>
          <AllProducts />
        </div>
      </div>
    </section>
  );
};

export default Products;
