/* eslint-disable operator-linebreak */
import style from './Card.module.css';
import {Text} from '../../../ui/Text';
import PropTypes from 'prop-types';
import {ReactComponent as Heart} from './img/24037.svg';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

export const Card = ({data}) => {
  const id = data.id;
  const myLike = useSelector((state) => state.myLike.myLike);
  const date = data.date.split('T')[0];

  let likes = data.likes;

  if (myLike) {
    const obl = myLike.find((e) => e.id === id);
    if (obl) {
      likes = obl.totalLike;
    }
  }

  return (
    <Link className={style.linkImage} to={`/cart/${id}`}>
      <div className={style.content}>
        <div className={style.userInfo}>
          <Text
            As="a"
            target="_blank"
            href={data.address}
            className={style.userName}
          >
            {data.userName}
          </Text>
          <Text className={style.date}>{date}</Text>
        </div>
        <div className={style.likeInfo}>
          <Heart className={style.likes} />
          <span className={style.countLike}>{likes}</span>
        </div>
      </div>
      <img className={style.img} src={data.thumbnail} />
    </Link>
  );
};

Card.propTypes = {
  data: PropTypes.object,
};
