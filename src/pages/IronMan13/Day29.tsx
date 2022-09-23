import { Header, Portfolio } from "../../components";
import { LinkMap } from "../../models";
import testMd from "../../note/ironMan13/day29.md";
import { useTitle } from "../../utils/PageTitle";

const pageTitle: string = "🤖[Day29]C# 雞礎觀念- 物件導向(oop)~介面(Interface)";

function Day29() {
  useTitle("Chicken Say Hi | 🤖 物件導向(oop)~介面(Interface)");
  return (
    <>
      <Header />
      <Portfolio backPath={LinkMap.IronMan13} title={pageTitle} text={testMd} />
    </>
  );
}

export default Day29;
