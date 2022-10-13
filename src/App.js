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
import Day5 from './Components/Day5';
import Uncontrolled from './Day9/Uncontrolledcomp';
import Uncontrolledcomp from './Day9/Uncontrolledcomp';
import ControlledComp from './Day9/ControlledComp';
import Lifecycle from './Day9/Lifecycle';
import MyChart from './Day10/MyChart';
import Formik from './Day10/Formik';
function App() {
  return (
    <div className="App">
{/* day 1 */}
{/* <h1 className='my-2 bg-danger text-light p-1'>Day1</h1> */}
  {/* <Home></Home> */}

  {/* day2  */}
  {/* <h1 className='my-2 bg-danger text-light p-1'>Day 2</h1> */}
    {/* <ClassComp></ClassComp> */}
    {/* <FuncComp></FuncComp> */}

    {/* day3  */}
    {/* <h1 className='my-2 bg-danger text-light p-1'>Day 3</h1> */}
    {/* <Day3></Day3> */}
    {/* <TestLogin></TestLogin> */}
    {/* <Routes>
    <Route path = '/' element={<Day3/>}></Route>
    <Route path = '/login' element={<Login></Login>}></Route>
    <Route path = '/signup' element={<Signup></Signup>}></Route>
    </Routes> */}

    {/* Day4  */}
    {/* <h1 className='my-2 bg-danger text-light p-1'>Day 4</h1>
    <ParentComp></ParentComp>
    <Data></Data> */}
    {/* <ChildComp></ChildComp> */}
    
    {/* day5 */}
    {/* <h1 className='my-2 bg-danger text-light p-1'>Day 5</h1> */}
    {/* <Day5></Day5> */}

    {/* {Day9} */}
    {/* <h1 className='my-2 bg-danger text-light p-1'>Day 9</h1>
    <Uncontrolledcomp></Uncontrolledcomp>
    <ControlledComp></ControlledComp>
    <Lifecycle></Lifecycle> */}
    
    {/* Day10 */}
    <MyChart></MyChart>
    <Formik></Formik>
    </div>
  );
}

export default App;
