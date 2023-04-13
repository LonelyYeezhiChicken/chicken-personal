import { Header, Portfolio } from "../../components";
import { LinkMap } from "../../models";
import testMd from "../../note/ironMan13/day15.md";
import { useTitle } from "../../utils/PageTitle";

const pageTitle: string = "🤖[Day15]C# 雞礎觀念- 多筆資料的好朋友~List";

function Day15() {
  useTitle("Chicken Say Hi | 🤖 多筆資料的好朋友~List");
  return (
    <>
      <Portfolio backPath={LinkMap.IronMan13} title={pageTitle} text={testMd} />
    </>
  );
}

export default Day15;
