import { Header, Portfolio } from "../../components";
import { LinkMap } from "../../models";
import testMd from "../../note/designPattern/overview3.md";
import { useTitle } from "../../utils/PageTitle";

const pageTitle: string = "💡2. 設計模式概述(三)";

function DPOverview3() {
  useTitle("Chicken Say Hi | 💡 2. 設計模式概述(三)");
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

export default DPOverview3;
