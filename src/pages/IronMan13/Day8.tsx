import { Header, Portfolio } from "../../components";
import { LinkMap } from "../../models";
import testMd from "../../note/ironMan13/day8.md";
import { useTitle } from "../../utils/PageTitle";

const pageTitle: string = "🤖[Day8]C# 雞礎觀念- 如果沒有如果，只有太多的如果switch陳述式";

function Day8() {
  useTitle("Chicken Say Hi | 🤖 如果沒有如果，只有太多的如果switch陳述式");
  return (
    <>
      <Portfolio backPath={LinkMap.IronMan13} title={pageTitle} text={testMd} />
    </>
  );
}

export default Day8;
