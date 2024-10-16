import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <section id="howWork" className="h-screen">
        Como funciona?
      </section>
      <section id="planes" className="h-screen">
        Planos
      </section>
      <section id="resources" className="h-screen">
        Recursos
      </section>
      <section id="needHelp" className="h-screen">
        Precisa de ajuda?
      </section>
      <Footer />
    </>
  );
}

export default App;
