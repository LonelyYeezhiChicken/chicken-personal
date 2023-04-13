import { Header, Portfolio } from "../../components";
import { LinkMap } from "../../models";
import testMd from "../../note/ironMan13/day21.md";
import { useTitle } from "../../utils/PageTitle";

const pageTitle: string = "🤖[Day21]C# 雞礎觀念- 物件導向(oop)~類別(class)";

function Day21() {
  useTitle("Chicken Say Hi | 🤖 物件導向(oop)~類別(class)");
  return (
    <>
      <Portfolio backPath={LinkMap.IronMan13} title={pageTitle} text={testMd} />
    </>
  );
}

export default Day21;
