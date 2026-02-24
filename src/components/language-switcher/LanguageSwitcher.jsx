import { useTranslation } from 'react-i18next';
import './languageSwitcher.css';
import BrazilFlag from '../../assets/flags/brazil.svg';
import USAFlag from '../../assets/flags/usa.svg';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-switcher">
      <button onClick={() => changeLanguage('pt')} className="flag-btn">
        <img src={BrazilFlag} alt="Português" />
      </button>

      <button onClick={() => changeLanguage('en')} className="flag-btn">
        <img src={USAFlag} alt="English" />
      </button>
    </div>
  );
};

export default LanguageSwitcher;