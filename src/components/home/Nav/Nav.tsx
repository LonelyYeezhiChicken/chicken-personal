export function Nav() {
  return (
    <div className="flex items-center">
      <nav className="font-sen text-gray-800 dark:text-white uppercase text-lg lg:flex items-center hidden">
        <a href="#" className="py-2 px-6 flex hover:text-black">
          Works
        </a>
        <a href="#" className="py-2 px-6 flex hover:text-black">
          Resume
        </a>
        <a href="#" className="py-2 px-6 flex hover:text-black">
          Services
        </a>
        <a href="#" className="py-2 px-6 flex hover:text-black">
          Contact
        </a>
      </nav>
      <button className="lg:hidden flex flex-col ml-4">
        <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
        <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
        <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
      </button>
    </div>
  );
}
