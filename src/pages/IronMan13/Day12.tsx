import { Header, Portfolio } from "../../components";
import { LinkMap } from "../../models";
import testMd from "../../note/ironMan13/day12.md";
import { useTitle } from "../../utils/PageTitle";

const pageTitle: string = "π€[Day12]C# ιη€θ§εΏ΅- ηΆζεεε¨δΈθ΅·~ι£ε(Array)";

function Day12() {
  useTitle("Chicken Say Hi | π€ ηΆζεεε¨δΈθ΅·~ι£ε(Array)");
  return (
    <>
      <Header />
      <Portfolio backPath={LinkMap.IronMan13} title={pageTitle} text={testMd} />
    </>
  );
}

export default Day12;
