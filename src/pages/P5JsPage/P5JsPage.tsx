import { Header, Title, PageSide, PageBody } from "../../components";
import { PageData } from "../../models";

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

function P5JsPage() {
  return (
    <>
      <Header />
      <div className="flex">
        <div className="w-1/4 sm:w-1/5">
          <PageSide list={pageList} />
        </div>
        <div className="w-3/4 sm:w-4/5">
          <PageBody title={pageTitle} text="1231231241241412414142" />
        </div>
      </div>
    </>
  );
}

export default P5JsPage;
