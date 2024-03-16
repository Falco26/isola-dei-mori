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

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={"/"}>
          <Route index element={<HomePage />} />
          <Route
            path={`${appRoutes.APARTMENTS}/:id`}
            element={<ApartmentPage />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
