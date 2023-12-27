
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home';
import Create from './Create';
import Update from './Update';
import Read from './Read';
function App() {
  return (
    <div className='wrapper'>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/create' element={<Create/>} />
    <Route path='/update/:id' element={<Update/>} />
    <Route path='/read/:id' element={<Read/>} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
