import { Header, Portfolio } from "../../components";
import { LinkMap } from "../../models";
import testMd from "../../note/ironMan13/day28.md";
import { useTitle } from "../../utils/PageTitle";

const pageTitle: string = "🤖[Day28]C# 雞礎觀念- 物件導向(oop)~ 繼承";

function Day28() {
  useTitle("Chicken Say Hi | 🤖 做錯事該怎麼辦呢?~錯誤處理");
  return (
    <>
      <Header />
      <Portfolio backPath={LinkMap.IronMan13} title={pageTitle} text={testMd} />
    </>
  );
}

export default Day28;
