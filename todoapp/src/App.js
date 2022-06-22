import Login from "./Components/Login";
import { Routes, Route } from "react-router-dom";
import './App.css'
import Header from "./Components/Header";
import ShowTodos from "./Components/ShowTodos";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/ShowTodos" element={<ShowTodos />} />
      </Routes>
    </div>
  );
}

export default App;
