import { Header, Portfolio } from "../../components";
import { LinkMap } from "../../models";
import testMd from "../../note/ironMan13/day14.md";
import { useTitle } from "../../utils/PageTitle";

const pageTitle: string = "🤖[Day14]C# 雞礎觀念- 不同層次的陣列~二維陣列";

function Day14() {
  useTitle("Chicken Say Hi | 🤖 不同層次的陣列~二維陣列");
  return (
    <>
      <Portfolio backPath={LinkMap.IronMan13} title={pageTitle} text={testMd} />
    </>
  );
}

export default Day14;
