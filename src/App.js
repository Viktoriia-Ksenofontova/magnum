import Header from './components/Header';
import Hero from './components/Hero';
import SystemsSection from './components/SystemsSection';
import MotivationSection from './components/MotivationSection';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <SystemsSection />
      <MotivationSection />
    </div>
  );
}

export default App;
