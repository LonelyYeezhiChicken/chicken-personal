import { Header, Portfolio } from "../../components";
import { LinkMap } from "../../models";
import testMd from "../../note/ironMan13/day17.md";
import { useTitle } from "../../utils/PageTitle";

const pageTitle: string = "🤖[Day17]C# 雞礎觀念- 像個郵差一樣~值與址的傳遞";

function Day17() {
  useTitle("Chicken Say Hi | 🤖 像個郵差一樣~值與址的傳遞");
  return (
    <>
      <Portfolio backPath={LinkMap.IronMan13} title={pageTitle} text={testMd} />
    </>
  );
}

export default Day17;
