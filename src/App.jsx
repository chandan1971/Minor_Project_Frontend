import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './Pages/HomePage';
import ResultPage from './Pages/ResultPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/result" element={<ResultPage></ResultPage>}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
