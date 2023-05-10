import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Menu from './component/menu/menu';
import Hello from './component/task1/hello';
import Congrats from './component/task2/congrats';
import Cricket from './component/task3/cricket';
import Social from './component/task4/social';
import Notification from './component/task5/notification';
import Login from './component/task6/login';
import Technology from './component/task7/technology';
import Hooks from './component/task8/hooks';
import Fruitcounter from './component/task9/fruitcounter';
import Feedbackapp from './component/task10/feedbackapp';
import Feedbacknext from './component/task10/feedbacknext';
import Localjson from './component/json.js/json';
import Fakeapi from './component/json.js/fakeapi';
import Database from './component/json.js/database';
import { Protmenu } from './component/protfolio/protmenu/protmenu';
import { Home } from './component/protfolio/home/home';
import { About } from './component/protfolio/about/about';
import { Certification } from './component/protfolio/certification/certification';
import { Education } from './component/protfolio/education/education';
import { Skills } from './component/protfolio/skills/skills';
import { Contact } from './component/contact/contact';


function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={[<Menu/>,<Hello/>]}/>
      <Route path='/congrats' element={[<Menu/>,<Congrats/>]}/>
      <Route path='/cricket' element={[<Menu/>,<Cricket/>]}/>
      <Route path='/social' element={[<Menu/>,<Social/>]}/>
      <Route path='/notification' element={[<Menu/>,<Notification/>]}/>
      <Route path='/login' element={[<Menu/>,<Login/>]}/>
      <Route path='/technology' element={[<Menu/>,<Technology/>]}/>
      <Route path='/hooks' element={[<Menu/>,<Hooks/>]}/>
      <Route path='/fruitcounter' element={[<Menu/>,<Fruitcounter/>]}/>
      <Route path='/feedbackapp' element= {[<Menu/>,<Feedbackapp/>]}/>
      <Route path='/feedbackapp/feedbacknext' element= {[<Feedbacknext/>]}/>
      <Route path='/json' element={[<Menu/>,<Localjson/>]}/>
      <Route path='/fakeapi' element={[<Menu/>,<Fakeapi/>]}/>
      <Route path='/database' element={[<Menu/>,<Database/>]}/>
      <Route path='/protfolio' element={[<Protmenu/>,<Home/>,<About/>,<Certification/>,<Education/>,<Skills/>,<Contact/>]}/>
      
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
