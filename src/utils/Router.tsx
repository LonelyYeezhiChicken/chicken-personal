import { Navigate, Route, Routes } from "react-router-dom";
import { Main } from "../components/layouts";
import { LinkMap } from "../models";
import {
  Home,
  Continue,
  Portfolio,
  P5JsPage,
  RpgGameV1,
  About,
  LineAndLoop,
  MapFunc,
  Gradient,
  Wave,
  MethodArc,
  IronMan13,
  Day1,
  Day2,
  Day3,
  Day4,
  Day5,
  Day6,
  Day7,
  Day8,
  Day9,
  Day10,
  Day11,
  Day12,
  Day13,
  Day14,
  Day15,
  Day16,
  Day17,
  Day18,
  Day19,
  Day20,
  Day21,
  Day22,
  Day23,
  Day24,
  Day25,
  Day26,
  Day27,
  Day28,
  Day29,
  Day30,
  Day31,
  CsharpEventHome,
  CsDelegate1,
  CsDelegate2,
  CsDelegate3,
  CsDelegate4,
  CsDelegate5,
  CsDelegate6,
  CsDelegate7,
  OAuthNote,
  OAuthNote1,
  UnitNote,
  UnitNote1,
  DesignPattern,
  DPOverview1,
  DPOverview2,
  DPOverview3,
  DPOopOverview,
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
      <Route path={LinkMap.About.toString()} element={<Main />}>
        {/* 作品集 */}
        <Route index element={<About />} />
      </Route>
      {/*------------- P5 Js --------------*/}
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
      {/*------------- P5 Js --------------*/}
      {/*------------- RpgGameV1 --------------*/}
      <Route path={LinkMap.RpgGameV1.toString()} element={<Main />}>
        {/* RpgGameV1 */}
        <Route index element={<RpgGameV1 />} />
      </Route>
      {/*------------- RpgGameV1 --------------*/}
      {/*------------- 鐵人賽13 --------------*/}
      <Route path={LinkMap.IronMan13.toString()} element={<Main />}>
        {/* 鐵人賽13 */}
        <Route index element={<IronMan13 />} />
      </Route>

      <Route path={LinkMap.D1no13.toString()} element={<Main />}>
        {/* 鐵人賽13 */}
        <Route index element={<Day1 />} />
      </Route>
      <Route path={LinkMap.D1no13.toString()} element={<Main />}>
        {/* 鐵人賽13 */}
        <Route index element={<Day1 />} />
      </Route>
      <Route path={LinkMap.D2no13.toString()} element={<Main />}>
        {/* 鐵人賽13 */}
        <Route index element={<Day2 />} />
      </Route>
      <Route path={LinkMap.D3no13.toString()} element={<Main />}>
        {/* 鐵人賽13 */}
        <Route index element={<Day3 />} />
      </Route>
      <Route path={LinkMap.D4no13.toString()} element={<Main />}>
        {/* 鐵人賽13 */}
        <Route index element={<Day4 />} />
      </Route>
      <Route path={LinkMap.D5no13.toString()} element={<Main />}>
        {/* 鐵人賽13 */}
        <Route index element={<Day5 />} />
      </Route>
      <Route path={LinkMap.D6no13.toString()} element={<Main />}>
        {/* 鐵人賽13 */}
        <Route index element={<Day6 />} />
      </Route>
      <Route path={LinkMap.D7no13.toString()} element={<Main />}>
        {/* 鐵人賽13 */}
        <Route index element={<Day7 />} />
      </Route>
      <Route path={LinkMap.D8no13.toString()} element={<Main />}>
        {/* 鐵人賽13 */}
        <Route index element={<Day8 />} />
      </Route>
      <Route path={LinkMap.D9no13.toString()} element={<Main />}>
        {/* 鐵人賽13 */}
        <Route index element={<Day9 />} />
      </Route>
      <Route path={LinkMap.D10no13.toString()} element={<Main />}>
        {/* 鐵人賽13 */}
        <Route index element={<Day10 />} />
      </Route>
      <Route path={LinkMap.D11no13.toString()} element={<Main />}>
        {/* 鐵人賽13 */}
        <Route index element={<Day11 />} />
      </Route>
      <Route path={LinkMap.D12no13.toString()} element={<Main />}>
        {/* 鐵人賽13 */}
        <Route index element={<Day12 />} />
      </Route>
      <Route path={LinkMap.D13no13.toString()} element={<Main />}>
        {/* 鐵人賽13 */}
        <Route index element={<Day13 />} />
      </Route>
      <Route path={LinkMap.D14no13.toString()} element={<Main />}>
        {/* 鐵人賽13 */}
        <Route index element={<Day14 />} />
      </Route>
      <Route path={LinkMap.D15no13.toString()} element={<Main />}>
        {/* 鐵人賽13 */}
        <Route index element={<Day15 />} />
      </Route>
      <Route path={LinkMap.D16no13.toString()} element={<Main />}>
        {/* 鐵人賽13 */}
        <Route index element={<Day16 />} />
      </Route>
      <Route path={LinkMap.D17no13.toString()} element={<Main />}>
        {/* 鐵人賽13 */}
        <Route index element={<Day17 />} />
      </Route>
      <Route path={LinkMap.D18no13.toString()} element={<Main />}>
        {/* 鐵人賽13 */}
        <Route index element={<Day18 />} />
      </Route>
      <Route path={LinkMap.D19no13.toString()} element={<Main />}>
        {/* 鐵人賽13 */}
        <Route index element={<Day19 />} />
      </Route>
      <Route path={LinkMap.D20no13.toString()} element={<Main />}>
        {/* 鐵人賽13 */}
        <Route index element={<Day20 />} />
      </Route>
      <Route path={LinkMap.D21no13.toString()} element={<Main />}>
        {/* 鐵人賽13 */}
        <Route index element={<Day21 />} />
      </Route>
      <Route path={LinkMap.D22no13.toString()} element={<Main />}>
        {/* 鐵人賽13 */}
        <Route index element={<Day22 />} />
      </Route>
      <Route path={LinkMap.D23no13.toString()} element={<Main />}>
        {/* 鐵人賽13 */}
        <Route index element={<Day23 />} />
      </Route>
      <Route path={LinkMap.D24no13.toString()} element={<Main />}>
        {/* 鐵人賽13 */}
        <Route index element={<Day24 />} />
      </Route>
      <Route path={LinkMap.D25no13.toString()} element={<Main />}>
        {/* 鐵人賽13 */}
        <Route index element={<Day25 />} />
      </Route>
      <Route path={LinkMap.D26no13.toString()} element={<Main />}>
        {/* 鐵人賽13 */}
        <Route index element={<Day26 />} />
      </Route>
      <Route path={LinkMap.D27no13.toString()} element={<Main />}>
        {/* 鐵人賽13 */}
        <Route index element={<Day27 />} />
      </Route>
      <Route path={LinkMap.D28no13.toString()} element={<Main />}>
        {/* 鐵人賽13 */}
        <Route index element={<Day28 />} />
      </Route>
      <Route path={LinkMap.D29no13.toString()} element={<Main />}>
        {/* 鐵人賽13 */}
        <Route index element={<Day29 />} />
      </Route>
      <Route path={LinkMap.D30no13.toString()} element={<Main />}>
        {/* 鐵人賽13 */}
        <Route index element={<Day30 />} />
      </Route>
      <Route path={LinkMap.D31no13.toString()} element={<Main />}>
        {/* 鐵人賽13 */}
        <Route index element={<Day31 />} />
      </Route>
      {/*------------- 鐵人賽13 --------------*/}
      {/*------------- C# 事件與委派 --------------*/}
      <Route path={LinkMap.CsharpEventHome.toString()} element={<Main />}>
        {/* C# 事件與委派 */}
        <Route index element={<CsharpEventHome />} />
      </Route>
      <Route path={LinkMap.CsDelegate1.toString()} element={<Main />}>
        {/* C# 事件與委派 */}
        <Route index element={<CsDelegate1 />} />
      </Route>
      <Route path={LinkMap.CsDelegate2.toString()} element={<Main />}>
        {/* C# 事件與委派 */}
        <Route index element={<CsDelegate2 />} />
      </Route>
      <Route path={LinkMap.CsDelegate3.toString()} element={<Main />}>
        {/* C# 事件與委派 */}
        <Route index element={<CsDelegate3 />} />
      </Route>
      <Route path={LinkMap.CsDelegate4.toString()} element={<Main />}>
        {/* C# 事件與委派 */}
        <Route index element={<CsDelegate4 />} />
      </Route>
      <Route path={LinkMap.CsDelegate5.toString()} element={<Main />}>
        {/* C# 事件與委派 */}
        <Route index element={<CsDelegate5 />} />
      </Route>
      <Route path={LinkMap.CsDelegate6.toString()} element={<Main />}>
        {/* C# 事件與委派 */}
        <Route index element={<CsDelegate6 />} />
      </Route>
      <Route path={LinkMap.CsDelegate7.toString()} element={<Main />}>
        {/* C# 事件與委派 */}
        <Route index element={<CsDelegate7 />} />
      </Route>
      {/*------------- C# 事件與委派 --------------*/}
      {/*------------- OAuth 2.0 --------------*/}
      <Route path={LinkMap.OAuthNote.toString()} element={<Main />}>
        {/* C# 事件與委派 */}
        <Route index element={<OAuthNote />} />
      </Route>
      <Route path={LinkMap.OAuthNote1.toString()} element={<Main />}>
        {/* C# 事件與委派 */}
        <Route index element={<OAuthNote1 />} />
      </Route>
      {/*------------- OAuth 2.0 --------------*/}
      {/*------------- 單元測試 --------------*/}
      <Route path={LinkMap.UnitNote.toString()} element={<Main />}>
        {/* C# 單元測試 */}
        <Route index element={<UnitNote />} />
      </Route>
      <Route path={LinkMap.UnitNote1.toString()} element={<Main />}>
        {/* C# 單元測試 */}
        <Route index element={<UnitNote1 />} />
      </Route>
      {/*------------- 單元測試 --------------*/}
      {/*------------- 設計模式 --------------*/}
      <Route path={LinkMap.DesignPattern.toString()} element={<Main />}>
        {/* 設計模式 */}
        <Route index element={<DesignPattern />} />
      </Route>
      <Route path={LinkMap.DPOverview1.toString()} element={<Main />}>
        {/* 設計模式 */}
        <Route index element={<DPOverview1 />} />
      </Route>
      <Route path={LinkMap.DPOverview2.toString()} element={<Main />}>
        {/* 設計模式 */}
        <Route index element={<DPOverview2 />} />
      </Route>
      <Route path={LinkMap.DPOverview3.toString()} element={<Main />}>
        {/* 設計模式 */}
        <Route index element={<DPOverview3 />} />
      </Route>
      <Route path={LinkMap.DPOopOverview.toString()} element={<Main />}>
        {/* 設計模式 */}
        <Route index element={<DPOopOverview />} />
      </Route>
      {/*------------- 設計模式 --------------*/}
      <Route path={LinkMap.Continue.toString()} element={<Main />}>
        {/* 建設中 */}
        <Route index element={<Continue />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
