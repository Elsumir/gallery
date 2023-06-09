import style from './Auth.module.css';
import {Text} from '../../../ui/Text';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {useToken} from '../../hooks/useToken';

export const Auth = () => {
  const [code] = useToken();
  console.log(code);

  return (
    <Text As="a" href={urlAuth} className={style.authLink}>
      <LoginIcon className={style.svg} />
    </Text>
  );
};
