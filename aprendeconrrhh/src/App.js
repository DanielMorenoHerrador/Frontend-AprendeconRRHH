import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Containers/Home/Home';
import Login from './Containers/Login/Login';



function App() {
  return (
    <div className="App">
      <BrowserRouter>


<Routes>

  
  <Route path="/" element={<Home/>}/>
  <Route path="/login" element={<Login/>}/>


</Routes>

</BrowserRouter>
      
    </div>
  );
}

export default App;
