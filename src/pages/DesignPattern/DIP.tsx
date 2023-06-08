import { Header, Portfolio } from "../../components";
import { LinkMap } from "../../models";
import testMd from "../../note/designPattern/dip.md";
import { useTitle } from "../../utils/PageTitle";

const pageTitle: string = "💡5. 依賴反轉原則 (DIP) (dependency inversion principle)";

function DIP() {
  useTitle("Chicken Say Hi | 💡 5. 依賴反轉原則 (dependency inversion principle)");
  return (
    <>
      <Portfolio backPath={LinkMap.DesignPattern} title={pageTitle} text={testMd} />
    </>
  );
}

export default DIP;
