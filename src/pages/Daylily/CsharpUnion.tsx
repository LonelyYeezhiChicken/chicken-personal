import { Header, Portfolio } from "../../components";
import { LinkMap } from "../../models";
import testMd from "../../note/daylily/csharpUnion.md";
import { useTitle } from "../../utils/PageTitle";

const pageTitle: string = "👩‍💻 [C#] 1.0.3 聯集";

function CsharpUnion() {
  useTitle("Chicken Say Hi | 👩‍💻 [C#] 1.0.3 聯集");
  return (
    <>
      <Header />
      <Portfolio
        backPath={LinkMap.DaylilyNote}
        title={pageTitle}
        text={testMd}
      />
    </>
  );
}

export default CsharpUnion;
