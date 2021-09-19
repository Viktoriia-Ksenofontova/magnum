import s from './AdvantagesSection.module.scss';

const advantages = [
  {
    id: 1,
    name: 'Профессиональный замер',
    description: 'Диангностика окон, смазка фурнитуры и ее регулировка',
    img: 'images/advantages/measuring.svg',
  },
  {
    id: 2,
    name: 'Соотношение цена / качество',
    description: 'Диангностика окон, смазка фурнитуры и ее регулировка',
    img: 'images/advantages/scales.svg',
  },
  {
    id: 3,
    name: 'Безопасная доставка',
    description: 'Диангностика окон, смазка фурнитуры и ее регулировка',
    img: 'images/advantages/delivery.svg',
  },
  {
    id: 4,
    name: 'Правильный монтаж',
    description: 'Диангностика окон, смазка фурнитуры и ее регулировка',
    img: 'images/advantages/window.svg',
  },
];

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
      <div className={s.measuringSection}>
        <p className={s.text}>Заявка на бесплатный вызов замерщика</p>
        <button type="button" className={s.btn}>
          Вызвать замерщика
        </button>
      </div>
    </section>
  );
};
export default AdvantagesSection;
