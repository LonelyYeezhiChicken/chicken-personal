import { Header, Portfolio } from "../../components";
import { LinkMap } from "../../models";
import testMd from "../../note/ironMan13/day30.md";
import { useTitle } from "../../utils/PageTitle";

const pageTitle: string = "🤖[Day30]C# 不雞礎觀念- Install Tailwind Css with ASP.NET MVC5";

function Day30() {
  useTitle("Chicken Say Hi | 🤖 Install Tailwind Css with ASP.NET MVC5");
  return (
    <>
      <Portfolio backPath={LinkMap.IronMan13} title={pageTitle} text={testMd} />
    </>
  );
}

export default Day30;
