import { Header, Portfolio } from "../../components";
import { LinkMap } from "../../models";
import testMd from "../../note/unitTest/note1.md";
import { useTitle } from "../../utils/PageTitle";

const pageTitle: string = "📋 第一章 單元測試的基礎";

function OAuthNote1() {
  useTitle("Chicken Say Hi | 📋 Unit test (一)");
  return (
    <>
      <Portfolio backPath={LinkMap.UnitNote} title={pageTitle} text={testMd} />
    </>
  );
}

export default OAuthNote1;
