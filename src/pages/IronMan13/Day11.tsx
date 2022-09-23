import { Header, Portfolio } from "../../components";
import { LinkMap } from "../../models";
import testMd from "../../note/ironMan13/day11.md";
import { useTitle } from "../../utils/PageTitle";

const pageTitle: string =
  "🤖[Day11]C# 雞礎觀念- 把複雜的事情與關係簡單化~列舉與結構";

function Day11() {
  useTitle("Chicken Say Hi | 🤖 把複雜的事情與關係簡單化~列舉與結構");
  return (
    <>
      <Header />
      <Portfolio backPath={LinkMap.IronMan13} title={pageTitle} text={testMd} />
    </>
  );
}

export default Day11;
