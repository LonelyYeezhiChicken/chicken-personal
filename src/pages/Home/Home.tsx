import { Header, InputForm, GoTo } from "../../components/home";
import { useTitle } from "../../utils/PageTitle";

function Home() {
  useTitle("Chicken Say Hi | Home");
  return (
    <div className="h-screen">
      <GoTo />
      <Header />
      <InputForm />
    </div>
  );
}
