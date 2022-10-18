import { Header, Portfolio } from "../../components";
import { LinkMap } from "../../models";
import testMd from "../../note/phaserJs/day7.md";
import { useTitle } from "../../utils/PageTitle";

const pageTitle: string = "🎮 基本語法(五) - 場景切換";

function D7Ph3() {
  useTitle("Chicken Say Hi | phaser3 - 場景切換");
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

export default D7Ph3;
