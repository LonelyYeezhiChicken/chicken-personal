import { Header, Portfolio } from "../../components";
import { LinkMap } from "../../models";
import testMd from "../../note/daylily/csharpList2StringAddWord.md";
import { useTitle } from "../../utils/PageTitle";

const pageTitle: string = "👩‍💻 [C#] 1.0.5 List to string 加入分隔符號";

function CsharpList2StringAddWord() {
  useTitle("Chicken Say Hi | 👩‍💻 [C#] 1.0.5 List to string 加入分隔符號");
  return (
    <>
      <Portfolio backPath={LinkMap.DaylilyNote} title={pageTitle} text={testMd} />
    </>
  );
}

export default CsharpList2StringAddWord;
