import { Header } from "./container/Header";
import { Main } from "./container/Main";
import { MainLayout } from "./common/Layout";

function App() {
  return (
    <MainLayout>
      <Header />
      <Main />
    </MainLayout>
  );
}

export default App;
