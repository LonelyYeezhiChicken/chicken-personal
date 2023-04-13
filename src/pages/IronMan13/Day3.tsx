import { Header, Portfolio } from "../../components";
import { LinkMap } from "../../models";
import testMd from "../../note/ironMan13/day3.md";
import { useTitle } from "../../utils/PageTitle";

const pageTitle: string = "🤖[Day3]C# 雞礎觀念- 核心的數據成員~變數(一)";

function Day3() {
  useTitle("Chicken Say Hi | 🤖 核心的數據成員~變數(一)");
  return (
    <>
      <Portfolio backPath={LinkMap.IronMan13} title={pageTitle} text={testMd} />
    </>
  );
}

export default Day3;
