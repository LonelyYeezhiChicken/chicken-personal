type Props = {
  text?: string;
};

export function Title({ text }: Props) {
  return (
    <h1 className="uppercase text-gray-800 dark:text-white font-black text-2xl sm:text-3xl flex items-center ml-5">
      {text}
    </h1>
  );
}
