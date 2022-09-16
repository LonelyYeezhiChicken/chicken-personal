
export function Header() {
  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <div className="text-blueGray-light">
          <span>test</span>
          <a href='#' target="_blank" rel="noopener noreferrer" className="link">
            link
          </a>
        </div>
      </div>

      <div className="text-blueGray">blueGray</div>

      <div className=" text-2xl font-black uppercase text-teal md:text-5xl">Body Composition</div>
    </div>
  );
}