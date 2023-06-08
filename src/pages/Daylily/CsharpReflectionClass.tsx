import { Header, Portfolio } from "../../components";
import { LinkMap } from "../../models";
import testMd from "../../note/daylily/csharpReflectionClass.md";
import { useTitle } from "../../utils/PageTitle";

const pageTitle: string = "👩‍💻 [C#] 1.0.7 反射類別屬性，取值與改值";

function CsharpReflectionClass() {
  useTitle("Chicken Say Hi | 👩‍💻 [C#] 1.0.7 反射類別屬性，取值與改值");
  return (
    <>
      <Portfolio backPath={LinkMap.DaylilyNote} title={pageTitle} text={testMd} />
    </>
  );
}

export default CsharpReflectionClass;
