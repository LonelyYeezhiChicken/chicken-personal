import { Header, Portfolio } from "../../components";
import { LinkMap } from "../../models";
import testMd from "../../note/daylily/csharpThousandthPlace.md";
import { useTitle } from "../../utils/PageTitle";

const pageTitle: string = "👩‍💻 [C#] 1.0.2 千分位符";

function CsharpThousandthPlace() {
  useTitle("Chicken Say Hi | 👩‍💻 [C#] 1.0.2 千分位符");
  return (
    <>
      <Portfolio backPath={LinkMap.DaylilyNote} title={pageTitle} text={testMd} />
    </>
  );
}

export default CsharpThousandthPlace;
