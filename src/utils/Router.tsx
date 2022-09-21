import { Navigate, Route, Routes } from "react-router-dom";
import { Main } from "../components/layouts";
import { Home, Continue, Portfolio, P5JsPage, PhaserJs } from "../pages";
import { LinkMap } from "../models";

export function Router() {
  return (
    <Routes>
      <Route path={LinkMap.Home.toString()} element={<Main />}>
        {/* 主頁 */}
        <Route index element={<Home />} />
      </Route>
      <Route path={LinkMap.Portfolio.toString()} element={<Main />}>
        {/* 作品集 */}
        <Route index element={<Portfolio />} />
      </Route>
      <Route path={LinkMap.P5Js.toString()} element={<Main />}>
        {/* P5 Js */}
        <Route index element={<P5JsPage />} />
      </Route>
      <Route path={LinkMap.PhaserJs.toString()} element={<Main />}>
        {/* P5 Js */}
        <Route index element={<PhaserJs />} />
      </Route>
      <Route path={LinkMap.Continue.toString()} element={<Main />}>
        {/* 建設中 */}
        <Route index element={<Continue />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
