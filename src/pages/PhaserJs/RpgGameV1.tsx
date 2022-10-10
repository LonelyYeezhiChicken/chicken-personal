import { Header, Portfolio } from "../../components";
import { LinkMap } from "../../models";
import testMd from "../../note/phaserJs/RpgGame/RpgGame.md";
import { useTitle } from "../../utils/PageTitle";

const pageTitle: string = "🎮 RPG Game v1";

function RpgGameV1() {
  useTitle("Chicken Say Hi | RPG Game");
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

export default RpgGameV1;
