import { Header, Portfolio } from "../../components";
import { LinkMap } from "../../models";
import testMd from "../../note/phaserJs/day3.md";
import { useTitle } from "../../utils/PageTitle";

const pageTitle: string = "🎮 基本語法(一) - 靜態資源";

function D2Ph3() {
  useTitle("Chicken Say Hi | phaser3 - 靜態資源");
  return (
    <>
      <Portfolio
        backPath={LinkMap.PhaserPage}
        title={pageTitle}
        text={testMd}
      />
    </>
  );
}

export default D2Ph3;
