import './App.css';
import { Routes, Route } from "react-router-dom";
import { Link } from 'react-router-dom';
import {Main} from "./main";
import Day1Q from "./rescript/day1";
import Day3Q from "./rescript/day3";
import Day5Q from "./rescript/day5";
import UseMemo from "./seminar/useMemo/UseMemo";
import UseCallback from "./seminar/useCallback/UseCallback";
import UseCallback_1 from "./seminar/useCallback/UseCallback_1";

const App = () => {
  return (
    <div className="App">
      <header>
        <div>
          <Link to="/" element={<Main/>}>리액트 연습 (홈으로)</Link>
        </div>
      </header>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/day1q" element={<Day1Q/>}/>
          <Route path="/day3q" element={<Day3Q/>}/>
          <Route path="/day5q" element={<Day5Q/>}/>
          <Route path="/usememo" element={<UseMemo/>}/>
          <Route path="/usecallback" element={<UseCallback/>}/>
          <Route path="/usecallback_1" element={<UseCallback_1/>}/>
        </Routes>
    </div>
  );
}

export default App;
