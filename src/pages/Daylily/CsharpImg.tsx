import { Header, Portfolio } from "../../components";
import { LinkMap } from "../../models";
import testMd from "../../note/daylily/csharpImg.md";
import { useTitle } from "../../utils/PageTitle";

const pageTitle: string = "👩‍💻 [C#] 1.0.4 圖片處理";

function CsharpImg() {
  useTitle("Chicken Say Hi | 👩‍💻 [C#] 1.0.4 圖片處理");
  return (
    <>
      <Portfolio backPath={LinkMap.DaylilyNote} title={pageTitle} text={testMd} />
    </>
  );
}

export default CsharpImg;
