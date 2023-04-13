import { Header, Portfolio } from "../../components";
import { LinkMap } from "../../models";
import testMd from "../../note/ironMan13/day25.md";
import { useTitle } from "../../utils/PageTitle";

const pageTitle: string = "🤖[Day25]C# 雞礎觀念- 共產主義者~靜態成員";

function Day25() {
  useTitle("Chicken Say Hi | 🤖 共產主義者~靜態成員");
  return (
    <>
      <Portfolio backPath={LinkMap.IronMan13} title={pageTitle} text={testMd} />
    </>
  );
}

export default Day25;
