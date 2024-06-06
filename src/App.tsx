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
import { useDispatch } from "react-redux";
import { apartmentActions } from "./features/apartments/reducer";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const dispatch = useDispatch();

  dispatch(apartmentActions.initApp());
  return (
    <div className="App">
      <Routes>
        <Route path={appRoutes.HOME}>
          <Route index element={<HomePage />} />
          <Route path={`/:id`} element={<ApartmentPage />} />
          <Route path={appRoutes.CONTACT} element={<ContactPage />} />
          <Route path={appRoutes.ABOUT} element={<AboutUs />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
