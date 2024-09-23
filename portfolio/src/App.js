import NavBar from "./components/navBar/navBar";
import Landing from "./components/landing/landing";
import Skills from "./components/skills/skills";
import Projects from "./components/projects/projects";
import Footer from "./components/footer/footer";
import Contact from "./components/contact/contact";
function App() {
  return (
    <div className="App">
      <NavBar/ >
      <Landing/ >
      <Skills/ >
      <Projects/ >
      <Contact />
      <Footer />
    </div>
  );
}


export default App;
