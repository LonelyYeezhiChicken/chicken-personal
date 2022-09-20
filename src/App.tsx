import { Router } from "./utils/Router";

import { useAnalytics } from "./utils/useAnalytics";

function App() {
  useAnalytics();
  return (
    <>
      <Router />
    </>
  );
}

export default App;
