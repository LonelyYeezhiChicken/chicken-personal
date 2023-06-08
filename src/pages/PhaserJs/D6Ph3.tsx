import { Header, Portfolio } from "../../components";
import { LinkMap } from "../../models";
import testMd from "../../note/phaserJs/day6.md";
import { useTitle } from "../../utils/PageTitle";

const pageTitle: string = "🎮 基本語法(四) - 操作";

function D6Ph3() {
  useTitle("Chicken Say Hi | phaser3 - 操作");
  return (
    <>
      <Portfolio backPath={LinkMap.PhaserPage} title={pageTitle} text={testMd} />
    </>
  );
}

export default D6Ph3;
