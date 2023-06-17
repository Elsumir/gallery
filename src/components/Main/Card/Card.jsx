import style from './Card.module.css';
import {Text} from '../../../ui/Text';
import PropTypes from 'prop-types';
// import img from './img/notphoto.jpg';
import {ReactComponent as Heart} from './img/24037.svg';
// .replaceAll(/a-z,A-Z/g, '')
export const Card = ({data}) => {
  const date = data.date.split('T')[0];

  // const date = data.date
  //   .split('')
  //   .join()
  //   .replaceAll(/T|Z|/g, ',')
  //   .replaceAll(',', '');
  return (
    <Text As="a" href="/" className={style.linkImage}>
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
    </Text>
  );
};

Card.propTypes = {
  data: PropTypes.object,
};
