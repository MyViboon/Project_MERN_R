import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { read, update } from "../functions/product";

const FormEditProduct = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    detail: "",
    price: "",
  });

  useEffect(() => {
    loadData(params.id);
  }, []);

  const loadData = async (id) => {
    read(id).then((res) => {
      setData(res.data);
    });
  };

  const handleChang = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    update(params.id, data)
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      FormEditProduct
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={data.name}
          onChange={(e) => handleChang(e)}
        ></input>{" "}
        <br />
        <input
          type="text"
          name="detail"
          placeholder="detail"
          onChange={(e) => handleChang(e)}
          value={data.detail}
        ></input>
        <br />
        <input
          type="text"
          name="price"
          placeholder="price"
          onChange={(e) => handleChang(e)}
          value={data.price}
        ></input>{" "}
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default FormEditProduct;
