import s from './AdvantagesSection.module.scss';

import advantages from '../../data/advantages.json';

const AdvantagesSection = () => {
  return (
    <section className={s.section}>
      <h2 className={s.sectionTitle}>
        Мы знаем, что для вас важно при выборе окон
      </h2>

      <ul className={s.advantagesList}>
        {advantages.map(advantage => (
          <li key={advantage.id} className={s.listItem}>
            <img
              src={advantage.img}
              alt={advantage.name}
              className={s.imageItem}
            />
            <div className={s.advantageDescription}>
              <h3 className={s.nameItem}>{advantage.name}</h3>
              <p className={s.descriptionItem}> {advantage.description} </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default AdvantagesSection;
