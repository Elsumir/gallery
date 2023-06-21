import {useParams} from 'react-router-dom';
import style from './FullPage.module.css';
import {Header} from '../Header/Header';
import {Text} from '../../ui/Text';
import {ReactComponent as Heart} from '../Main/Card/img/24037.svg';
// import {likeRequestAsync} from '../../store/like/likeAction';
import {useDispatch, useSelector} from 'react-redux';
import {likeRequestAsync} from '../../store/like/likeAction';

export const FullPage = () => {
  const {id} = useParams();
  const carts = useSelector((state) => state.data.data);
  const like = useSelector((state) => state.like.like);
  console.log(like);
  const cart = carts.find((cart) => cart.id === id);
  const date = cart.date.split('T')[0];
  const url = window.location.href.includes('cart');
  const dispatch = useDispatch();
  const likes = like ? 'likesActive' : 'likes';

  const toggleLike = () => {
    dispatch(likeRequestAsync(id));
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
              {cart.likes}
            </Text>
          </div>
        </div>
        <img className={style.fullImg} src={cart.fullImg} />
      </div>
    </div>
  );
};
