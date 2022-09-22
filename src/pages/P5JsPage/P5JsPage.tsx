import { Header, PageSide } from "../../components";
import { PageData, PageBodyData, LinkMap } from "../../models";
import { useTitle } from "../../utils/PageTitle";

const pageTitle: string = "🎨 P5 Js";

const pageList: PageData[] = [
  {
    id: 1,
    text: "1. 線與迴圈",
    goPath: LinkMap.LineAndLoop,
  },
  {
    id: 2,
    text: "2. map 函式",
    goPath: LinkMap.MapFunc,
  },
  {
    id: 3,
    text: "3. 區塊漸層",
    goPath: LinkMap.Gradient,
  },
  {
    id: 4,
    text: "4. 聲波",
    goPath: LinkMap.Wave,
  },
  {
    id: 5,
    text: "5. arc 函式",
    goPath: LinkMap.MethodArc,
  },
];

function P5JsPage() {
  useTitle("Chicken Say Hi | P5 js");
  return (
    <>
      <Header />
      <PageSide list={pageList} />
    </>
  );
}

export default P5JsPage;
