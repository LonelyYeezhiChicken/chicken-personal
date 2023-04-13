import { Header, Portfolio } from "../../components";
import { LinkMap } from "../../models";
import testMd from "../../note/csDelegate/csDelegate5.md";
import { useTitle } from "../../utils/PageTitle";

const pageTitle: string =
  "📪 [五.] 委派 (Delegate)(Action 委派(傳參數)) - 馬戲團";

function csDelegate5() {
  useTitle("Chicken Say Hi | 📪 [五.] 委派 (Delegate)");
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

export default csDelegate5;
