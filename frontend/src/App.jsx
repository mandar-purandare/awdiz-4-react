import './App.css';
import Homepage from './components/Homepage';
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile';
import State from './components/State';
import { Routes, Route } from 'react-router-dom';
import Effect1 from './components/13-09/Effect1';
import Effect2 from './components/13-09/Effect2';
import Effect3 from './components/15-09/Effect3';
import Effect4 from './components/15-09/Effect4';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/state' element={<State/>}/>
        <Route path='/effect1' element={<Effect1/>}/>
        <Route path='/effect2' element={<Effect2/>}/>
        <Route path='/effect3' element={<Effect3/>}/>
        <Route path='/effect4' element={<Effect4/>}/>
      </Routes>
    </div>
  );
}

export default App;
