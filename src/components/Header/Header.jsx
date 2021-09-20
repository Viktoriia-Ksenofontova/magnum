import logo from '../../images/logo.svg';
import { ReactComponent as VodafoneIcon } from '../../images/vodafoneIcon.svg';
import s from './Header.module.scss';
const Header = ({ onBtnCalculateClick, onBtnCallMeasurer }) => {
  return (
    <header className={s.header}>
      <img src={logo} alt="logo" className={s.logo} />
      <nav>
        <button
          type="button"
          className={s.navButton}
          onClick={onBtnCallMeasurer}
        >
          вызов замерщика
        </button>
        <button
          type="button"
          className={s.navButton}
          onClick={onBtnCalculateClick}
        >
          расчитать стоимость
        </button>
      </nav>

      <address>
        <a href="tel:+38(050) 505 70 20" className={s.addressLink}>
          <VodafoneIcon className={s.vodafonIcon} />
          (050) 505 70 20
        </a>
      </address>
    </header>
  );
};
export default Header;
