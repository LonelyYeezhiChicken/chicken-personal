import { Header, Portfolio } from "../../components";
import { LinkMap } from "../../models";
import testMd from "../../note/ironMan13/day26.md";
import { useTitle } from "../../utils/PageTitle";

const pageTitle: string = "🤖[Day26]C# 雞礎觀念- 物件導向(oop)~ 多載(Overload)";

function Day26() {
  useTitle("Chicken Say Hi | 🤖 物件導向(oop)~ 多載(Overload)");
  return (
    <>
      <Header />
      <Portfolio backPath={LinkMap.IronMan13} title={pageTitle} text={testMd} />
    </>
  );
}

export default Day26;
