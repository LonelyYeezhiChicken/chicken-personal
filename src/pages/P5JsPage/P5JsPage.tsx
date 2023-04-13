import { Header, PageSide } from "../../components";
import { useTitle } from "../../utils/PageTitle";
import { pageList } from "./pageData";

function P5JsPage() {
  useTitle("Chicken Say Hi | P5 js");
  return (
    <>
      <PageSide list={pageList} />
    </>
  );
}

export default P5JsPage;
