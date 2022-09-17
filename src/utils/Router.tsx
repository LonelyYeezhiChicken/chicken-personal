import { Navigate, Route, Routes } from "react-router-dom";
import { Main } from "../components/layouts";
import { Home, Continue, Portfolio } from "../pages";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        {/* 主頁 */}
        <Route index element={<Home />} />
      </Route>
      <Route path="/portfolio" element={<Main />}>
        {/* 作品集 */}
        <Route index element={<Portfolio />} />
      </Route>
      <Route path="/continue" element={<Main />}>
        {/* 建設中 */}
        <Route index element={<Continue />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
