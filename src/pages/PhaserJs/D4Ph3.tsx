import { Header, Portfolio } from "../../components";
import { LinkMap } from "../../models";
import testMd from "../../note/phaserJs/day4.md";
import { useTitle } from "../../utils/PageTitle";

const pageTitle: string = "🎮 基本語法(二) - 圖片";

function D4Ph3() {
  useTitle("Chicken Say Hi | phaser3 - 圖片");
  return (
    <>
      <Header />
      <Portfolio
        backPath={LinkMap.PhaserPage}
        title={pageTitle}
        text={testMd}
      />
    </>
  );
}

export default D4Ph3;
