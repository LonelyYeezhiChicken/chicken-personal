import { Outlet } from "react-router-dom";

function Main() {
  return (
    <>
      <main className="dark:bg-gray-800 font-mono bg-white relative overflow-hidden h-screen">
        <Outlet />
      </main>
    </>
  );
}

export default Main;
