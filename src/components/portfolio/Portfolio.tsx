import { PageBody, PageSide } from "../common";
import { PortfolioData } from "../../models";

function Portfolio({ side, body }: PortfolioData) {
  return (
    <>
      <div className="flex">
        <div className="w-1/4 sm:w-1/5">
          <PageSide list={side} />
        </div>
        <div className="w-3/4 sm:w-4/5">
          <PageBody title={body.title} text={body.text} />
        </div>
      </div>
    </>
  );
}

export default Portfolio;
