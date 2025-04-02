import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Landing from "./pages/landing/Landing";
import Skills from "./pages/skills/Skills";
import Projects from "./pages/projects/Projects";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Landing />} />
        <Route path="skills" element={<Skills />} />
        <Route path="projects" element={<Projects />} />
      </Routes>
    </>
  );
}
