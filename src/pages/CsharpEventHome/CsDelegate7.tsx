import { Header, Portfolio } from "../../components";
import { LinkMap } from "../../models";
import testMd from "../../note/csDelegate/csDelegate7.md";
import { useTitle } from "../../utils/PageTitle";

const pageTitle: string = "📪 [七.] 委派 (Delegate)(Func 委派(傳參數)) - 馬戲團";

function csDelegate7() {
  useTitle("Chicken Say Hi | 📪 [七.] 委派 (Delegate)");
  return (
    <>
      <Portfolio backPath={LinkMap.CsharpEventHome} title={pageTitle} text={testMd} />
    </>
  );
}

export default csDelegate7;
