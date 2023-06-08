import { useNavigate } from "react-router-dom";
import { LinkMap } from "../../../models";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

type Props = {
  pgId: number;
  title: string;
  content: string;
  imgPath: string;
};

enum Page {
  P5Js,
  PhaserJs,
}

export function HorizontalCard({ pgId, title, content, imgPath }: Props) {
  const navigate = useNavigate();
  function goToPage(page: number) {
    let path: string = "/";
    switch (page) {
      case 1:
        path = LinkMap.P5Js.toString();
        break;
      case 2:
        path = LinkMap.PhaserPage.toString();
        break;
      case 3:
        path = LinkMap.IronMan13.toString();
        break;
      case 4:
        path = LinkMap.CsharpEventHome.toString();
        break;
      case 5:
        path = LinkMap.OAuthNote.toString();
        break;
      case 6:
        path = LinkMap.UnitNote.toString();
        break;
      case 7:
        path = LinkMap.DesignPattern.toString();
        break;
      case 8:
        path = LinkMap.MlNote.toString();
        break;
      case 9:
        path = LinkMap.DaylilyNote.toString();
        break;
      case 10:
        path = LinkMap.Webapi4Net.toString();
        break;
      case 11:
        path = LinkMap.ThreeJs.toString();
        break;
    }
    navigate(path);
  }

  return (
    <div className="flex bg-white shadow-lg rounded-lg overflow-hidden m-5 p-5">
      <div className="w-1/3 bg-cover bg-landscape">
        <LazyLoadImage alt="" src={imgPath} className="w-90 sm:h-40 h-32 object-contain" effect="blur" />
      </div>
      <div className="w-2/3 p-4">
        <h1 className="text-gray-900 font-bold text-3xl">{title}</h1>
        <p className="mt-2 text-gray-600 text-md">{content}</p>
        <div className="flex item-center justify-end mt-3">
          <button
            className="px-3 py-2 bg-gray-800 text-white text-md font-bold uppercase rounded "
            onClick={() => goToPage(pgId)}
          >
            Go
          </button>
        </div>
      </div>
    </div>
  );
}
