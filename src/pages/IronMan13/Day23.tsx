import { Header, Portfolio } from "../../components";
import { LinkMap } from "../../models";
import testMd from "../../note/ironMan13/day23.md";
import { useTitle } from "../../utils/PageTitle";

const pageTitle: string = "🤖[Day23]C# 雞礎觀念- 物件導向(oop)~屬性(Property)";

function Day23() {
  useTitle("Chicken Say Hi | 🤖 物件導向(oop)~屬性(Property)");
  return (
    <>
      <Header />
      <Portfolio backPath={LinkMap.IronMan13} title={pageTitle} text={testMd} />
    </>
  );
}

export default Day23;
