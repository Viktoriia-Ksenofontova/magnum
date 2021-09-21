import { useState, createRef, useEffect } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import Swal from 'sweetalert2';
import s from './FormCalculate.module.scss';

const FormCalculate = ({ modalClose }) => {
  const key = '6LerbXwcAAAAABEQuKmmam4W8X1_f9UvbmC7HDN7';
  const recaptchaRef = createRef();
  const [token, setToken] = useState('');
  const [isActiveButton, setActiveButton] = useState(false);
  const [name, setName] = useState('');
  const [telephone, setTelephone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');
  const [construction, setConstruction] = useState('default');
  const [profile, setProfile] = useState('default');
  const [windowType, setWindowType] = useState('default');

  useEffect(() => {
    if (token) {
      setActiveButton(true);
      return;
    }
    setActiveButton(false);
  }, [token]);

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'construction':
        setConstruction(value);
        break;
      case 'width':
        setWidth(value);
        break;
      case 'height':
        setHeight(value);
        break;
      case 'profile':
        setProfile(value);
        break;
      case 'windowType':
        setWindowType(value);
        break;
      case 'message':
        setMessage(value);
        break;
      case 'name':
        setName(value);
        break;
      case 'telephone':
        setTelephone(value);
        break;
      case 'email':
        setEmail(value);
        break;

      default:
        return;
    }
  };

  const onSubmit = event => {
    event.preventDefault();
    const userMessage = {
      construction,
      width,
      height,
      profile,
      windowType,
      message,
      name,
      telephone,
      email,
      token,
    };

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Ваше сообщение отправлено',
      showConfirmButton: false,
      timer: 1500,
    });

    //TODO отправка данных ...
    console.log(userMessage);
    reset();
    modalClose();
  };

  const reset = () => {
    setConstruction('default');
    setProfile('default');
    setWindowType('default');
    setWidth('');
    setHeight('');
    setMessage('');
    setName('');
    setTelephone('');
    setEmail('');
    setToken('');
    setActiveButton(false);
  };

  function onChangeCaptcha(value) {
    setToken(value);
  }

  return (
    <>
      <h2 className={s.title}>Расчитать стоимость</h2>

      <form onSubmit={onSubmit} className={s.form} autoComplete="off">
        <select
          value={construction}
          name="construction"
          className={s.selection}
          onChange={handleChange}
          required
        >
          <option value="default" disabled hidden className={s.defaultOption}>
            Выберите вид конструкции*
          </option>
          <option value="Двухстворчатое окно">Двухстворчатое окно</option>
          <option value="Трехстворчатое окно">Трехстворчатое окно</option>
          <option value="Балконный блок">Балконный блок</option>
          <option value="Лоджии">Лоджии</option>
        </select>
        <div className={s.size}>
          <label htmlFor="width">
            <input
              id="width"
              type="text"
              name="width"
              placeholder="Ширина (мм)*"
              value={width}
              className={s.inputSize}
              required
              onChange={handleChange}
            />
          </label>
          <label htmlFor="height">
            <input
              id="height"
              type="text"
              name="height"
              placeholder="Высота (мм)*"
              value={height}
              className={s.inputSize}
              required
              onChange={handleChange}
            />
          </label>
        </div>

        <select
          value={profile}
          name="profile"
          className={s.selection}
          onChange={handleChange}
          required
        >
          <option value="default" disabled hidden className={s.defaultOption}>
            Профиль*
          </option>
          <option value="Rehau geneo">Rehau geneo</option>
          <option value="WDS 5S">WDS 5S</option>
          <option value="Wintech 753">Wintech 753</option>
          <option value="Aluplast 2000">Aluplast 2000</option>
          <option value="Kömmerling 88">Kömmerling 88</option>
          <option value="Osnova premium">Osnova premium</option>
        </select>
        <select
          value={windowType}
          name="windowType"
          className={s.selection}
          onChange={handleChange}
          required
        >
          <option value="default" disabled hidden className={s.defaultOption}>
            Стеклопакет*
          </option>
          <option value="Однокамерный">Однокамерный</option>
          <option value="Двухкамерный">Двухкамерный</option>
          <option value="Трехкамерный">Трехкамерный</option>
        </select>

        <label htmlFor="message">
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Дополнительные пожелания"
            className={s.textareaForm}
            value={message}
            onChange={handleChange}
          />
        </label>
        <div className={s.userData}>
          <label htmlFor="name">
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Ваше имя*"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              value={name}
              className={s.inputForm}
              required
              onChange={handleChange}
            />
          </label>
          <label htmlFor="phone">
            <input
              id="phone"
              type="tel"
              name="telephone"
              placeholder="Ваш телефон*"
              pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
              title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
              value={telephone}
              className={s.inputForm}
              required
              onChange={handleChange}
            />
          </label>
          <label htmlFor="email">
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Ваш e-mail"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              value={email}
              className={s.inputForm}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className={s.controlData}>
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={key}
            onChange={onChangeCaptcha}
            className={s.recaptcha}
          />

          <button type="submit" className={s.btn} disabled={!isActiveButton}>
            Рассчитать
          </button>
        </div>
      </form>
    </>
  );
};
export default FormCalculate;
