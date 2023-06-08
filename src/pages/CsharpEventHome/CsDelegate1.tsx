import { Header, Portfolio } from "../../components";
import { LinkMap } from "../../models";
import testMd from "../../note/csDelegate/csDelegate1.md";
import { useTitle } from "../../utils/PageTitle";

const pageTitle: string = "📪 [一.] 委派 (Delegate) - 馬戲團";

function CsDelegate1() {
  useTitle("Chicken Say Hi | 📪 [一.] 委派 (Delegate)");
  return (
    <>
      <Portfolio backPath={LinkMap.CsharpEventHome} title={pageTitle} text={testMd} />
    </>
  );
}

export default CsDelegate1;
