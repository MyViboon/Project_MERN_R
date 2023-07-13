import "./App.css";
import FormEditProduct from "./components/FormEditProduct";
import FormProduct from "./components/FormProduct";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <>
        <h1>FROM CRUD</h1>

        <Routes>
          <Route path="/" element={<FormProduct />} />
          <Route path="/edit/:id" element={<FormEditProduct />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
