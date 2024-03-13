import React from "react";
import About from "./components/About"
import Contact from "./components/Contact"
import NavBar from "./components/NavBar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"

export default function App() {
  return (
    <main ClassName="text-gray-300 bg-sky-800 body-font">
      <Navbar />
      <About />
      <Projects />
      <Contact  />
      <Skills />
    </main>
  );
}
