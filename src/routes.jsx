import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaltPage from "./Pages/DefaltPage";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaltPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
