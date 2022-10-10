import { Header, Portfolio } from "../../components";
import { LinkMap } from "../../models";
import testMd from "../../note/designPattern/srp.md";
import { useTitle } from "../../utils/PageTitle";

const pageTitle: string =
  "💡1. 單一責任原則 (SRP) (single repository principle)";

function SRP() {
  useTitle("Chicken Say Hi | 💡 1. 單一責任原則(SRP)");
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
