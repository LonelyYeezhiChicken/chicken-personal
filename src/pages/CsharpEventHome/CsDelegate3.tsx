import { Header, Portfolio } from "../../components";
import { LinkMap } from "../../models";
import testMd from "../../note/csDelegate/csDelegate3.md";
import { useTitle } from "../../utils/PageTitle";

const pageTitle: string = "📪 [三.] 委派 (Delegate)(多點傳送委派) - 馬戲團(多隻動物版)";

function csDelegate3() {
  useTitle("Chicken Say Hi | 📪 [三.] 委派 (Delegate)");
  return (
    <>
      <Portfolio backPath={LinkMap.CsharpEventHome} title={pageTitle} text={testMd} />
    </>
  );
}

export default csDelegate3;
