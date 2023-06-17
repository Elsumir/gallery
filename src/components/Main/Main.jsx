import {Card} from './Card/Card';
import style from './Main.module.css';
// import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
export const Main = () => {
  const data = useSelector((state) => state.data.data);
  return (
    <div className={style.gallery}>
      {data.map((data) => (
        <Card key={data.id} data={data} />
      ))}
    </div>
  );
};
