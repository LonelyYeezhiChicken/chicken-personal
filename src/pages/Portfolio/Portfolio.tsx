import { Title, Header, HorizontalCard } from "../../components";
import phaserImg from "../../assets/phaser.jpg";
import iron13 from "../../assets/iron13.png";
import p5Img from "../../assets/p5.png";
import { useTitle } from "../../utils/PageTitle";

type HCard = {
  id: number;
  title: string;
  content: string;
  imgPath: string;
};

const pageTitle: string = "🎨 一隻雞的作品";

const p5Js: HCard = {
  id: 1,
  title: "P5 Js",
  content: "主要為美術用途的JS",
  imgPath: p5Img,
};

const phaserJs: HCard = {
  id: 2,
  title: "phaser Js",
  content: "基於Js的遊戲引擎",
  imgPath: phaserImg,
};

const ironMan13: HCard = {
  id: 3,
  title: "第十三屆鐵人賽",
  content: "C# 雞礎觀念",
  imgPath: iron13,
};

function Portfolio() {
  useTitle("Chicken Say Hi | 作品集");
  return (
    <>
      <Header />
      <Title text={pageTitle} />
      <div className="flex relative z-20 items-center mt-5 max-h-full overflow-auto">
        <div className="container mx-auto px-6 flex-col justify-between items-center relative py-4 mt-5">
          <div className="flex flex-col">
            <HorizontalCard
              pgId={ironMan13.id}
              title={ironMan13.title}
              content={ironMan13.content}
              imgPath={ironMan13.imgPath}
            />
          </div>
          <div className="flex flex-col">
            <HorizontalCard
              pgId={p5Js.id}
              title={p5Js.title}
              content={p5Js.content}
              imgPath={p5Js.imgPath}
            />
          </div>
          <div className="flex flex-col">
            <HorizontalCard
              pgId={phaserJs.id}
              title={phaserJs.title}
              content={phaserJs.content}
              imgPath={phaserJs.imgPath}
            />
          </div>
          <div className="flex flex-col m-20"></div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
