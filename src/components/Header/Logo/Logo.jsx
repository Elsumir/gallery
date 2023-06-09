import style from './Logo.module.css';
import logo from './img/logo.svg';
import {Text} from '../../../ui/Text';

export const Logo = () => (
  <Text As="a" href="/" className={style.link}>
    <img className={style.logo} src={logo} alt="Логотип Галерии" />
  </Text>
);
