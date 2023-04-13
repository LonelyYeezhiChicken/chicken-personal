import { Header, Portfolio } from "../../components";
import { LinkMap } from "../../models";
import note1 from "../../note/threeJs/note1.md";
import { useTitle } from "../../utils/PageTitle";

const pageTitle: string = "🌍 1. WebGL 簡介";

function ThreeNote1() {
  useTitle("Chicken Say Hi | 🌍 1. WebGL 簡介");
  return (
    <>
      <Portfolio backPath={LinkMap.ThreeJs} title={pageTitle} text={note1} />
    </>
  );
}

export default ThreeNote1;
