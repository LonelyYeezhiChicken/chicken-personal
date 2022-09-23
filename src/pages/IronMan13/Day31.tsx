import { Header, Portfolio } from "../../components";
import { LinkMap } from "../../models";
import testMd from "../../note/ironMan13/day31.md";
import { useTitle } from "../../utils/PageTitle";

const pageTitle: string = "🤖[Day31]C# 雞礎觀念- 結語";

function Day31() {
  useTitle("Chicken Say Hi | 🤖 結語");
  return (
    <>
      <Header />
      <Portfolio backPath={LinkMap.IronMan13} title={pageTitle} text={testMd} />
    </>
  );
}

export default Day31;
