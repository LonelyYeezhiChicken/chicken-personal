import { Header, Portfolio } from "../../components";
import { LinkMap } from "../../models";
import testMd from "../../note/ironMan13/day22.md";
import { useTitle } from "../../utils/PageTitle";

const pageTitle: string = "🤖[Day22]C# 雞礎觀念- 物件導向(oop)~物件(Object)";

function Day22() {
  useTitle("Chicken Say Hi | 🤖 物件導向(oop)~物件(Object)");
  return (
    <>
      <Header />
      <Portfolio backPath={LinkMap.IronMan13} title={pageTitle} text={testMd} />
    </>
  );
}

export default Day22;
