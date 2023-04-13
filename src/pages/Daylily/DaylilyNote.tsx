import { Header, PageSide } from "../../components";
import { useTitle } from "../../utils/PageTitle";
import { pageList } from "./pageData";

function DaylilyNote() {
  useTitle("Chicken Say Hi | 開發雜記");
  return (
    <>
      <PageSide list={pageList} />
    </>
  );
}

export default DaylilyNote;
