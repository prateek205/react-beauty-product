import axios from "axios";
import { useEffect, useState } from "react";

const useProduct = (url) => {
  const [data, setData] = useState([]);

  //   GET DATA
  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      const data = response.data;

      setData(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  //   POST DATA

  const postData = async (newData) => {
    try {
      const res = await axios.post(url, newData);

      setData((prev) => [...prev, res.data]);

      console.log("Post Data:", res.data);
    } catch (error) {
      console.log(error);
    }
  };

  //   UPDATE DATA

  const updateData = async (id, updatedData) => {
    try {
      const res = await axios.put(`${url}/${id}`, updatedData);

      setData((prev) => prev.map((item) => (item.id === id ? res.data : item)));
      console.log("update Data:", res.data);
    } catch (error) {
      console.log(error);
    }
  };

  //   DELETE DATA

  const deleteData = async (id) => {
    try {
      await axios.delete(`${url}/${id}`);

      setData((prev) => prev.filter((item) => item.id !== id));

      console.log("delete data:", id);
    } catch (error) {
      console.log(error);
    }
  };

  return { data, fetchData, postData, updateData, deleteData };
};

export default useProduct;
