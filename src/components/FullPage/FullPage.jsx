import {useParams} from 'react-router-dom';
import style from './FullPage.module.css';
import {Header} from '../Header/Header';
import {Text} from '../../ui/Text';
import {ReactComponent as Heart} from '../Main/Card/img/24037.svg';
import {useDispatch, useSelector} from 'react-redux';
import {likeRequestAsync} from '../../store/like/likeAction';
import {myLikeRequestAsync} from '../../store/myLike/myLikeAction';
import {useEffect} from 'react';

export const FullPage = () => {
  const {id} = useParams();
  const carts = useSelector((state) => state.data.data);
  const like = useSelector((state) => state.like.like);
  const myLike = useSelector((state) => state.myLike.myLike);
  const token = useSelector((state) => state.token.token);
  const user = useSelector((state) => state.auth.name);
  const cart = carts.find((cart) => cart.id === id);
  const date = cart.date.split('T')[0];
  const url = window.location.href.includes('cart');
  const dispatch = useDispatch();

  let yesLike;
  // let givenObject = [];
  let nik;
  let incLike;
  let incCount;

  let countLike;

  if (like) {
    countLike = like.countLike;
    yesLike = like.like;
  }

  console.log(countLike);

  if (user) {
    nik = user.nik;
  }

  if (myLike) {
    incLike = myLike.map((e) => e.id).includes(id);
    incCount = myLike.find((obj) => obj.id === id);
  }

  console.log(incCount);

  const likes = yesLike || incLike ? 'likesActive' : 'likes';

  useEffect(() => {
    if (token) {
      dispatch(myLikeRequestAsync(nik));
    }
  }, [token]);

  const toggleLike = () => {
    if (token) {
      dispatch(likeRequestAsync(id));
      dispatch(myLikeRequestAsync(nik));
    } else {
      alert('авторизуйтесь');
    }
  };

  if (url) {
    document.body.style.overflow = 'hidden';
  }

  return (
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
            <Text className={style.date}>{date}</Text>
          </div>
          <div className={style.likeInfo}>
            <Heart className={style[likes]} />
            <Text onClick={toggleLike} className={style.countLike}>
              {like ? countLike : cart.likes}
            </Text>
          </div>
        </div>
        <img className={style.fullImg} src={cart.fullImg} />
      </div>
    </div>
  );
};
