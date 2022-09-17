import { Navigate, Route, Routes } from "react-router-dom";
import { Main } from "../components/layouts";
import { Home, Continue } from "../pages";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        {/* 主頁 */}
        <Route index element={<Home />} />
      </Route>
      <Route path="/continue" element={<Main />}>
        {/* 建設中 */}
        <Route index element={<Continue />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
