import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {tokenReduceAsync} from '../store/token/tokenAction';

export const useToken = () => {
  const code = useSelector((state) => state.token.code);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(tokenReduceAsync(code));
  }, [code]);

  return code;
};
