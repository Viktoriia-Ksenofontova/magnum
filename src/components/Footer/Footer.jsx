import { ReactComponent as PhoneIcon } from '../../images/phoneIcon.svg';
import { ReactComponent as MailIcon } from '../../images/mailIcon.svg';
import { ReactComponent as AddressIcon } from '../../images/addressIcon.svg';
import { ReactComponent as LogoExtraweb } from '../../images/logoExtraweb.svg';
import s from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.about}>
        <h3 className={s.subtitle}>О нас</h3>
        <p>Приветствуем Вас на сайте компании «Окна Магнум»!</p>
        <p>
          Мы занимаемся продажей и установкой пластиковых окон, изготовлением
          оконных конструкций на заказ, остеклением и утеплением балконов и
          лоджий.
        </p>
        <p>
          Заказывая пластиковое окно, остекление балкона или лоджии у нас, Вы
          получаете весь спектр услуг, начиная с замера и монтажа и заканчивая
          диагностикой, ремонтом и обслуживанием Ваших конструкций.
        </p>
      </div>
      <div className={s.contacts}>
        <h3 className={s.subtitle}>Контакты</h3>
        <address>
          <ul className={s.contactsList}>
            <li className={s.contactItem}>
              <AddressIcon className={s.icon} />
              г.Херсон, ул.Ушакова, 3
            </li>
            <li className={s.contactItem}>
              <a href="tel:+38(050) 505 70 20" className={s.link}>
                <PhoneIcon className={s.icon} />
                (050) 505 70 20
              </a>
            </li>
            <li className={s.contactItem}>
              <a href="mailto:info@example.com" className={s.link}>
                <MailIcon className={s.icon} />
                info@example.com
              </a>
            </li>
          </ul>
        </address>
        <button type="button" className={s.btn}>
          Написать нам
        </button>
      </div>
      <div className={s.copyright}>
        <p>© 2021 Окна Магнум</p>
        <span>Создание сайтов</span>
        <LogoExtraweb className={s.logo} />
      </div>
    </footer>
  );
};
export default Footer;
