import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SystemsSection from './components/SystemsSection';
import MotivationSection from './components/MotivationSection';
import ConstructionsSection from './components/ConstructionsSection';
import CalculateSection from './components/CalculateSection';
import AdvantagesSection from './components/AdvantagesSection';
import MeasuringSection from './components/MeasuringSection';
import Footer from './components/Footer';
import Modal from './components/Modal';
import FormWriteUs from './components/FormWriteUs';
import FormCallMeasurer from './components/FormCallMeasurer';
import FormCalculate from './components/FormCalculate';
import DiscountSection from './components/DiscountSection';
import StepsSection from './components/StepsSection';
import './App.scss';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showFormWriteUs, setShowFormWriteUs] = useState(false);
  const [showFormCalculate, setShowFormCalculate] = useState(false);
  const [showFormCallMeasurer, setShowFormCallMeasurer] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
    setShowFormWriteUs(false);
    setShowFormCalculate(false);
    setShowFormCallMeasurer(false);
    document.body.style.overflow = 'scroll';
  };
  const handleBtnWriteUsClick = () => {
    setShowModal(true);
    setShowFormWriteUs(true);
    document.body.style.overflow = 'hidden';
  };
  const handleBtnCalculate = () => {
    setShowModal(true);
    setShowFormCalculate(true);
    document.body.style.overflow = 'hidden';
  };
  const handleBtnCallMeasurer = () => {
    setShowModal(true);
    setShowFormCallMeasurer(true);
    document.body.style.overflow = 'hidden';
  };

  return (
    <>
      <div className="App">
        <Header
          onBtnCalculateClick={handleBtnCalculate}
          onBtnCallMeasurer={handleBtnCallMeasurer}
        />
        <Hero />
        <SystemsSection onBtnCalculateClick={handleBtnCalculate} />
        <MotivationSection onBtnClick={handleBtnWriteUsClick} />
        <ConstructionsSection />
        <CalculateSection onBtnClick={handleBtnCalculate} />
        <AdvantagesSection />
        <MeasuringSection onBtnClick={handleBtnCallMeasurer} />
        <DiscountSection onBtnClick={handleBtnWriteUsClick} />
        <StepsSection />
        <CalculateSection onBtnClick={handleBtnCalculate} />
        <Footer onBtnClick={handleBtnWriteUsClick} />
      </div>
      {showModal && (
        <Modal onCloseModal={handleCloseModal}>
          {showFormWriteUs ? (
            <FormWriteUs modalClose={handleCloseModal} />
          ) : showFormCalculate ? (
            <FormCalculate modalClose={handleCloseModal} />
          ) : showFormCallMeasurer ? (
            <FormCallMeasurer modalClose={handleCloseModal} />
          ) : null}
        </Modal>
      )}
    </>
  );
}

export default App;
