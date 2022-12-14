import { Header, Portfolio } from "../../components";
import { LinkMap } from "../../models";
import testMd from "../../note/designPattern/isp.md";
import { useTitle } from "../../utils/PageTitle";

const pageTitle: string =
  "๐ก4. ไป้ข้้ขๅๅ (ISP) (interface segregation principle)";

function ISP() {
  useTitle(
    "Chicken Say Hi | ๐ก 4. ไป้ข้้ขๅๅ (interface segregation principle)"
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
