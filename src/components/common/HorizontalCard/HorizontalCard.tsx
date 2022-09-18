import { useNavigate } from "react-router-dom";
import { LinkMap } from "../../../models";

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
        path = LinkMap.Continue.toString();
        break;
    }
    navigate(path);
  }

  return (
    <div className="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden m-5">
      <div className="w-1/3 bg-cover bg-landscape">
        <img src={imgPath} className="w-90 h-40" />
      </div>
      <div className="w-2/3 p-4">
        <h1 className="text-gray-900 font-bold text-3xl">{title}</h1>
        <p className="mt-2 text-gray-600 text-md">{content}</p>
        <div className="flex item-center justify-end mt-3">
          <button
            className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded"
            onClick={() => goToPage(pgId)}
          >
            Go
          </button>
        </div>
      </div>
    </div>
  );
}
