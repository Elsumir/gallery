import style from './Header.module.css';
import {Logo} from './Logo/Logo';
import Layout from '../Layout/';
import Auth from './Auth';

export const Header = () => (
  <header className={style.header}>
    <Layout>
      <div className={style.wrapper}>
        <Logo />
        <Auth />
      </div>
    </Layout>
  </header>
);
