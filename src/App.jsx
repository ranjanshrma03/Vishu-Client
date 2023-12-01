import './App.css';
import {
  About,
  CTA,
  Footer,
  Grow,
  Header,
  Projects,
  Services,
} from './Components';

function App() {
  return (
    <div className='container mx-auto'>
      <Header />
      <About />
      <Services />
      <Projects />
      <CTA />
      <Grow />
      <Footer />
    </div>
  );
}

export default App;
