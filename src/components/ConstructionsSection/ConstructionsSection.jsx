import s from './ConstructionsSection.module.scss';

import constructions from '../../data/constructions.json';

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
    </section>
  );
};
export default ConstructionsSection;
