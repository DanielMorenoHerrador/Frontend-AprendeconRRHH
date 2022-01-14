import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import Home from './Containers/Home/Home';
import Login from './Containers/Login/Login';
import Register from './Containers/Register/Register';
import Profile from './Containers/Profile/Profile';
import Hiredservices from './Containers/Hiredservices/Hiredservices';
import Profileservices from './Containers/Profileservices/Profileservices';
import Services from './Containers/Services/Services';
import Registeredusers from './Containers/Registeredusers/Registeredusers';
import Contact from './Containers/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <Nav/>

      <Routes>

  
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/hiredservices" element={<Hiredservices/>}/>
        <Route path="/profileservices" element={<Profileservices/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/registeredusers" element={<Registeredusers/>}/>
        <Route path="/contact" element={<Contact/>}/>

      </Routes>

      <Footer/>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
