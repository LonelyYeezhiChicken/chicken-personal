import { Header, Portfolio } from "../../components";
import { LinkMap } from "../../models";
import testMd from "../../note/ironMan13/day9.md";
import { useTitle } from "../../utils/PageTitle";

const pageTitle: string = "🤖[Day9]C# 雞礎觀念- 省去重複程式碼的好幫手~for迴圈";

function Day9() {
  useTitle("Chicken Say Hi | 🤖 省去重複程式碼的好幫手~for迴圈");
  return (
    <>
      <Portfolio backPath={LinkMap.IronMan13} title={pageTitle} text={testMd} />
    </>
  );
}

export default Day9;
