import { Header, Portfolio } from "../../components";
import { LinkMap } from "../../models";
import testMd from "../../note/ironMan13/day7.md";
import { useTitle } from "../../utils/PageTitle";

const pageTitle: string =
  "🤖[Day7]C# 雞礎觀念- 你有選擇障礙嗎? 交給if陳述式解決吧!";

function Day7() {
  useTitle("Chicken Say Hi | 🤖 交給if陳述式解決吧!");
  return (
    <>
      <Portfolio backPath={LinkMap.IronMan13} title={pageTitle} text={testMd} />
    </>
  );
}

export default Day7;
