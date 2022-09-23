import { Header, Portfolio } from "../../components";
import { LinkMap } from "../../models";
import testMd from "../../note/ironMan13/day2.md";
import { useTitle } from "../../utils/PageTitle";

const pageTitle: string = "🤖[Day2]C# 雞礎觀念- 與C#開發千里來相見";

function Day2() {
  useTitle("Chicken Say Hi | 🤖 與C#開發千里來相見");
  return (
    <>
      <Header />
      <Portfolio backPath={LinkMap.IronMan13} title={pageTitle} text={testMd} />
    </>
  );
}

export default Day2;
