import style from './Auth.module.css';
import {Text} from '../../../ui/Text';
import {ReactComponent as LoginIcon} from './img/login.svg';

export const Auth = () => {
  console.log();
  return (
    <Text As="a" href="/" className={style.authLink}>
      <LoginIcon className={style.svg} />
    </Text>
  );
};
