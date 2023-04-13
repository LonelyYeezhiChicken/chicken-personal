import { Header, Portfolio } from "../../components";
import { LinkMap } from "../../models";
import testMd from "../../note/p5jsNote/Wave.md";
import { useTitle } from "../../utils/PageTitle";

const pageTitle: string = "🎨 P5 - 聲波";

function Wave() {
  useTitle("Chicken Say Hi | P5 聲波");
  return (
    <>
      <Portfolio backPath={LinkMap.P5Js} title={pageTitle} text={testMd} />
    </>
  );
}

export default Wave;
