import { Header, Portfolio } from "../../components";
import { LinkMap } from "../../models";
import testMd from "../../note/designPattern/abstractFactory.md";
import { useTitle } from "../../utils/PageTitle";

const pageTitle: string = "💡3. 抽象工廠 (Abstract Factory)";

function AbstractFactory() {
  useTitle("Chicken Say Hi | 💡 3. 抽象工廠 (Abstract Factory)");
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

export default AbstractFactory;
