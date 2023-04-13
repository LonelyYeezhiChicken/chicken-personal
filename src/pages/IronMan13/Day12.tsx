import { Header, Portfolio } from "../../components";
import { LinkMap } from "../../models";
import testMd from "../../note/ironMan13/day12.md";
import { useTitle } from "../../utils/PageTitle";

const pageTitle: string = "🤖[Day12]C# 雞礎觀念- 當我們同在一起~陣列(Array)";

function Day12() {
  useTitle("Chicken Say Hi | 🤖 當我們同在一起~陣列(Array)");
  return (
    <>
      <Portfolio backPath={LinkMap.IronMan13} title={pageTitle} text={testMd} />
    </>
  );
}

export default Day12;
