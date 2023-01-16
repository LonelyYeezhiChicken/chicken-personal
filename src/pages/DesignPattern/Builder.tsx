import { Header, Portfolio } from "../../components";
import { LinkMap } from "../../models";
import testMd from "../../note/designPattern/builder.md";
import { useTitle } from "../../utils/PageTitle";

const pageTitle: string = "💡1. 建造者模式 (Builder Pattern)";

function Builder() {
  useTitle("Chicken Say Hi | 💡 1. 建造者模式 (Builder Pattern)");
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

export default Builder;
