import "./App.css";
import "./index.css";
import { HeroHeader } from "./components/HeroHeader";
import { Stack } from "./components/Stack";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ApartmentsCarousel } from "./components/ApartmentsCarousel";
import { apartments } from "./api/mocks";
import { Text } from "./components/Text";
import { HomePage } from "./pages/HomePage";

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;
