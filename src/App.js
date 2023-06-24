import {useDispatch} from 'react-redux';
import {Header} from './components/Header/Header';
import {Main} from './components/Main/Main';
import {Route, Routes} from 'react-router-dom';
import {updateCode} from './store/token/tokenAction';
import {getCode} from './api/token';
import {dataRequestAsync} from './store/photos/photosActions';
import {FullPage} from './components/FullPage/FullPage';

const App = () => {
  const dispatch = useDispatch();

  dispatch(updateCode(getCode()));
  dispatch(dataRequestAsync());
  return (
    <>
      <Routes>
        <Route
          path="*"
          element={
            <>
              <Header />
              <Main />
              <Routes>
                <Route path="/cart/:id" element={<FullPage />} />
              </Routes>
            </>
          }
        ></Route>
      </Routes>
    </>
  );
};

export default App;
