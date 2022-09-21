import { Header, Portfolio } from "../../components";
import { PageData, PageBodyData } from "../../models";
import testMd from "../../note/phaserJs/RpgGame/RpgGame.md";

const pageTitle: string = "🎮 Phaser3 Js";

const pageList: PageData[] = [
  {
    id: 1,
    text: "RPG Game V1",
  },
];

const pageBody: PageBodyData = {
  title: pageTitle,
  text: testMd,
};

function PhaserJs() {
  return (
    <>
      <Header />
      <Portfolio side={pageList} body={pageBody} />
    </>
  );
}

export default PhaserJs;
