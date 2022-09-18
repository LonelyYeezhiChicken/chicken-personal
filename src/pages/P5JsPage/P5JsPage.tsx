import { Header, Portfolio } from "../../components";
import { PageData, PageBodyData } from "../../models";

const pageTitle: string = "🎨 P5 Js";

const pageList: PageData[] = [
  {
    id: 1,
    text: "首頁",
  },
  {
    id: 2,
    text: "第2",
  },
  {
    id: 3,
    text: "第三",
  },
];

const pageBody: PageBodyData = {
  title: pageTitle,
  text: "1231231241241412414142",
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
