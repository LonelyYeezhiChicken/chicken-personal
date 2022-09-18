import { Header, Title, PageSide, PageBody } from "../../components";
import { PageData } from "../../models";

const pageTitle: string = "🎨 一隻雞的作品 - P5 Js";

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

function P5JsPage() {
  return (
    <>
      <Header />
      <Title text={pageTitle} />
      <PageSide list={pageList} />
    </>
  );
}

export default P5JsPage;
