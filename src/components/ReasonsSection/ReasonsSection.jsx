import s from './ReasonsSection.module.scss';
const reasons = [
  {
    id: '01',
    title: 'Бесплатное обслуживание',
    description: 'Диагностика окон, смазка фурнитуры и ее регулировка',
  },
  {
    id: '02',
    title: 'Высокое качество товара',
    description: 'Работаем только с лучшими и надежными производителями',
  },
  {
    id: '03',
    title: 'Ответственный подход к делу',
    description: 'Наши сотрудники профессионалы своего дела',
  },
  {
    id: '04',
    title: 'Квалифицированный персонал',
    description: 'Предоставляем гарантии на наши окна',
  },
  {
    id: '05',
    title: 'Низкие цены',
    description: 'Имеем большой ассортимент продукции',
  },
  {
    id: '06',
    title: 'Бесплатное обслуживание',
    description: 'Диагностика окон, смазка фурнитуры и ее регулировка',
  },
  {
    id: '07',
    title: 'Бесплатное обслуживание',
    description: 'Диангностика окон, смазка фурнитуры и ее регулировка',
  },
  {
    id: '08',
    title: 'Бесплатное обслуживание',
    description: 'Диангностика окон, смазка фурнитуры и ее регулировка',
  },
  {
    id: '09',
    title: 'Бесплатное обслуживание',
    description: 'Диангностика окон, смазка фурнитуры и ее регулировка',
  },
  {
    id: '10',
    title: 'Бесплатное обслуживание',
    description: 'Диангностика окон, смазка фурнитуры и ее регулировка',
  },
];
const ReasonsSection = () => {
  return (
    <section className={s.section}>
      <h2 className={s.sectionTitle}>10 причин почему нас рекомендуют</h2>
      <div className={s.reasonsMain}>
        <ul className={s.reasonsList}>
          {reasons.map(
            (reason, index) =>
              index < 5 && (
                <li className={s.reasonItem}>
                  <span>{reason.id}</span>
                  <div>
                    <h3 className={s.reasonTitle}> {reason.title} </h3>
                    <p className={s.reasonDescription}>
                      {' '}
                      {reason.description}{' '}
                    </p>
                  </div>
                </li>
              ),
          )}
        </ul>

        <ul className={s.reasonsList}>
          {reasons.map(
            (reason, index) =>
              index > 4 && (
                <li className={s.reasonItem}>
                  <span>{reason.id}</span>
                  <div>
                    <h3 className={s.reasonTitle}> {reason.title} </h3>
                    <p className={s.reasonDescription}>
                      {' '}
                      {reason.description}{' '}
                    </p>
                  </div>
                </li>
              ),
          )}
        </ul>
      </div>
    </section>
  );
};
export default ReasonsSection;
