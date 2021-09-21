import { useState, createRef, useEffect } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import Swal from 'sweetalert2';
import s from './FormCallMeasurer.module.scss';

const FormCallMeasurer = ({ modalClose }) => {
  const key = '6LerbXwcAAAAABEQuKmmam4W8X1_f9UvbmC7HDN7';
  const recaptchaRef = createRef();
  const [token, setToken] = useState('');
  const [name, setName] = useState('');
  const [telephone, setTelephone] = useState('');
  const [isActiveButton, setActiveButton] = useState(false);

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
      case 'name':
        setName(value);
        break;
      case 'telephone':
        setTelephone(value);
        break;
      default:
        return;
    }
  };

  const onSubmit = event => {
    event.preventDefault();
    const userMessage = { name, telephone, token };

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Заявка отправлена',
      showConfirmButton: false,
      timer: 1500,
    });

    //TODO отправка данных ...
    console.log(userMessage);
    reset();
    modalClose();
  };

  const reset = () => {
    setName('');
    setTelephone('');
    setToken('');
    setActiveButton(false);
  };

  function onChangeCaptcha(value) {
    setToken(value);
  }

  return (
    <>
      <h2 className={s.title}>Вызвать замерщика</h2>
      <form onSubmit={onSubmit} className={s.form} autoComplete="off">
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

        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={key}
          onChange={onChangeCaptcha}
          className={s.recaptcha}
        />

        <button type="submit" className={s.btn} disabled={!isActiveButton}>
          Отправить
        </button>
      </form>
    </>
  );
};
export default FormCallMeasurer;
