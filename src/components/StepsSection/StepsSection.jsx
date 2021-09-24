import s from './StepsSection.module.scss';

const steps = [
  {
    id: '01',
    title: 'Заполните форму',
    description:
      'Наши специалисты сделают все нужные замеры в удобное Вам время для определения стоимости окон и дальнейшего заключения договора',
  },
  {
    id: '02',
    title: 'Выезд на зaмер',
    description:
      'Наши специалисты сделают все нужные замеры в удобное Вам время для определения стоимости окон и дальнейшего заключения договора',
  },
  {
    id: '03',
    title: 'Заключение договора и оплата',
    description:
      'Заключается договор, после чего производится оплата, и заказ изготавливается',
  },
  {
    id: '04',
    title: 'Изготовление',
    description:
      'В течении 7 дней Ваш заказ будет готов к последующей установке',
  },
  {
    id: '05',
    title: 'Доставка и установка',
    description:
      'Доставка и установка производится после согласования удобных для Вас Даты и времени',
  },
];

const StepsSection = () => {
  return (
    <section className={s.section}>
      <h2 className={s.sectionTitle}>5 простых шагов к вашим новым окнам</h2>

      <ul className={s.stepsList}>
        {steps.map(step => (
          <li key={step.id} className={s.listItem}>
            <span>{step.id}</span>
            <h3 className={s.nameItem}>{step.title}</h3>
            <p className={s.descriptionItem}> {step.description} </p>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default StepsSection;
