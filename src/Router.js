import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Nomination from "./components/Nomination";
import NotFound from "./components/NotFound";
import Categories from "./components/Categories";
import Events from "./components/Events";
import PastWinners from "./components/PastWinners";
import Contact from "./components/Contact";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nomination" element={<Nomination />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/events" element={<Events />} />
        <Route path="/past-winners" element={<PastWinners />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
