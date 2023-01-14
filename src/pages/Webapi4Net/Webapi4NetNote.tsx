import { Header, PageSide } from "../../components";
import { useTitle } from "../../utils/PageTitle";
import { pageList } from "./pageData";

function Webapi4NetNote() {
  useTitle("Chicken Say Hi | Web API 4 Net");
  return (
    <>
      <Header />
      <PageSide list={pageList} />
    </>
  );
}

export default Webapi4NetNote;
