import { ReactComponent as Arrow } from '../../images/downArrow.svg';
import illustration from '../../images/illustration.png';
import s from './Hero.module.scss';

const Hero = () => {
  const handleArrowBtnClick = () => {
    window.scrollTo({
      top: document.documentElement.clientHeight,
      behavior: 'smooth',
    });
  };
  return (
    <section className={s.hero}>
      <div className={s.heroContent}>
        <h1 className={s.title}>
          Металлопластиковые <br />
          окна в Херсоне
        </h1>
        <h2 className={s.subtitle}>"Когда цель - качественные окна"</h2>
        <ul className={s.heroList}>
          <li className={s.listItem}>
            <span>15</span>
            <p>
              лет <br />
              на рынке
            </p>
          </li>
          <li className={s.listItem}>
            <span>8</span>
            <p>брендов окон</p>
          </li>
          <li className={s.listItem}>
            <span>5</span>
            <p>
              лет <br />
              гарантии
            </p>
          </li>
        </ul>
        <Arrow className={s.heroBtn} onClick={handleArrowBtnClick} />
      </div>
      <img src={illustration} alt="window in focus" />
    </section>
  );
};
export default Hero;
