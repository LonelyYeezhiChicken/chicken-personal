import { Header, Portfolio } from "../../components";
import { LinkMap } from "../../models";
import testMd from "../../note/ironMan13/day25.md";
import { useTitle } from "../../utils/PageTitle";

const pageTitle: string = "π€[Day25]C# ιη€θ§εΏ΅- ε±η’δΈ»ηΎ©θ~ιζζε‘";

function Day25() {
  useTitle("Chicken Say Hi | π€ ε±η’δΈ»ηΎ©θ~ιζζε‘");
  return (
    <>
      <Header />
      <Portfolio backPath={LinkMap.IronMan13} title={pageTitle} text={testMd} />
    </>
  );
}

export default Day25;
