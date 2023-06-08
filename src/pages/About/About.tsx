import { Header, Footer } from '../../components/home';
import chicken from '../../assets/chicken.jpg';
import { useTitle } from '../../utils/PageTitle';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function About() {
  useTitle('Chicken Say Hi | About');
  return (
    <>
      <section className="relative pt-16 bg-blueGray-50 max-h-full overflow-auto ">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-78">
              <div className="flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg dark:bg-amber-200 bg-amber-500">
                <LazyLoadImage
                  alt="..."
                  src={chicken}
                  className="w-full align-middle rounded-md max-h-62 p-5"
                  effect="blur"
                />
                <div className="p-5 mb-4 flex flex-col gap-y-3">
                  <h4 className="text-xl font-bold text-white dark:text-gray-700">孤獨一隻雞</h4>
                  <p className="text-xl font-bold text-white dark:text-gray-700">
                    I'm a backend developer.
                  </p>
                  <p> 我是一隻平凡無奇的雞，每天過著平凡無奇的生活</p>
                  <p className="cursor-pointer">
                    <a href="mailto:lonelyyeezhichicken@gmail.com">
                      e-mail: lonelyyeezhichicken@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-6/12 px-4 dark:text-gray-300 text-gray-600">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full  bg-pink-300 text-4xl text-gray-800">
                        🖼
                      </div>
                      <h6 className="text-xl mb-1 font-semibold ">Front-end</h6>
                      <ul className="mb-4 text-blueGray-500 list-decimal list-inside">
                        <li>Vue JS</li>
                        <li>Vanilla JS</li>
                        <li>TypeScript</li>
                        <li>React JS</li>
                        <li>Knockout JS</li>
                        <li>Tailwind Css</li>
                      </ul>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-cyan-300 text-4xl text-gray-800">
                        🛠
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">Framework</h6>
                      <ul className="mb-4 text-blueGray-500 list-decimal list-inside">
                        <li>Asp.net5</li>
                        <li>.NET 6</li>
                        <li>Spring Boot</li>
                        <li>Flask</li>
                        <li>Phaser 3</li>
                        <li>Laravel</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-purple-300 text-2xl text-gray-800">
                        🔧
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">Back-end</h6>
                      <ul className="mb-4 text-blueGray-500 list-decimal list-inside">
                        <li>C#</li>
                        <li>Java</li>
                        <li>Python</li>
                        <li>PHP</li>
                        <li>MATLAB</li>
                        <li>...</li>
                      </ul>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-gray-300 text-2xl text-gray-800">
                        📗
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">DB & Others</h6>
                      <ul className="mb-4 text-blueGray-500 list-decimal list-inside">
                        <li>MSSQL</li>
                        <li>MySQL</li>
                        <li>Oracle</li>
                        <li>Docker</li>
                        <li>Message Queue</li>
                        <li>PLC</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default About;
