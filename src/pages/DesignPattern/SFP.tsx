import { Header, Portfolio } from "../../components";
import { LinkMap } from "../../models";
import testMd from "../../note/designPattern/sfp.md";
import { useTitle } from "../../utils/PageTitle";

const pageTitle: string = "💡2. 簡單工廠 (Simple Factory Pattern)";

function SFP() {
  useTitle("Chicken Say Hi | 💡 2. 簡單工廠 (Simple Factory Pattern)");
  return (
    <>
      <Portfolio backPath={LinkMap.DesignPattern} title={pageTitle} text={testMd} />
    </>
  );
}

export default SFP;
