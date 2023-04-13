import { Header, Portfolio } from "../../components";
import { LinkMap } from "../../models";
import testMd from "../../note/ironMan13/day16.md";
import { useTitle } from "../../utils/PageTitle";

const pageTitle: string = "🤖[Day16]C# 雞礎觀念- 虛擬代工廠~方法(function)";

function Day16() {
  useTitle("Chicken Say Hi | 🤖 虛擬代工廠~方法(function)");
  return (
    <>
      <Portfolio backPath={LinkMap.IronMan13} title={pageTitle} text={testMd} />
    </>
  );
}

export default Day16;
