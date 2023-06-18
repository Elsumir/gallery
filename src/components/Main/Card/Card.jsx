import style from './Card.module.css';
import {Text} from '../../../ui/Text';
import PropTypes from 'prop-types';
// import img from './img/notphoto.jpg';
import {ReactComponent as Heart} from './img/24037.svg';
import {Link} from 'react-router-dom';
// .replaceAll(/a-z,A-Z/g, '')
export const Card = ({data}) => {
  const date = data.date.split('T')[0];

  const id = data.id;

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
          <span className={style.countLike}>{data.likes}</span>
        </div>
      </div>
      <img className={style.img} src={data.thumbnail} />
    </Link>
  );
};

Card.propTypes = {
  data: PropTypes.object,
};
