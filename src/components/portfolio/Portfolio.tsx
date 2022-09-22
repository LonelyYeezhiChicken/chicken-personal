import { PageBody, PageSide } from "../common";
import { PageBodyData } from "../../models";

function Portfolio({ backPath, title, text }: PageBodyData) {
  return (
    <>
      <div className="container max-h-full overflow-auto pb-10">
        <div className="sm:flex">
          <PageBody backPath={backPath} title={title} text={text} />
        </div>
      </div>
    </>
  );
}

export default Portfolio;
