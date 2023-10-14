import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Search from './Pages/Search';
import Livemap from './Pages/Livemap';
import Ordersdashboard from './Pages/Ordersdashboard';
import Rtohq from './Pages/Rtohq';
import Content from './Pages/Content';
import Promotiontools from './Pages/Promotiontools';
import Promocodes from './Pages/Promocodes';
import Cities from './Pages/Cities';
import Countries from './Pages/Countries';
import Billinginvoicing from './Pages/Billing&invoicing';
import Tags from './Pages/Tags';
import Glovocares from './Pages/Glovocares';
import Subscriptions from './Pages/Subscriptions';
import Errorpage from './Pages/Errorpage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/search' element={<Search />} />
        <Route path='/livemap' element={<Livemap />} />
        <Route path='/ordersdashboard' element={<Ordersdashboard />} />
        <Route path='/rtohq' element={<Rtohq />} />
        <Route path='/content' element={<Content />} />
        <Route path='/promotiontools' element={<Promotiontools />} />
        <Route path='/promocodes' element={<Promocodes />} />
        <Route path='/cities' element={<Cities />} />
        <Route path='/countries' element={<Countries />} />
        <Route path='/billing&invoicing' element={<Billinginvoicing />} />
        <Route path='/tags' element={<Tags />} />
        <Route path='/glovocares' element={<Glovocares />} />
        <Route path='/subscriptions' element={<Subscriptions />} />
        <Route path='*' element={<Errorpage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
