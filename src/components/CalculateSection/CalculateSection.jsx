import s from './CalculateSection.module.scss';

const CalculateSection = ({ onBtnClick }) => {
  return (
    <section className={s.calculateSection}>
      <h2 className={s.calculateText}>
        Точный расчет окна по вашим параметрам
      </h2>
      <button type="button" className={s.btn} onClick={onBtnClick}>
        Рассчитать стоимость окна
      </button>
    </section>
  );
};
export default CalculateSection;
