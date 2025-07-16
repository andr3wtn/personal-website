import Landing from "./components/Landing";
import About from "./components/About";
import Project from "./components/Projects/Project";
import Experience from "./components/Experience";
import Contact from "./components/Contact"

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-[#e3f2fd] to-[#a7ffeb]">
      <Landing />

      <About />

      <Project />

      <Experience />

      <Contact />
    </main>
  );
}
