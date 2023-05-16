import About from "./Components/About";
import Clients from "./Components/Clients";
import Contact from "./Components/Contact";
import Count from "./Components/Count";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import Testimonial from "./Components/Testimonial";

function App() {
  return (
    <div>
      <Header />
      <Hero />
       <About />
      <Count />
      <Services />
      <Testimonial />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
