import { Header, Portfolio } from "../../components";
import { LinkMap } from "../../models";
import testMd from "../../note/designPattern/oopOverview.md";
import { useTitle } from "../../utils/PageTitle";

const pageTitle: string = "💡4. 物件導向設計原則概述";

function DPOopOverview() {
  useTitle("Chicken Say Hi | 💡 4. 物件導向設計原則概述");
  return (
    <>
      <Portfolio
        backPath={LinkMap.DesignPattern}
        title={pageTitle}
        text={testMd}
      />
    </>
  );
}

export default DPOopOverview;
