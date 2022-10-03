import { Header, PageSide } from "../../components";
import { useTitle } from "../../utils/PageTitle";
import { pageList } from "./pageData";

function OAuthNote() {
  useTitle("Chicken Say Hi | OAuth2.0");
  return (
    <>
      <Header />
      <PageSide list={pageList} />
    </>
  );
}

export default OAuthNote;
