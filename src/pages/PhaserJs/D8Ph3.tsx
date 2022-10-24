import { Header, Portfolio } from "../../components";
import { LinkMap } from "../../models";
import testMd from "../../note/phaserJs/day8.md";
import { useTitle } from "../../utils/PageTitle";

const pageTitle: string = "🎮 基本語法(六) - 群組化物件";

function D8Ph3() {
  useTitle("Chicken Say Hi | phaser3 - 群組化物件");
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

export default D8Ph3;
