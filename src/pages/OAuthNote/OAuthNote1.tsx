import { Header, Portfolio } from "../../components";
import { LinkMap } from "../../models";
import testMd from "../../note/oAuthNote/note1.md";
import { useTitle } from "../../utils/PageTitle";

const pageTitle: string = "🔑 第一章 OAuth2.0 是什麼?";

function OAuthNote1() {
  useTitle("Chicken Say Hi | 🔑 OAuth2.0 (一)");
  return (
    <>
      <Portfolio backPath={LinkMap.OAuthNote} title={pageTitle} text={testMd} />
    </>
  );
}

export default OAuthNote1;
