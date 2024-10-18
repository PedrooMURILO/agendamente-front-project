import "./App.css";
import Footer from "./components/Footer";
import HowWork from "./components/home/HowWork";
import NeedHelp from "./components/home/NeedHelp";
import Resources from "./components/home/Resources";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <HowWork />
      <Resources />
      <NeedHelp />
      <Footer />
    </>
  );
}

export default App;
