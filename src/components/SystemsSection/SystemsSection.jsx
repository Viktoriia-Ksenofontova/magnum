import LeftArrow from '../../images/leftArrow.svg';
import RightArrow from '../../images/rightArrow.svg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import s from './SystemsSection.module.scss';

import systems from '../../data/systems.json';

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className={s.nextArrowBtn}
      style={{ backgroundImage: `url(${RightArrow})` }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className={s.prevArrowBtn}
      style={{ backgroundImage: `url(${LeftArrow})` }}
      onClick={onClick}
    />
  );
}

const SystemsSection = ({ onBtnCalculateClick }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    lazyLoad: 'progressive',
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1919,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1299,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className={s.section}>
      <h2 className={s.sectionTitle}>
        Работаем с лучшими профильными системами
      </h2>

      <div className={s.systemsList}>
        <Slider {...settings}>
          {systems.map(system => (
            <div key={system.id} className={s.listItem}>
              <div className={s.imageWrapper}>
                <img
                  src={system.img}
                  alt={system.title}
                  className={s.systemImage}
                />
              </div>

              <h3 className={s.systemName}>{system.title}</h3>
              <p className={s.description}>{system.description}</p>
              <button
                type="button"
                className={s.itemBtn}
                onClick={onBtnCalculateClick}
              >
                Заявка на просчет
              </button>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};
export default SystemsSection;
