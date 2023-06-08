import { Header, Portfolio } from "../../components";
import { LinkMap } from "../../models";
import testMd from "../../note/designPattern/lsp.md";
import { useTitle } from "../../utils/PageTitle";

const pageTitle: string = "💡3. 里氏替換原則(Lsp) (Liskov substitution principle)";

function LSP() {
  useTitle("Chicken Say Hi | 💡 3. 里氏替換原則 (Liskov substitution principle)");
  return (
    <>
      <Portfolio backPath={LinkMap.DesignPattern} title={pageTitle} text={testMd} />
    </>
  );
}

export default LSP;
