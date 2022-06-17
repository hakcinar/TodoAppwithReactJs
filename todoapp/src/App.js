import Login from "./Components/Login";
import { Routes, Route } from "react-router-dom";
import TodoMain from "./Components/TodoMain";
import './App.css'
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="todomain" element={<TodoMain />} />
      </Routes>
    </div>
  );
}

export default App;
