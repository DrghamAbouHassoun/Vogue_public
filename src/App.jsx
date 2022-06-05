import './style/App.scss';
import Home from './pages/Home';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Products from './pages/Products';
import { useSelector } from 'react-redux/es/exports';
import Beauty from './pages/Beauty';

function App() {
  const lang = useSelector(state => state.lang.language)

  return (
      <div className={`App ${lang ? "" : "ar"}`}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="/beauty" element={<Beauty />} />
        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
