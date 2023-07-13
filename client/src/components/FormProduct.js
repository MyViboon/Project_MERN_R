import React, { useEffect, useState } from "react";
import { create, getData, remove } from "../functions/product";
import { Link } from "react-router-dom";

const FormProduct = () => {
  const [data, setData] = useState([]);
  const [form, setForm] = useState({});

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    getData()
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };

  const handleChang = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    create(form)
      .then((res) => {
        console.log(res.data);
        loadData();
      })
      .catch((err) => console.log(err));
  };

  const handleRemove = async (id) => {
    remove(id)
      .then((res) => {
        console.log(res.data);
        loadData();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      FormProduct
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="name"
          onChange={(e) => handleChang(e)}
        ></input>{" "}
        <br />
        <input
          type="text"
          name="detail"
          placeholder="detail"
          onChange={(e) => handleChang(e)}
        ></input>
        <br />
        <input
          type="text"
          name="price"
          placeholder="price"
          onChange={(e) => handleChang(e)}
        ></input>{" "}
        <br />
        <button>Submit</button>
      </form>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">name</th>
            <th scope="col">detail</th>
            <th scope="col">price</th>
            <th scope="col">action</th>
            <th scope="col">edit</th>
          </tr>
        </thead>
        <tbody>
          {data
            ? data.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.detail}</td>
                  <td>{item.price}</td>
                  <td onClick={(e) => handleRemove(item._id)}>delete</td>
                  <td>
                    <Link to={`/edit/${item._id}`}>edit</Link>
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default FormProduct;
