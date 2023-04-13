import { Header, Portfolio } from "../../components";
import { LinkMap } from "../../models";
import testMd from "../../note/ironMan13/day4.md";
import { useTitle } from "../../utils/PageTitle";

const pageTitle: string = "🤖[Day4]C# 雞礎觀念- 核心的數據成員~變數(二)";

function Day4() {
  useTitle("Chicken Say Hi | 🤖 核心的數據成員~變數(二)");
  return (
    <>
      <Portfolio backPath={LinkMap.IronMan13} title={pageTitle} text={testMd} />
    </>
  );
}

export default Day4;
