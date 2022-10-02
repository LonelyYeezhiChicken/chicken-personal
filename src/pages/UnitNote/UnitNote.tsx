import { Header, PageSide } from "../../components";
import { useTitle } from "../../utils/PageTitle";
import { pageList } from "./pageData";

function UnitNote() {
  useTitle("Chicken Say Hi | Unit test");
  return (
    <>
      <Header />
      <PageSide list={pageList} />
    </>
  );
}

export default UnitNote;
