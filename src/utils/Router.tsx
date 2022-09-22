import { Navigate, Route, Routes } from "react-router-dom";
import { Main } from "../components/layouts";
import { LinkMap } from "../models";
import {
  Home,
  Continue,
  Portfolio,
  P5JsPage,
  RpgGameV1,
  LineAndLoop,
  MapFunc,
  Gradient,
  Wave,
  MethodArc,
} from "../pages";

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
      <Route path={LinkMap.LineAndLoop.toString()} element={<Main />}>
        {/* P5 Js */}
        <Route index element={<LineAndLoop />} />
      </Route>
      <Route path={LinkMap.MapFunc.toString()} element={<Main />}>
        {/* P5 Js */}
        <Route index element={<MapFunc />} />
      </Route>
      <Route path={LinkMap.Gradient.toString()} element={<Main />}>
        {/* P5 Js */}
        <Route index element={<Gradient />} />
      </Route>
      <Route path={LinkMap.Wave.toString()} element={<Main />}>
        {/* P5 Js */}
        <Route index element={<Wave />} />
      </Route>
      <Route path={LinkMap.MethodArc.toString()} element={<Main />}>
        {/* P5 Js */}
        <Route index element={<MethodArc />} />
      </Route>
      <Route path={LinkMap.RpgGameV1.toString()} element={<Main />}>
        {/* RpgGameV1 */}
        <Route index element={<RpgGameV1 />} />
      </Route>
      <Route path={LinkMap.Continue.toString()} element={<Main />}>
        {/* 建設中 */}
        <Route index element={<Continue />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
