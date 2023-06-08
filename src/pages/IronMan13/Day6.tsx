import { Header, Portfolio } from "../../components";
import { LinkMap } from "../../models";
import testMd from "../../note/ironMan13/day6.md";
import { useTitle } from "../../utils/PageTitle";

const pageTitle: string = "🤖[Day6]C# 雞礎觀念- 程式碼擁有判斷真假的能力~邏輯運算子";

function Day6() {
  useTitle("Chicken Say Hi | 🤖 程式碼擁有判斷真假的能力~邏輯運算子");
  return (
    <>
      <Portfolio backPath={LinkMap.IronMan13} title={pageTitle} text={testMd} />
    </>
  );
}

export default Day6;
