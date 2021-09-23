import LeftArrow from '../../images/leftArrow.svg';
import RightArrow from '../../images/rightArrow.svg';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import s from './DiscountSection.module.scss';

const discounts = [
  { id: 1, description: 'Закажите окна для всей квартиры', discountSize: 10 },
  {
    id: 2,
    description: 'Закажите окна REHAU GENEO в сентябре',
    discountSize: 5,
  },
  { id: 3, description: 'Закажите окна WDS 5S в октябре', discountSize: 5 },
];

function NextArrow({ onClick }) {
  return (
    <div
      className={s.nextArrowBtn}
      style={{ backgroundImage: `url(${RightArrow})` }}
      onClick={onClick}
    />
  );
}

function PrevArrow({ onClick }) {
  return (
    <div
      className={s.prevArrowBtn}
      style={{ backgroundImage: `url(${LeftArrow})` }}
      onClick={onClick}
    />
  );
}

const DiscountSection = ({ onBtnClick }) => {
  const settings = {
    infinite: true,
    dots: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section className={s.section}>
      <div className={s.slider}>
        <Slider {...settings}>
          {discounts.map(discount => (
            <div key={discount.id} className={s.slide}>
              <h2 className={s.sectionTitle}>
                {`${discount.description} и получите`}
                <span> {`скидку ${discount.discountSize} %`} </span>
              </h2>
            </div>
          ))}
        </Slider>
      </div>
      <button type="button" className={s.btn} onClick={onBtnClick}>
        Задать вопрос специалистам
      </button>
    </section>
  );
};
export default DiscountSection;
