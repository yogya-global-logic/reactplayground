// import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import ClassComp from './Components/ClassComp';
import FuncComp from './Components/FuncComp';

import Login from './Components/Login';
import Signup from './Components/Signup';
import Day3 from './Components/Day3';
import { Routes,Route } from 'react-router-dom';
import TestLogin from './Components/TestLogin';
import ChildComp from './Components/ChildComp';
import ParentComp from './Components/ParentComp';
import Data from './Components/Data';
function App() {
  return (
    <div className="App">
{/* day 1 */}
  {/* <Home></Home> */}

  {/* day2  */}
    {/* <ClassComp></ClassComp> */}
    {/* <FuncComp></FuncComp> */}

    {/* day3  */}
    {/* <Day3></Day3>
    <TestLogin></TestLogin> */}
    {/* <Routes>
    <Route path = '/' element={<Day3/>}></Route>
    <Route path = '/login' element={<Login></Login>}></Route>
    <Route path = '/signup' element={<Signup></Signup>}></Route>
    </Routes> */}

    {/* Day4  */}
    <ParentComp></ParentComp>
    <Data></Data>
    {/* <ChildComp></ChildComp> */}
    
    </div>
  );
}

export default App;
