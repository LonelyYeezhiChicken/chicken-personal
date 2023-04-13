import { Header, PageSide } from "../../components";
import { useTitle } from "../../utils/PageTitle";
import { pageList } from "./pageData";

function DesignPattern() {
  useTitle("Chicken Say Hi | Design Pattern");
  return (
    <>
      <PageSide list={pageList} />
    </>
  );
}

export default DesignPattern;
