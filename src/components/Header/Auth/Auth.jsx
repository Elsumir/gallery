import style from './Auth.module.css';
import {Text} from '../../../ui/Text';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {useDispatch, useSelector} from 'react-redux';
import {authRequestAsync} from '../../../store/auth/authAction';
import {useEffect, useState} from 'react';
import {deleteToken, tokenReduceAsync} from '../../../store/token/tokenAction';
import {useNavigate} from 'react-router-dom';
import {likeSlice} from '../../../store/like/likeSlice';
import {myLikeRequestAsync} from '../../../store/myLike/myLikeAction';

export const Auth = () => {
  const user = useSelector((state) => state.auth.name);

  let name;

  if (user) {
    name = user.name;
  }

  const token = useSelector((state) => state.token.token);

  const [btnClose, setBtnClose] = useState('dnone');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const url = window.location.href.includes('cart');

  useEffect(() => {
    dispatch(tokenReduceAsync());
  }, [token]);

  useEffect(() => {
    dispatch(authRequestAsync());
  }, [token]);

  const delToken = (e) => {
    dispatch(deleteToken());
  };

  const toggleBtn = () => {
    setBtnClose(btnClose === 'dnone' ? 'logout' : 'dnone');
  };

  const back = () => {
    navigate(`/`);
    document.body.style.overflow = 'visible';
    dispatch(likeSlice.actions.clearLike());
    if (token) {
      dispatch(myLikeRequestAsync());
    }
  };

  return (
    <>
      {url ? (
        <Text As="a" onClick={back} className={style.authName}>
          {'назад'}
        </Text>
      ) : token ? (
        <>
          <Text onClick={toggleBtn} className={style.authName}>
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
