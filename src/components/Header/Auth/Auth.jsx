import style from './Auth.module.css';
import {Text} from '../../../ui/Text';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {useToken} from '../../../../src/hooks/useToken';
import {useDispatch, useSelector} from 'react-redux';
import {authRequestAsync} from '../../../store/auth/authAction';
import {useState} from 'react';
import {deleteToken} from '../../../store/token/tokenAction';

export const Auth = () => {
  useToken();

  const token = useSelector((state) => state.token.token);
  // const loading = useSelector((state) => state.token.cullFunc);
  const name = useSelector((state) => state.auth.name);
  const [btnClose, setBtnClose] = useState('dnone');
  const dispatch = useDispatch();
  console.log(token);

  if (token) {
    dispatch(authRequestAsync(token));
  }

  const delToken = (e) => {
    dispatch(deleteToken());
  };

  const toggleBtn = () => {
    setBtnClose(btnClose === 'dnone' ? 'logout' : 'dnone');
  };

  return (
    <>
      {token ? (
        <>
          <Text As="a" onClick={toggleBtn} className={style.authName}>
            {name}

            <button onClick={delToken} className={style[btnClose]}>
              <Text As="a" href="/">
                Выйти
              </Text>
            </button>
          </Text>
        </>
      ) : (
        <Text As="a" href={urlAuth} className={style.authLink}>
          <LoginIcon className={style.svg} />
        </Text>
      )}
    </>
  );
};
