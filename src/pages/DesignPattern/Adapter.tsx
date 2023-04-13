import { Header, Portfolio } from "../../components";
import { LinkMap } from "../../models";
import testMd from "../../note/designPattern/adapter.md";
import { useTitle } from "../../utils/PageTitle";

const pageTitle: string = "💡1. 轉接器模式 (Adapter Pattern)";

function Adapter() {
  useTitle("Chicken Say Hi | 💡 1. 轉接器模式 (Adapter Pattern)");
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

export default Adapter;
