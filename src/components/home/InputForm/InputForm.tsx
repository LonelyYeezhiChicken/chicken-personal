import chicken from "../../../assets/chicken.jpg";

export function InputForm() {
  return (
    <div className="flex relative z-20 items-center">
      <div className="container mx-auto px-6 flex flex-col justify-between items-center relative py-4">
        <div className="flex flex-col">
          <img src={chicken} className="rounded-full w-28 mx-auto" />
          <p className="text-3xl my-6 text-center dark:text-white">
            Hi, I&#x27;m Chicken π
          </p>
          <h2 className="max-w-3xl text-5xl md:text-6xl font-bold mx-auto dark:text-white text-gray-800 text-center py-2">
            ιζ―ε­€η¨δΈι»ιη
            <br />
            ζδΊε°ε€©ε°
          </h2>
        </div>
      </div>
    </div>
  );
}
