import { Header, Portfolio } from "../../components";
import { LinkMap } from "../../models";
import testMd from "../../note/csDelegate/csDelegate4.md";
import { useTitle } from "../../utils/PageTitle";

const pageTitle: string = "📪 [四.] 委派 (Delegate)";

function csDelegate4() {
  useTitle("Chicken Say Hi | 📪 [四.] 委派 (Delegate)");
  return (
    <>
      <Header />
      <Portfolio
        backPath={LinkMap.CsharpEventHome}
        title={pageTitle}
        text={testMd}
      />
    </>
  );
}

export default csDelegate4;
