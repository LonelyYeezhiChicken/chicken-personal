import { Header, Portfolio } from "../../components";
import { LinkMap } from "../../models";
import testMd from "../../note/designPattern/ocp.md";
import { useTitle } from "../../utils/PageTitle";

const pageTitle: string = "💡2. 開閉原則 (OCP)  (open closed principle)";

function SRP() {
  useTitle("Chicken Say Hi | 💡 2.開閉原則 (OCP)");
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

export default SRP;
