import { Footer, Title, Header, HorizontalCard } from "../../components";
import {
  p5Js,
  phaserJs,
  ironMan13,
  CsharpEvent,
  OAuthNote,
  NunitTest,
  DesignPattern,
  Ml,
  Daylily,
} from "./pageData";
import { useTitle } from "../../utils/PageTitle";

const pageTitle: string = "π¨ δΈι»ιηδ½ε";

function Portfolio() {
  useTitle("Chicken Say Hi | δ½ει");
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
            <div className="flex flex-col">
              <HorizontalCard
                pgId={OAuthNote.id}
                title={OAuthNote.title}
                content={OAuthNote.content}
                imgPath={OAuthNote.imgPath}
              />
            </div>
            <div className="flex flex-col">
              <HorizontalCard
                pgId={Ml.id}
                title={Ml.title}
                content={Ml.content}
                imgPath={Ml.imgPath}
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
            {/* <div className="flex flex-col">
              <HorizontalCard
                pgId={NunitTest.id}
                title={NunitTest.title}
                content={NunitTest.content}
                imgPath={NunitTest.imgPath}
              />
            </div> */}
            <div className="flex flex-col">
              <HorizontalCard
                pgId={DesignPattern.id}
                title={DesignPattern.title}
                content={DesignPattern.content}
                imgPath={DesignPattern.imgPath}
              />
            </div>
            <div className="flex flex-col">
              <HorizontalCard
                pgId={Daylily.id}
                title={Daylily.title}
                content={Daylily.content}
                imgPath={Daylily.imgPath}
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
