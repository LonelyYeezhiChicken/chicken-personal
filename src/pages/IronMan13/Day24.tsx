import { Header, Portfolio } from "../../components";
import { LinkMap } from "../../models";
import testMd from "../../note/ironMan13/day24.md";
import { useTitle } from "../../utils/PageTitle";

const pageTitle: string = "🤖[Day24]C# 雞礎觀念- 物件導向(oop)~建構方法(Constructor)";

function Day24() {
  useTitle("Chicken Say Hi | 🤖 物件導向(oop)~建構方法(Constructor)");
  return (
    <>
      <Portfolio backPath={LinkMap.IronMan13} title={pageTitle} text={testMd} />
    </>
  );
}

export default Day24;
