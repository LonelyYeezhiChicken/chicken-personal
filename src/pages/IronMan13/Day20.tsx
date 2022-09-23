import { Header, Portfolio } from "../../components";
import { LinkMap } from "../../models";
import testMd from "../../note/ironMan13/day20.md";
import { useTitle } from "../../utils/PageTitle";

const pageTitle: string = "🤖[Day20]C# 雞礎觀念- 物件導向(oop)基本觀念";

function Day20() {
  useTitle("Chicken Say Hi | 🤖 物件導向(oop)基本觀念");
  return (
    <>
      <Header />
      <Portfolio backPath={LinkMap.IronMan13} title={pageTitle} text={testMd} />
    </>
  );
}

export default Day20;
