import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Todolist from "./MyComponents/Todolist";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="active" element={<Todolist />} />
          <Route path="completed" element={<Todolist />} />
          <Route path="all" element={<Todolist />} />
          <Route path="/" element={<Todolist />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
