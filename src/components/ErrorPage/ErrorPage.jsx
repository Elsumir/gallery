import style from './ErrorPage.module.css';

export const ErrorPage = () => (
  <div className={style.error}>
    <h1>Ууупс!</h1>
    <p>Произлошла ошибка! Попробуйте повторить попытку позже</p>
  </div>
);
