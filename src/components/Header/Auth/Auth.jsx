import style from './Auth.module.css';
import {Text} from '../../../ui/Text';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {useToken} from '../../../../src/hooks/useToken';
import {useDispatch, useSelector} from 'react-redux';
import {authRequestAsync} from '../../../store/auth/authAction';
import {useEffect, useState} from 'react';
import {deleteToken} from '../../../store/token/tokenAction';
import {useNavigate} from 'react-router-dom';

export const Auth = () => {
  const name = useSelector((state) => state.auth.name);

  const token = useSelector((state) => state.token.token);
  // const loading = useSelector((state) => state.token.cullFunc);

  const [btnClose, setBtnClose] = useState('dnone');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const url = window.location.href.includes('cart');

  useEffect(() => {
    dispatch(authRequestAsync());
  }, [token]);

  useToken(name);

  const delToken = (e) => {
    dispatch(deleteToken());
  };

  const toggleBtn = () => {
    setBtnClose(btnClose === 'dnone' ? 'logout' : 'dnone');
  };

  const back = () => {
    navigate(-1);
    document.body.style.overflow = 'visible';
  };

  return (
    <>
      {url ? (
        <Text As="a" onClick={back} className={style.authName}>
          {'назад'}
        </Text>
      ) : token ? (
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
