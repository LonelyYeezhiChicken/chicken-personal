import { Header, Portfolio } from "../../components";
import { LinkMap } from "../../models";
import testMd from "../../note/phaserJs/day1.md";
import { useTitle } from "../../utils/PageTitle";

const pageTitle: string = "🎮 前言";

function D1Ph3() {
  useTitle("Chicken Say Hi | phaser3 前言");
  return (
    <>
      <Portfolio backPath={LinkMap.PhaserPage} title={pageTitle} text={testMd} />
    </>
  );
}

export default D1Ph3;
