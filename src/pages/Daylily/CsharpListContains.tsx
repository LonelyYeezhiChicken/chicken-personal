import { Header, Portfolio } from "../../components";
import { LinkMap } from "../../models";
import testMd from "../../note/daylily/csharpListContains.md";
import { useTitle } from "../../utils/PageTitle";

const pageTitle: string = "👩‍💻 [C#] 1.0.0 List 比較";

function CsharpListContains() {
  useTitle("Chicken Say Hi | 👩‍💻 [C#] 1.0.0 List 比較");
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

export default CsharpListContains;
