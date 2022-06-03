import './App.css';
import {BrowserRouter ,Routes,Route} from 'react-router-dom';
import  Active from './MyComponents/Active'
import Completed from './MyComponents/Completed'
import Todolist from './MyComponents/Todolist';
import Tasklist from './MyComponents/Tasklist';
function App() {
 
  return <>
    
    
    <BrowserRouter>
      <Routes>
        
        <Route path="active" element={<Todolist/>} />
        <Route path="completed" element={<Todolist/>} />
        <Route path="all" element={<Todolist/>} />
        <Route path="/" element={<Todolist/>} />
      </Routes>
    
    </BrowserRouter>
    
    </>
}

export default App;
