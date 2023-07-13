import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../store/userSlide";

const TestRedux2 = () => {
  const distatch = useDispatch();
  return (
    <div>
      TestRedux2
      <button onClick={() => distatch(login())}>Hello Reduce</button>
      <button onClick={() => distatch(logout())}>Hello Reduce</button>
    </div>
  );
};

export default TestRedux2;
