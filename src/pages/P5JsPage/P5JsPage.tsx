import { Title, Header, HorizontalCard } from "../../components";
import phaserImg from "../../assets/phaser.jpg";
import p5Img from "../../assets/p5.png";

type HCard = {
  id: number;
  title: string;
  content: string;
  imgPath: string;
};

const pageTitle: string = "🎨 一隻雞的作品 - P5 Js";

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

function P5JsPage() {
  return (
    <>
      <Header />
      <Title text={pageTitle} />
      <div className="flex relative z-20 items-center mt-5">
        <div className="container mx-auto px-6 flex-col justify-between items-center relative py-4">
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
        </div>
      </div>
    </>
  );
}

export default P5JsPage;
