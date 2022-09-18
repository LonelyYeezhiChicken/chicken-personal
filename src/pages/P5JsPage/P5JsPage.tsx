import { Header, Portfolio } from "../../components";
import { PageData, PageBodyData } from "../../models";
import testMd from "../../note/p5jsNote/LineAndLoop/README.md";

const pageTitle: string = "🎨 P5 Js";

const pageList: PageData[] = [
  {
    id: 1,
    text: "線與迴圈",
  },
  {
    id: 2,
    text: "map 函式",
  },
  {
    id: 3,
    text: "區塊漸層",
  },
  {
    id: 4,
    text: "聲波",
  },
  {
    id: 5,
    text: "arc 函式",
  },
];

const pageBody: PageBodyData = {
  title: pageTitle,
  text: testMd,
};

function P5JsPage() {
  return (
    <>
      <Header />
      <Portfolio side={pageList} body={pageBody} />
    </>
  );
}

export default P5JsPage;
