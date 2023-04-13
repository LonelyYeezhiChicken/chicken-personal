import { Header, Portfolio } from "../../components";
import { LinkMap } from "../../models";
import testMd from "../../note/csDelegate/csDelegate2.md";
import { useTitle } from "../../utils/PageTitle";

const pageTitle: string = "📪 [二.] 委派 (Delegate) - 馬戲團(多隻動物版)";

function csDelegate2() {
  useTitle("Chicken Say Hi | 📪 [二.] 委派 (Delegate)");
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

export default csDelegate2;
