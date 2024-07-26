import logo from './logo.svg';
import './App.css';
import SignUp from './components/SignUp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import AddPost from './components/AddPost';
import Viewall from './components/Viewall';
import ViewMyPost from './components/ViewMyPost';

function App() {
  return (
    
        <BrowserRouter>
        <Routes>
        <Route path='/' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/add' element={<AddPost/>}/>          
          <Route path='/viewall' element={<Viewall/>}/>          
          <Route path='/mypost' element={<ViewMyPost/>}/>          
        </Routes>
        </BrowserRouter>
  );
}

export default App;
