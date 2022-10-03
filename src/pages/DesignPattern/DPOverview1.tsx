import { Header, Portfolio } from "../../components";
import { LinkMap } from "../../models";
import testMd from "../../note/designPattern/overview1.md";
import { useTitle } from "../../utils/PageTitle";

const pageTitle: string = "💡1. 設計模式概述(一)";

function DPOverview1() {
  useTitle("Chicken Say Hi | 💡 1. 設計模式概述(一)");
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

export default DPOverview1;
