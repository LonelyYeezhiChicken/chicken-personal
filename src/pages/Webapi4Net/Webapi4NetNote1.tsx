import { Header, Portfolio } from "../../components";
import { LinkMap } from "../../models";
import note1 from "../../note/webapi4Net/note1.md";
import { useTitle } from "../../utils/PageTitle";

const pageTitle: string = "🛰 1.1 Web 結構";

function Webapi4NetNote1() {
  useTitle("Chicken Say Hi | 🛰 1.1 Web 結構");
  return (
    <>
      <Portfolio backPath={LinkMap.Webapi4Net} title={pageTitle} text={note1} />
    </>
  );
}

export default Webapi4NetNote1;
