import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import About from './pages/About';
import Policy from './pages/Policy';
import Contact from './pages/Contact';
import Pagenotfound from './pages/Pagenotfound';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';
import Dashboard from './pages/user/Dashboard';
import PrivateRoute from './components/Routes/Private';
import Orders from './pages/user/Orders';
import Profile from './pages/user/Profile';
import Menu from './pages/Menu';
import Choose from './pages/Auth/Choose';
import Pay from './pages/Admin/Pay';
import VendorRoute from './components/Routes/VendorRoute';

const greeterAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<PrivateRoute />}>
          <Route path='' element={<Dashboard />} />
          <Route path='orders' element={<Orders />} />
          <Route path='profile' element={<Profile />} />
        </Route>
        <Route path='/vendor' element={<VendorRoute />}>
          <Route path='' element={<Pay />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/choose' element={<Choose />} />
        <Route path='/about' element={<About />} />
        <Route path='/policy' element={<Policy />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Pagenotfound />} />
      </Routes>

    </>
  );
}

export default App;
