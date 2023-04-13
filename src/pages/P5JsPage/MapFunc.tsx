import { Header, Portfolio } from "../../components";
import { LinkMap } from "../../models";
import testMd from "../../note/p5jsNote/MapFunc.md";
import { useTitle } from "../../utils/PageTitle";

const pageTitle: string = "🎨 P5 - map 函式";

function MapFunc() {
  useTitle("Chicken Say Hi | P5 map 函式");
  return (
    <>
      <Portfolio backPath={LinkMap.P5Js} title={pageTitle} text={testMd} />
    </>
  );
}

export default MapFunc;
