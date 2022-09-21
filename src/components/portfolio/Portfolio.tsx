import { PageBody, PageSide } from "../common";
import { PortfolioData } from "../../models";

function Portfolio({ side, body }: PortfolioData) {
  return (
    <>
      <div className="container max-h-full overflow-auto pb-10">
        <div className="flex">
          <div className="w-1/4 sm:w-1/4">
            <PageSide list={side} />
          </div>
          <div className="w-3/4 sm:w-3/4">
            <PageBody title={body.title} text={body.text} />
          </div>
        </div>
        <div className="m-10">感謝閱讀</div>
      </div>
    </>
  );
}

export default Portfolio;
