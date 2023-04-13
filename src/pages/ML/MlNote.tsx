import { Header, PageSide } from "../../components";
import { useTitle } from "../../utils/PageTitle";
import { pageList } from "./pageData";

function MlNote() {
  useTitle("Chicken Say Hi | 機器學習");
  return (
    <>
      <PageSide list={pageList} />
    </>
  );
}

export default MlNote;
