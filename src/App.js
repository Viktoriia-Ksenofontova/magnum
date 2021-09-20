import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SystemsSection from './components/SystemsSection';
import MotivationSection from './components/MotivationSection';
import ConstructionsSection from './components/ConstructionsSection';
import AdvantagesSection from './components/AdvantagesSection';
import Footer from './components/Footer';
import Modal from './components/Modal';
import FormWriteUs from './components/FormWriteUs';
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
  const handleBtnCalLMeasurer = () => {
    setShowModal(true);
    setShowFormCallMeasurer(true);
    document.body.style.overflow = 'hidden';
  };

  return (
    <>
      <div className="App">
        <Header
          onBtnCalculateClick={handleBtnCalculate}
          onBtnCallMeasurer={handleBtnCalLMeasurer}
        />
        <Hero />
        <SystemsSection />
        <MotivationSection onBtnClick={handleBtnWriteUsClick} />
        <ConstructionsSection />
        <AdvantagesSection />
        <Footer onBtnClick={handleBtnWriteUsClick} />
      </div>
      {showModal && (
        <Modal onCloseModal={handleCloseModal}>
          {showFormWriteUs ? (
            <FormWriteUs modalClose={handleCloseModal} />
          ) : showFormCalculate ? (
            <p>Расчитать стоимость</p>
          ) : showFormCallMeasurer ? (
            <p>Вызвать замерщика</p>
          ) : null}
        </Modal>
      )}
      )}
    </>
  );
}

export default App;
