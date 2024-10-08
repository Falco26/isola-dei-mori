import "./App.css";
import "./index.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { HomePage } from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import { appRoutes } from "./routes";
import { ApartmentPage } from "./pages/ApartmentPage";
import { ContactPage } from "./pages/Contact";
import { AboutUs } from "./pages/AboutUs";
import { useDispatch, useSelector } from "react-redux";
import { apartmentActions } from "./features/apartments/reducer";
import Footer from "./components/Footer";
import { Sustainability } from "./pages/Sustainability";
import { ScrollToTop } from "./components/ScrollToTop";
import { selectError, selectIsLoading } from "./features/apartments/selectors";
import { Loading } from "./pages/Loader";
import { Error } from "./pages/Error";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Routes>
        <Route path={appRoutes.HOME}>
          <Route index element={<HomePage />} />
          <Route path={`/:id`} element={<ApartmentPage />} />
          <Route path={appRoutes.CONTACT} element={<ContactPage />} />
          <Route path={appRoutes.ABOUT} element={<AboutUs />} />
          <Route path={appRoutes.SUSTENIBILITY} element={<Sustainability />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
