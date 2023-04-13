import { Header, Portfolio } from "../../components";
import { LinkMap } from "../../models";
import testMd from "../../note/daylily/csharpFunc2Expression.md";
import { useTitle } from "../../utils/PageTitle";

const pageTitle: string = "👩‍💻 [C#] 1.0.6 委派與委派表達樹";

function CsharpFunc2Expression() {
  useTitle("Chicken Say Hi | 👩‍💻 [C#] 1.0.6 委派與委派表達樹");
  return (
    <>
      <Portfolio
        backPath={LinkMap.DaylilyNote}
        title={pageTitle}
        text={testMd}
      />
    </>
  );
}

export default CsharpFunc2Expression;
