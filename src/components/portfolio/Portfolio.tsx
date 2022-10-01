import { PageBody } from "../common";
import { Footer } from "../home";
import { PageBodyData } from "../../models";

function Portfolio({ backPath, title, text }: PageBodyData) {
  return (
    <>
      <section className="container max-h-full overflow-auto pb-10">
        <div className="sm:flex">
          <PageBody backPath={backPath} title={title} text={text} />
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Portfolio;
