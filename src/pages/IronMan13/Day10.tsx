import { Header, Portfolio } from "../../components";
import { LinkMap } from "../../models";
import testMd from "../../note/ironMan13/day10.md";
import { useTitle } from "../../utils/PageTitle";

const pageTitle: string = "🤖[Day10]C# 雞礎觀念- 重播與停止 while迴圈與break";

function Day10() {
  useTitle("Chicken Say Hi | 🤖 重播與停止 while迴圈與break");
  return (
    <>
      <Header />
      <Portfolio backPath={LinkMap.IronMan13} title={pageTitle} text={testMd} />
    </>
  );
}

export default Day10;
