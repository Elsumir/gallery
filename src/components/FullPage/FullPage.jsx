import {useParams} from 'react-router-dom';
import style from './FullPage.module.css';
import {useSelector} from 'react-redux';
import {Header} from '../Header/Header';
import {Text} from '../../ui/Text';
import {ReactComponent as Heart} from '../Main/Card/img/24037.svg';

export const FullPage = () => {
  const {id} = useParams();
  const carts = useSelector((state) => state.data.data);
  const cart = carts.find((cart) => cart.id === id);
  console.log(cart);
  console.log(id);
  console.log(style);
  const date = cart.date.split('T')[0];
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
            <Heart className={style.likes} />
            <span className={style.countLike}>{cart.likes}</span>
          </div>
        </div>
        <img className={style.fullImg} src={cart.fullImg} />
      </div>
    </div>
  );
};
