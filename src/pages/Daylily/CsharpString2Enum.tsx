import { Header, Portfolio } from "../../components";
import { LinkMap } from "../../models";
import testMd from "../../note/daylily/csharpString2Enum.md";
import { useTitle } from "../../utils/PageTitle";

const pageTitle: string = "👩‍💻 [C#] 1.0.1 string to enum";

function String2Enum() {
  useTitle("Chicken Say Hi | 👩‍💻 [C#] 1.0.1 string to enum");
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

export default String2Enum;
