import { Header, Portfolio } from "../../components";
import { LinkMap } from "../../models";
import testMd from "../../note/phaserJs/day2.md";
import { useTitle } from "../../utils/PageTitle";

const pageTitle: string = "🎮 環境";

function D2Ph3() {
  useTitle("Chicken Say Hi | phaser3 環境");
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
