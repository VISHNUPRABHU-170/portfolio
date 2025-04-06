import Header from "./components/header/Header";
import Landing from "./pages/landing/Landing";
import Experience from "./pages/experience/Experience";
import Skills from "./pages/skills/Skills";
import Projects from "./pages/projects/Projects";
import './App.css';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Landing />
        <Skills />
        <Experience />
        <Projects />
      </main>
    </>
  );
}
