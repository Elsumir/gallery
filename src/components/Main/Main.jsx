import {useEffect, useRef} from 'react';
import {Card} from './Card/Card';
import style from './Main.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {dataRequestAsync} from '../../store/photos/photosActions';

export const Main = () => {
  const data = useSelector((state) => state.data.data);

  const dispatch = useDispatch();

  const endCart = useRef(null);
  let page = 1;

  useEffect(() => {
    if (!data.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          ++page;
          dispatch(dataRequestAsync(page));
        }
      },
      {
        rootMargin: '100px',
      }
    );

    observer.observe(endCart.current);
  }, [endCart.current]);

  return (
    <>
      <div className={style.gallery}>
        {data.map((data) => (
          <Card key={data.id} data={data} />
        ))}
        <div ref={endCart} className={style.end}></div>
      </div>
    </>
  );
};
