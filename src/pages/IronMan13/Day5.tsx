import { Header, Portfolio } from "../../components";
import { LinkMap } from "../../models";
import testMd from "../../note/ironMan13/day5.md";
import { useTitle } from "../../utils/PageTitle";

const pageTitle: string =
  "🤖[Day5]C# 雞礎觀念- 讓變數學會七十二變的高手~運算子";

function Day5() {
  useTitle("Chicken Say Hi | 🤖 讓變數學會七十二變的高手~運算子");
  return (
    <>
      <Header />
      <Portfolio backPath={LinkMap.IronMan13} title={pageTitle} text={testMd} />
    </>
  );
}

export default Day5;
