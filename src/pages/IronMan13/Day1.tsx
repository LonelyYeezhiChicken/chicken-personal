import { Header, Portfolio } from "../../components";
import { LinkMap } from "../../models";
import testMd from "../../note/ironMan13/day1.md";
import { useTitle } from "../../utils/PageTitle";

const pageTitle: string = "🤖[Day1]C# 雞礎觀念- C#簡介";

function Day1() {
  useTitle("Chicken Say Hi | 🤖 C#簡介");
  return (
    <>
      <Portfolio backPath={LinkMap.IronMan13} title={pageTitle} text={testMd} />
    </>
  );
}

export default Day1;
