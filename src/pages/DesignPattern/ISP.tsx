import { Header, Portfolio } from "../../components";
import { LinkMap } from "../../models";
import testMd from "../../note/designPattern/isp.md";
import { useTitle } from "../../utils/PageTitle";

const pageTitle: string =
  "💡4. 介面隔離原則 (ISP) (interface segregation principle)";

function ISP() {
  useTitle(
    "Chicken Say Hi | 💡 4. 介面隔離原則 (interface segregation principle)"
  );
  return (
    <>
      <Header />
      <Portfolio
        backPath={LinkMap.DesignPattern}
        title={pageTitle}
        text={testMd}
      />
    </>
  );
}

export default ISP;
