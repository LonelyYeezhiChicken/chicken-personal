import { Footer, Title, Header, HorizontalCard } from "../../components";
import { p5Js, phaserJs, ironMan13, CsharpEvent } from "./pageData";
import { useTitle } from "../../utils/PageTitle";

const pageTitle: string = "🎨 一隻雞的作品";

function Portfolio() {
  useTitle("Chicken Say Hi | 作品集");
  return (
    <>
      <Header />
      <Title text={pageTitle} />
      <section className="max-h-full overflow-auto">
        <div className="sm:flex relative z-20 items-center mt-2">
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
            <div className="flex flex-col sm:m-20"></div>
          </div>
          <div className="container mx-auto px-6 flex-col justify-between items-center relative sm:py-4 sm:mt-5">
            <div className="flex flex-col">
              <HorizontalCard
                pgId={phaserJs.id}
                title={phaserJs.title}
                content={phaserJs.content}
                imgPath={phaserJs.imgPath}
              />
            </div>
            <div className="flex flex-col">
              <HorizontalCard
                pgId={CsharpEvent.id}
                title={CsharpEvent.title}
                content={CsharpEvent.content}
                imgPath={CsharpEvent.imgPath}
              />
            </div>
            <div className="flex flex-col m-20"></div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Portfolio;
