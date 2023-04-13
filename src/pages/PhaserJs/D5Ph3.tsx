import { Header, Portfolio } from "../../components";
import { LinkMap } from "../../models";
import testMd from "../../note/phaserJs/day5.md";
import { useTitle } from "../../utils/PageTitle";

const pageTitle: string = "🎮 基本語法(三) - 圖片串聯";

function D5Ph3() {
  useTitle("Chicken Say Hi | phaser3 - 圖片串聯");
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

export default D5Ph3;
