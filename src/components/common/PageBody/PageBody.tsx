export function PageBody() {
  return (
    <div className="max-w-screen-xl mx-auto p-8 ">
      <h2 className="text-3xl font-extrabold leading-9 border-b-2 border-gray-600 dark:border-gray-100 text-gray-800 dark:text-white mb-12">
        FAQs
      </h2>
      <ul className="flex items-start gap-8 flex-wrap">
        <li className="w-auto">
          <p className="text-lg font-medium leading-6  text-gray-900 dark:text-gray-300">
            What is a home energy rating?
          </p>
          <p className="mt-2 text-base leading-6  text-gray-500 dark:text-white">
            A home energy rating is an estimated calculation into a homes
            potential energy usage, which will determine the amount of heating
            and cooling required to make its occupants comfortable. It produces
            a star rating dependant on the amount of heating and cooling loads
            which will be required, from 0 to 10 stars.
          </p>
        </li>
      </ul>
    </div>
  );
}
