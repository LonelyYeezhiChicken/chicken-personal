import { Header, Portfolio } from "../../components";
import { LinkMap } from "../../models";
import testMd from "../../note/designPattern/prototype.md";
import { useTitle } from "../../utils/PageTitle";

const pageTitle: string = "💡 1. 原型模式 (Prototype Pattern)";

function Prototype() {
  useTitle("Chicken Say Hi | 💡 1. 原型模式 (Abstract Pattern)");
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

export default Prototype;
