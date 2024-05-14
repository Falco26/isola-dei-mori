import "./App.css";
import "./index.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { HomePage } from "./pages/HomePage";
import { Header } from "./components/Header";
import { Route, Routes } from "react-router-dom";
import { appRoutes } from "./routes";
import { Home } from "@mui/icons-material";
import { ApartmentPage } from "./pages/ApartmentPage";
import { ContactPage } from "./pages/Contact";
import { AboutUs } from "./pages/AboutUs";

gsap.registerPlugin(ScrollTrigger);

function App() {
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
    </div>
  );
}

export default App;
