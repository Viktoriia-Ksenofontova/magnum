import LeftArrow from '../../images/leftArrow.svg';
import RightArrow from '../../images/rightArrow.svg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import s from './SystemsSection.module.scss';

const systems = [
  {
    id: 1,
    title: 'Rehau geneo',
    description:
      'Экономвариант, ничего лишнего, отлично выполняет свою функцию, сохраняет тепло и изолирует от шума',
    img: 'images/systems/rehauGeneo.png',
  },
  {
    id: 2,
    title: 'WDS 5S',
    description:
      'Экономвариант, ничего лишнего, отлично выполняет свою функцию, сохраняет тепло и изолирует от шума',
    img: 'images/systems/wds5s.png',
  },
  {
    id: 3,
    title: 'Wintech 753',
    description:
      'Экономвариант, ничего лишнего, отлично выполняет свою функцию, сохраняет тепло и изолирует от шума',
    img: 'images/systems/wintech753.png',
  },
  {
    id: 4,
    title: 'Aluplast 2000',
    description:
      'Экономвариант, ничего лишнего, отлично выполняет свою функцию, сохраняет тепло и изолирует от шума',
    img: 'images/systems/aluplast2000.png',
  },
  {
    id: 5,
    title: 'Kömmerling 88',
    description:
      'Экономвариант, ничего лишнего, отлично выполняет свою функцию, сохраняет тепло и изолирует от шума',
    img: 'images/systems/kommerling88.png',
  },
  {
    id: 6,
    title: 'Osnova premium',
    description:
      'Экономвариант, ничего лишнего, отлично выполняет свою функцию, сохраняет тепло и изолирует от шума',
    img: 'images/systems/osnovaPremium.png',
  },
  {
    id: 7,
    title: 'Aluplast 2000',
    description:
      'Экономвариант, ничего лишнего, отлично выполняет свою функцию, сохраняет тепло и изолирует от шума',
    img: 'images/systems/aluplast2000.png',
  },
];

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
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
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
                  loading="lazy"
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
