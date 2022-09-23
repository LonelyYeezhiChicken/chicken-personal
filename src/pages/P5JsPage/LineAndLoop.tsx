import { Header, Portfolio } from "../../components";
import { LinkMap } from "../../models";
import testMd from "../../note/p5jsNote/LineAndLoop.md";
import { useTitle } from "../../utils/PageTitle";

const pageTitle: string = "🎨 P5 - 線與迴圈";

function LineAndLoop() {
  useTitle("Chicken Say Hi | P5 線與迴圈");
  return (
    <>
      <Header />
      <Portfolio backPath={LinkMap.P5Js} title={pageTitle} text={testMd} />
    </>
  );
}

export default LineAndLoop;
