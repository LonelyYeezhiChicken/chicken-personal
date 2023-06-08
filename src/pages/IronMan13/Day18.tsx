import { Header, Portfolio } from "../../components";
import { LinkMap } from "../../models";
import testMd from "../../note/ironMan13/day18.md";
import { useTitle } from "../../utils/PageTitle";

const pageTitle: string = "🤖[Day18]C# 雞礎觀念- 回頭吧!孩子~ref 與 out 參數修飾詞";

function Day18() {
  useTitle("Chicken Say Hi | 🤖 回頭吧!孩子~ref 與 out 參數修飾詞");
  return (
    <>
      <Portfolio backPath={LinkMap.IronMan13} title={pageTitle} text={testMd} />
    </>
  );
}

export default Day18;
