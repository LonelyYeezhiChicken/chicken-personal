import { Header, Portfolio } from "../../components";
import { LinkMap } from "../../models";
import testMd from "../../note/ironMan13/day27.md";
import { useTitle } from "../../utils/PageTitle";

const pageTitle: string = "🤖[Day27]C# 雞礎觀念- 做錯事該怎麼辦呢?~錯誤處理";

function Day27() {
  useTitle("Chicken Say Hi | 🤖 做錯事該怎麼辦呢?~錯誤處理");
  return (
    <>
      <Header />
      <Portfolio backPath={LinkMap.IronMan13} title={pageTitle} text={testMd} />
    </>
  );
}

export default Day27;
