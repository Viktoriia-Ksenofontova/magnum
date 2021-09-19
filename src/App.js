import Header from './components/Header';
import Hero from './components/Hero';
import SystemsSection from './components/SystemsSection';
import MotivationSection from './components/MotivationSection';
import ConstructionsSection from './components/ConstructionsSection';
import AdvantagesSection from './components/AdvantagesSection';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <SystemsSection />
      <MotivationSection />
      <ConstructionsSection />
      <AdvantagesSection />
    </div>
  );
}

export default App;
