import { Header } from "../../common/Header.js";
// import { Main } from "./Main.jsx";
import { RealMain } from "./RealMain.jsx";
import { MainLayout } from "./MainLayout.js";

function MainPage() {
  return (
    <MainLayout>
      <RealMain />
    </MainLayout>
  );
}

export default MainPage;
