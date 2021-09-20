import s from './MeasuringSection.module.scss';

const MeasuringSection = ({ onBtnClick }) => {
  return (
    <section className={s.measuringSection}>
      <h2 className={s.text}>Заявка на бесплатный вызов замерщика</h2>
      <button type="button" className={s.btn} onClick={onBtnClick}>
        Вызвать замерщика
      </button>
    </section>
  );
};
export default MeasuringSection;
