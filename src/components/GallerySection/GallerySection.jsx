import LeftArrow from '../../images/leftArrow.svg';
import RightArrow from '../../images/rightArrow.svg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import s from './GallerySection.module.scss';
import galleryElements from '../../data/gallery.json';

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

const GallerySection = () => {
  const settings = {
    lazyLoad: 'progressive',
    dots: true,
    centerMode: true,
    swipeToSlide: true,
    infinite: true,
    slidesToShow: 2,
    centerPadding: '318px',
    speed: 500,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 2,
          centerPadding: '318px',
        },
      },
      {
        breakpoint: 1919,
        settings: {
          slidesToShow: 2,
          centerPadding: '0px',
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          centerPadding: '0px',
        },
      },
      {
        breakpoint: 1299,
        settings: {
          slidesToShow: 1,
          centerPadding: '10px',
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
          centerPadding: '10px',
        },
      },
    ],
    appendDots: dots => (
      <div style={{ backgroundColor: 'transparent', bottom: '0px' }}>
        <ul className={s.myDots}> {dots} </ul>
      </div>
    ),
    customPaging: i => <div style={{ width: '100%', height: '100%' }}></div>,
  };

  return (
    <section className={s.section}>
      <h2 className={s.sectionTitle}> Примеры наших работ </h2>
      <div className={s.slider}>
        <Slider {...settings}>
          {galleryElements.map(element => (
            <div key={element.id} className={s.slide}>
              <img src={element.img} alt={element.description} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};
export default GallerySection;
