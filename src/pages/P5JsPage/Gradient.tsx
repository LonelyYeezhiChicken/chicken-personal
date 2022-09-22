import { Header, Portfolio } from "../../components";
import { LinkMap } from "../../models";
import testMd from "../../note/p5jsNote/Gradient.md";
import { useTitle } from "../../utils/PageTitle";

const pageTitle: string = "🎨 P5 - 區塊漸層";

function Gradient() {
  useTitle("Chicken Say Hi | P5 Gradient");
  return (
    <>
      <Header />
      <Portfolio backPath={LinkMap.P5Js} title={pageTitle} text={testMd} />
    </>
  );
}

export default Gradient;
