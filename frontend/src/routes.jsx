import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaltPage from "./Pages/DefaltPage";
import Home from "./Pages/Home";
import AllProducts from "./components/AllProducts";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaltPage />}>
          <Route index element={<Home />}></Route>
          <Route path="allproducts" element={<AllProducts />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
