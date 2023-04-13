import { Outlet } from "react-router-dom";
import { Header } from "../../components";

function Main() {
  return (
    <>
      <Header />
      <main className="dark:bg-gray-800 font-mono bg-amber-100 relative overflow-hidden min-h-screen">
        <Outlet />
      </main>
    </>
  );
}

export default Main;
