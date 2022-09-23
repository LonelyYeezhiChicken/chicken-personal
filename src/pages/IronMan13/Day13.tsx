import { Header, Portfolio } from "../../components";
import { LinkMap } from "../../models";
import testMd from "../../note/ironMan13/day13.md";
import { useTitle } from "../../utils/PageTitle";

const pageTitle: string = "🤖[Day13]C# 雞礎觀念- 來個輪迴吧~foreach迴圈";

function Day13() {
  useTitle("Chicken Say Hi | 🤖 來個輪迴吧~foreach迴圈");
  return (
    <>
      <Header />
      <Portfolio backPath={LinkMap.IronMan13} title={pageTitle} text={testMd} />
    </>
  );
}

export default Day13;
