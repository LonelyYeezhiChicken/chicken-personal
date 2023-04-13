import { Header, PageSide } from "../../components";
import { useTitle } from "../../utils/PageTitle";
import { pageList } from "./pageData";

function IronMan13() {
  useTitle("Chicken Say Hi | 鐵人 13");
  return (
    <>
      <PageSide list={pageList} />
    </>
  );
}

export default IronMan13;
