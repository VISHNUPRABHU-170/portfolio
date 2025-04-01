import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Landing from "./pages/landing/Landing";
import Skills from "./pages/skills/Skills";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Landing />} />
        <Route path="skills" element={<Skills />} />
      </Routes>
    </>
  );
}
