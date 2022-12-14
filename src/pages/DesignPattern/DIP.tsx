import { Header, Portfolio } from "../../components";
import { LinkMap } from "../../models";
import testMd from "../../note/designPattern/dip.md";
import { useTitle } from "../../utils/PageTitle";

const pageTitle: string =
  "π‘5. δΎθ³΄εθ½εε (DIP) (dependency inversion principle)";

function DIP() {
  useTitle(
    "Chicken Say Hi | π‘ 5. δΎθ³΄εθ½εε (dependency inversion principle)"
  );
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

export default DIP;
