import s from './MotivationSection.module.scss';

const MotivationSection = () => {
  return (
    <section className={s.motivation}>
      <h2>
        Сомневаeтесь в выборе профиля. <br />
        Получите рекомендацию специалиста.
      </h2>
      <button type="button" className={s.btn}>
        Задать вопрос специалистам
      </button>
    </section>
  );
};
export default MotivationSection;
