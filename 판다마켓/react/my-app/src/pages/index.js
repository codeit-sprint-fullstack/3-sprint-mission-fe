import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemsPage } from "./items/ItemsPage.js";
import MainPage from "./main/MainPage.js";
import RegistrationPage from "./registration/RegistrationPage.jsx";
import { NoticeBoard } from "./noticeboard/NoticeBoard.jsx";
import { PostRegistration } from "./postregistration/PostRegistration.jsx";
import { Header } from "../common/Header.js";
import { NullPage } from "./null/nullpage.js";
import { Footer } from "../common/Footer.jsx";

export function Pages() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="items" element={<ItemsPage />} />
        <Route path="noticeboard" element={<NoticeBoard />} />
        <Route path="postregistration" element={<PostRegistration />} />
        <Route path="registration" element={<RegistrationPage />} />
        <Route path="null" element={<NullPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
