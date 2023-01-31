import { Routes, Route } from 'react-router-dom';

import Login from './pages/login';
import Sign_in from './pages/sign_in';
import Home from './pages/home';
import Shop from './pages/shop';
import Blog from './pages/blog';
import Contacts from './pages/contacts';
import Condition from './pages/condition';
import Delivery from './components/delivery';
import Guaranty from './components/guaranty';
import Change from './components/change';


function App() {
  return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/condition/' element={<Condition />} >
          <Route path='delivery' element={<Delivery />} />
          <Route path='guaranty' element={<Guaranty />} />
          <Route path='change' element={<Change/>} />
        </Route>
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/login' element={<Login />} />
        <Route path='/sign_in' element={<Sign_in />} />
      </Routes> 
  );
}

export default App;
