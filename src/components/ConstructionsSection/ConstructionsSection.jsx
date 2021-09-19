import s from './ConstructionsSection.module.scss';
const constructions = [
  {
    id: 1,
    name: 'Двухстворчатое окно',
    price: 3570,
    img: 'images/constructions/window2.png',
  },
  {
    id: 2,
    name: 'Трехстворчатое окно',
    price: 3570,
    img: 'images/constructions/window3.png',
  },
  {
    id: 3,
    name: 'Балконный блок',
    price: 3570,
    img: 'images/constructions/balconyBlock.png',
  },
  {
    id: 4,
    name: 'Лоджии',
    price: 3570,
    img: 'images/constructions/loggia.png',
  },
];

const ConstructionsSection = () => {
  return (
    <section className={s.section}>
      <h2 className={s.sectionTitle}>Цены на типовые конструкции</h2>

      <ul className={s.constructionList}>
        {constructions.map(construction => (
          <li key={construction.id} className={s.listItem}>
            <img
              src={construction.img}
              alt={construction.name}
              className={s.imageItem}
            />
            <div className={s.constructionDescription}>
              <h3 className={s.nameItem}>{construction.name}</h3>
              <p className={s.priceItem}> от {construction.price} грн.</p>
            </div>
          </li>
        ))}
      </ul>
      <div className={s.calculateSection}>
        <p className={s.calculateText}>
          Точный расчет окна по вашим параметрам
        </p>
        <button type="button" className={s.btn}>
          Расчитать стоимость окна
        </button>
      </div>
    </section>
  );
};
export default ConstructionsSection;
