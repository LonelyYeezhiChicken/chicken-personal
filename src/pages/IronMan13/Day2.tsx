import { Header, Portfolio } from "../../components";
import { LinkMap } from "../../models";
import testMd from "../../note/ironMan13/day2.md";
import { useTitle } from "../../utils/PageTitle";

const pageTitle: string = "π€[Day2]C# ιη€θ§εΏ΅- θC#ιηΌειδΎηΈθ¦";

function Day2() {
  useTitle("Chicken Say Hi | π€ θC#ιηΌειδΎηΈθ¦");
  return (
    <>
      <Header />
      <Portfolio backPath={LinkMap.IronMan13} title={pageTitle} text={testMd} />
    </>
  );
}

export default Day2;
