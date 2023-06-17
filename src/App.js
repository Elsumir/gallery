import {useDispatch} from 'react-redux';
import {Header} from './components/Header/Header';
import {Main} from './components/Main/Main';
import {Route, Routes} from 'react-router-dom';
import {updateCode} from './store/token/tokenAction';
import {getCode} from './api/token';
import {dataRequestAsync} from './store/photos/photosActions';

const App = () => {
  const dispatch = useDispatch();
  dispatch(dataRequestAsync());
  dispatch(updateCode(getCode()));
  return (
    <>
      <Routes>
        <Route
          path="*"
          element={
            <>
              <Header />
              <Main />
            </>
          }
        ></Route>
      </Routes>
    </>
  );
};

export default App;
