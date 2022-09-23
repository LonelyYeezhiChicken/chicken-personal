import { Header, Portfolio } from "../../components";
import { LinkMap } from "../../models";
import testMd from "../../note/ironMan13/day19.md";
import { useTitle } from "../../utils/PageTitle";

const pageTitle: string = "🤖[Day19]C# 雞礎觀念- 讓時間倒轉吧~遞迴";

function Day19() {
  useTitle("Chicken Say Hi | 🤖 讓時間倒轉吧~遞迴");
  return (
    <>
      <Header />
      <Portfolio backPath={LinkMap.IronMan13} title={pageTitle} text={testMd} />
    </>
  );
}

export default Day19;
