import { Header, Portfolio } from "../../components";
import { LinkMap } from "../../models";
import testMd from "../../note/ml/knnPython.md";
import { useTitle } from "../../utils/PageTitle";

const pageTitle: string = "🛸 1.1 knn 演算法 - python";

function KnnPython() {
  useTitle("Chicken Say Hi | 🛸 1.1 knn 演算法 - python");
  return (
    <>
      <Portfolio backPath={LinkMap.MlNote} title={pageTitle} text={testMd} />
    </>
  );
}

export default KnnPython;
