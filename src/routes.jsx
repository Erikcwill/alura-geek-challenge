import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaltPage from "./Pages/DefaltPage";
import Home from "./Pages/Home";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaltPage />}>
          <Route index element={<Home />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
