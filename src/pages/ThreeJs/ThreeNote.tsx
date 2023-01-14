import { Header, PageSide } from "../../components";
import { useTitle } from "../../utils/PageTitle";
import { pageList } from "./pageData";

function ThreeNote() {
  useTitle("Chicken Say Hi | Three js");
  return (
    <>
      <Header />
      <PageSide list={pageList} />
    </>
  );
}

export default ThreeNote;
