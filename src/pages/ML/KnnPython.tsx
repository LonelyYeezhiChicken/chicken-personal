import { Header, Portfolio } from "../../components";
import { LinkMap } from "../../models";
import testMd from "../../note/oAuthNote/note1.md";
import { useTitle } from "../../utils/PageTitle";

const pageTitle: string = "🛸 1.1 knn 演算法 - python";

function KnnPython() {
  useTitle("Chicken Say Hi | 🛸 1.1 knn 演算法 - python");
  return (
    <>
      <Header />
      <Portfolio backPath={LinkMap.OAuthNote} title={pageTitle} text={testMd} />
    </>
  );
}

export default KnnPython;
