import { Header, Portfolio } from "../../components";
import { LinkMap } from "../../models";
import testMd from "../../note/phaserJs/day9.md";
import { useTitle } from "../../utils/PageTitle";

const pageTitle: string = "🎮 基本語法(七) - 動畫";

function D9Ph3() {
  useTitle("Chicken Say Hi | 基本語法(七) - 動畫");
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

export default D9Ph3;
