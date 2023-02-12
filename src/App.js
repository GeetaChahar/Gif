import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Share1 from './component/Share1';
import Share2 from './component/Share2';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Share1 />} />
          <Route path='/share' element={<Share2 />} />
        </Routes>

        {/* { <Share1 />
    <Share2 />} */}
      </BrowserRouter>
    </div>
  );
}

export default App;
