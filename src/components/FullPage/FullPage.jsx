/* eslint-disable operator-linebreak */
import {useParams} from 'react-router-dom';
import style from './FullPage.module.css';
import {Header} from '../Header/Header';
import {Text} from '../../ui/Text';
import {ReactComponent as Heart} from '../Main/Card/img/24037.svg';
import {useDispatch, useSelector} from 'react-redux';
import {likeRequestAsync} from '../../store/like/likeAction';
import {useEffect} from 'react';
import {fullPageRequestAsync} from '../../store/fullPage/fullPageAction';
import {ErrorPage} from '../ErrorPage/ErrorPage';

export const FullPage = () => {
  const {id} = useParams();
  const carts = useSelector((state) => state.data.data);
  const status = useSelector((state) => state.data.status);
  const token = useSelector((state) => state.token.token);
  const like = useSelector((state) => state.like.like);
  // const status = useSelector((state) => state.like.status);
  const trueLike = useSelector((state) => state.fullPage.page);
  const load = useSelector((state) => state.fullPage.loading);
  const cart = carts.find((cart) => cart.id === id);
  const url = window.location.href.includes('cart');
  const dispatch = useDispatch();

  const date = cart ? cart.date.split('T')[0] : '';

  useEffect(() => {
    if (token) {
      dispatch(fullPageRequestAsync(id));
    }
  }, [token]);

  const toggleLike = () => {
    if (token) {
      dispatch(likeRequestAsync(id));
    } else {
      alert('авторизуйтесь');
    }
  };

  let trueMyLike;
  let trueCount;
  let newLikeCount;
  let likeId;
  let newLike = '';

  if (like) {
    newLikeCount = like.countLike;
    newLike = like.like;
    likeId = like.bool;
  }
  if (trueLike) {
    trueCount = trueLike.likes;
    trueMyLike = trueLike.liked_by_user;
  }

  const likes = () => {
    let result;
    if (load) return;
    if (newLike === undefined || newLike === '') {
      result = trueMyLike ? 'likesActive' : 'likes';
    } else {
      result = newLike ? 'likesActive' : 'likes';
    }

    return result;
  };
  const count = () => {
    let result;
    if (load) return;
    if (newLike === undefined || newLike === '') {
      result = trueLike ? trueCount : cart.likes;
    } else {
      result = likeId === id ? newLikeCount : cart.likes;
    }

    return result;
  };

  if (url) {
    document.body.style.overflow = 'hidden';
  }

  return (
    <>
      {status || !cart ? (
        <ErrorPage />
      ) : (
        <div className={style.overlay}>
          <div className={style.fullPage}>
            <Header />
            <div className={style.fulPageInfo}>
              <div className={style.contentInfo}>
                <Text
                  className={style.userName}
                  As="a"
                  target="_blank"
                  href={cart.address}
                >
                  {cart.userName}
                </Text>
                <Text className={style.date}>{date ? date : ''}</Text>
              </div>
              <div className={style.likeInfo}>
                <Heart className={style[likes()]} />
                <Text onClick={toggleLike} className={style.countLike}>
                  {!token ? cart.likes : load ? '' : count()}
                </Text>
              </div>
            </div>
            <img className={style.fullImg} src={cart.fullImg} />
          </div>
        </div>
      )}
    </>
  );
};
