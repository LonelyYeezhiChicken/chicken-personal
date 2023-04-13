import { Header, Portfolio } from "../../components";
import { LinkMap } from "../../models";
import testMd from "../../note/csDelegate/csDelegate6.md";
import { useTitle } from "../../utils/PageTitle";

const pageTitle: string = "📪 [六.] 委派 (Delegate)(Func 委派) - 馬戲團";

function csDelegate6() {
  useTitle("Chicken Say Hi | 📪 [六.] 委派 (Delegate)");
  return (
    <>
      <Portfolio
        backPath={LinkMap.CsharpEventHome}
        title={pageTitle}
        text={testMd}
      />
    </>
  );
}

export default csDelegate6;
