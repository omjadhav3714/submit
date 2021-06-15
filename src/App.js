import './App.css';
import { Routes, Route } from "react-router-dom";
import {Form } from "./Pages/";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Form />}></Route>
      </Routes>
    </div>
  );
}

export default App;
