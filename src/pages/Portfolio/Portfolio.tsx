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
  Webapi4Net,
  ThreeJs,
} from "./pageData";
import { useTitle } from "../../utils/PageTitle";

const pageTitle: string = "🎨 一隻雞的作品";

function Portfolio() {
  useTitle("Chicken Say Hi | 作品集");

  const renderHorizontalCard = (cardData: any) => {
    return (
      <div className="flex flex-col">
        <div className="card-animation">
          <HorizontalCard
            pgId={cardData.id}
            title={cardData.title}
            content={cardData.content}
            imgPath={cardData.imgPath}
          />
        </div>
      </div>
    );
  };

  return (
    <>
      <Header />
      <Title text={pageTitle} />
      <section className="max-h-full overflow-auto">
        <div className="sm:flex relative z-20 items-center mt-2">
          <div className="container mx-auto px-6 flex-col justify-between items-center relative py-4 mt-5">
            {renderHorizontalCard(ironMan13)}
            {renderHorizontalCard(p5Js)}
            {renderHorizontalCard(OAuthNote)}
            {renderHorizontalCard(Ml)}
            {/* {renderHorizontalCard(NunitTest)} */}
            {renderHorizontalCard(Webapi4Net)}
            <div className="flex flex-col sm:m-20"></div>
          </div>
          <div className="container mx-auto px-6 flex-col justify-between items-center relative sm:py-4 sm:mt-5">
            {renderHorizontalCard(phaserJs)}
            {renderHorizontalCard(CsharpEvent)}
            {renderHorizontalCard(DesignPattern)}
            {renderHorizontalCard(Daylily)}
            {renderHorizontalCard(ThreeJs)}
            <div className="flex flex-col m-20"></div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Portfolio;
