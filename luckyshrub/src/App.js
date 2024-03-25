import "./App.css";
import Header from "./components/Header";

import Top from "./components/Top";
import Services from "./components/Services";
import Aboutus from "./components/Aboutus";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <main>
        <Header />
        <Navbar />
        <Top />
        <Services />
        <Aboutus />
        <Contact />
      </main>

      <br />
      <Footer />
    </>
  );
}

export default App;
