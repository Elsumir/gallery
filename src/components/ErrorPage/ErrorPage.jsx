import {useSelector} from 'react-redux';
import style from './ErrorPage.module.css';

export const ErrorPage = () => {
  const error = useSelector((state) => state.data.error);
  return (
    <div className={style.error}>
      <h1>Ууупс!</h1>
      <p>
        {`Произлошла ошибка: ${error} ! Попробуйте повторить попытку позже`}
      </p>
    </div>
  );
};
