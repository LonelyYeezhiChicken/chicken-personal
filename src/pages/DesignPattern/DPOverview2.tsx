import { Header, Portfolio } from "../../components";
import { LinkMap } from "../../models";
import testMd from "../../note/designPattern/overview2.md";
import { useTitle } from "../../utils/PageTitle";

const pageTitle: string = "💡2. 設計模式概述(二)";

function DPOverview2() {
  useTitle("Chicken Say Hi | 💡 2. 設計模式概述(二)");
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

export default DPOverview2;
