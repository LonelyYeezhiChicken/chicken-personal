import { Header } from "../../components/home";
import build from "../../assets/Build.png";
import { useNavigate } from "react-router-dom";
import { LinkMap } from "../../models";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Continue() {
  const navigate = useNavigate();
  const goHome = () => {
    navigate(LinkMap.Home.toString());
  };

  return (
    <>
      <div className="container mx-auto h-screen pt-32 md:pt-0 px-6 z-10 flex items-center justify-between">
        <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row justify-between items-center relative">
          <div className="w-full mb-16 md:mb-8 text-center lg:text-left">
            <h1 className="font-light font-sans text-center lg:text-left text-5xl lg:text-8xl mt-12 md:mt-0 text-gray-700 dark:text-white">
              Sorry, 此功能還在施工中喔!
            </h1>
            <button
              className="px-2 py-2 w-36 mt-16 font-light transition ease-in duration-200 hover:bg-yellow-400 border-2 text-lg border-gray-700 bg-yellow-300 focus:outline-none rounded"
              onClick={goHome}
            >
              先回雞舍等
            </button>
          </div>
          <div className="block w-full mx-auto md:mt-0 relative max-w-md lg:max-w-2xl">
            <LazyLoadImage src={build} className="rounded-lg" effect="blur" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Continue;
