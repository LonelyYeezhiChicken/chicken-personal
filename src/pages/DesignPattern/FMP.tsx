import { Header, Portfolio } from "../../components";
import { LinkMap } from "../../models";
import testMd from "../../note/designPattern/fmp.md";
import { useTitle } from "../../utils/PageTitle";

const pageTitle: string = "💡1. 工廠方法 (Factory Method Pattern)";

function FMP() {
  useTitle("Chicken Say Hi | 💡 1. 工廠方法 (Factory Method Pattern)");
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

export default FMP;
