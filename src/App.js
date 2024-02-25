import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Brands from './Components/Brands';
import Services from './Components/Services';
import Casestudy from './Components/Casestudy';
import Things from './Components/Things';
import For from './Components/For';
import WhiteCards from './Components/WhiteCards';
import BlackCards from './Components/BlackCards';
import ServicesCards from './Components/ServicesCards';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Brands />
      <Services />
      <ServicesCards />
      <Things/>
      <Casestudy />
      <For />
    </div>
  );
}

export default App;
